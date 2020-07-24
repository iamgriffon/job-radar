import React from 'react';
import { UserPreviewImage, UserPreviewHeader, UserPreviewInfo, UserPreviewName, UserPreviewSkill, UserPreviewBio, UserPreviewLink, UserPreviewPhone } from '../Main/Main-styles';

const UserItem = ({person}) => (
  <li>
  <UserPreviewHeader>
    {
      person.avatar_url?
        (<UserPreviewImage src={ person.avatar_url } alt={ 'Picture not found' } />) :
        (<UserPreviewImage src='https://static2.bigstockphoto.com/1/8/9/large1500/98181947.jpg' alt='A Freelancer' />)
    }
    <UserPreviewInfo>
      <UserPreviewName>{ person.name }</UserPreviewName>
      <UserPreviewSkill>{ person.techs.join(', ') }</UserPreviewSkill>
      <UserPreviewSkill>{ person.fields.join(', ') }</UserPreviewSkill>
    </UserPreviewInfo>
  </UserPreviewHeader>
  <UserPreviewBio>{ person.email }</UserPreviewBio>
  <UserPreviewPhone>{ person.whatsapp }</UserPreviewPhone>

  {
    person.github_username? 
    (<UserPreviewLink href={ `https://github.com/${person.github_username}` }> Link para o perfil do GitHub</UserPreviewLink>) :
    null
  }
</li>
)
export default UserItem