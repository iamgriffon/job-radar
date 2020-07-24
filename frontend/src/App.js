import React, { useState, useEffect } from 'react';
import { UserPreviewContainer, UlContainer } from './Components/Main/Main-styles';
import UserItem from './Components/User-item/user-item';
import Api from './services/api';
import { AppContainer } from './App.styles';
import './Global.scss';
import Register from './Components/SignUp/Sign-Up-component';


function App() {

  const [people, setPeople] = useState([]);

  const loadDevs = async () => {
    const response = await Api.get('/search');
    setPeople(response.data.devs);
  }
  useEffect(() => {
    loadDevs();
  }, []);

  const handleAddUser = async (data) => {
    try {
      var response = await Api.post('/register', data);
      if (response.status !== 200) {
        alert(response.error);
        return;
      }
      loadDevs();
    } catch (error) {
      alert('Dei ruim lek');
    }
  }

  return (
    <AppContainer id='app'>
      <Register onSubmit={ handleAddUser } loadDevs={ loadDevs } />
      <UserPreviewContainer>
        <UlContainer>
          { people.map(person => (
            <UserItem key={ person._id } person={ person } />))
          }
        </UlContainer>
      </UserPreviewContainer>
    </AppContainer>
  );
}
export default App;
