import React, { useEffect, useState } from 'react';
import { UserPreviewContainer, UlContainer } from './Main-styles';
import UserItem from '../User-item/user-item';
import Api from '../../services/api';

const Main = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const loadDevs = async () => {
      const response = await Api.get('/search');
     setPeople(response.data.devs);
    }
    loadDevs();
  }, []);

  return (
    <UserPreviewContainer>
      <UlContainer>
        { people.map(person => (
          <UserItem key={person._id} person={person} />))
        }
      </UlContainer>
    </UserPreviewContainer>
  )
}
export default Main;