import React, {useState, useEffect} from 'react';
import { UserPreviewContainer, UlContainer } from './Components/Main/Main-styles';
import UserItem from './Components/User-item/user-item';
import Api from './services/api';
import { AppContainer } from './App.styles';
import './Global.scss';
import Register from './Components/SignUp/Sign-Up-component';


function App() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const loadDevs = async () => {
      const response = await Api.get('/search');
     setPeople(response.data.devs);
    }
    loadDevs();
  }, []);

  const handleAddDev = async(data) => {
    await Api.post('/register', data);
  }

  return (
    <AppContainer id='app'>
      <Register onSubmit={handleAddDev} />
      <UserPreviewContainer>
      <UlContainer>
        { people.map(person => (
          <UserItem key={person._id} person={person} />))
        }
      </UlContainer>
    </UserPreviewContainer>
  )

    </AppContainer>
  );
}
export default App;
