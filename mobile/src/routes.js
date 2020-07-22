import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'MandaJobs!'
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil'
      },
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#bd8a24'
      },
    }
  })
);

export default Routes;