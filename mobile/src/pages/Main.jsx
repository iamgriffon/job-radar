import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { getCurrentPositionAsync, requestPermissionsAsync } from 'expo-location';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../services/api';

function Main({ navigation }) {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }
    loadInitialPosition();
  }, []);

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;
    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        fields: search,
      }
    });
    setPeople(response.data.devs);
    console.log(people);
  }

  handleRegionChanged = region => {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }
  return (
    <>
      <MapView
        onRegionChangeComplete={ handleRegionChanged }
        initialRegion={ currentRegion }
        style={ styles.map }>

        { people.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              longitude: dev.location.coordinates[0],
              latitude: dev.location.coordinates[1],
            }}
          >
            <Image
              style={ styles.avatar }
              source={ { uri: dev.avatar_url } }
            />

            <Callout onPress={ () => { navigation.navigate('Profile', { User: dev.github_username }); } }>

              <View style={ styles.callout }>
                <Text style={ styles.devName }> { dev.name } </Text>
                <Text style={ styles.bio }> { dev.techs.join(', ') } </Text>
                <Text style={ styles.techs }> { dev.fields.join(', ') }</Text>
              </View>
            </Callout>
          </Marker>
        )) }
      </MapView>

      <View style={ styles.searchForm }>
        <TextInput style={ styles.SearchInput }
          placeholder='Buscar por profissão...'
          placeholderTextColor='#999'
          autoCapitalize="words"
          autoCorrect={ false }
          value={search}
          onChangeText={setSearch} />

        <TouchableOpacity onPress={ loadDevs } style={ styles.loadButton }>
          <MaterialIcons name="my-location" size={ 20 } color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: 4,
  },
  callout: {
    width: 280,
  },
  devName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    color: '#666',
    marginTop: 5,
  },
  techs: {
    marginTop: 5,
  },
  searchForm: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
    paddingLeft: 10,
    flex: 1,
  },
  SearchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 35,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 3,
      height: 2,
    },
    elevation: 2,
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#cc871f',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    borderRadius: 35,
  }
});

export default Main;