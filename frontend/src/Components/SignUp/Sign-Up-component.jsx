import React, { useState, useEffect } from 'react';
import FormInput from '../Form-input/form-input-component';
import { FormButton, FormBlockContainer, FormInputTitle, FormsCoordsDiv } from '../Form-input/form-input-styles';

const Register = ({onSubmit}) => {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [name, setName] = useState('');
  const [techs, setTechs] = useState('');
  const [fields, setFields] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [github_username, setGithub_username] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => console.log(err),
      {
        timeout: 30000,
      }
    );
  }, []);

  const data = {
    name,
    github_username,
    fields,
    techs, 
    latitude,
    longitude,
    whatsapp,
    email,
  },

  handleSubmit = async (event) => {
    event.preventDefault();

    console.log(data);
    await onSubmit(data);

    setGithub_username('');
    setName('');
    setEmail('');
    setFields('');
    setWhatsapp('');
    setTechs('');
  }

  return (
    <form className='cadastro' onSubmit={handleSubmit}>
      <FormBlockContainer>
        <FormInputTitle>Cadastro</FormInputTitle>
        <FormInput id={ 'name' } label={ 'Seu nome' } value={ name } onChange={ e => setName(e.target.value) } required />
        <FormInput id={ 'github_username' } label={ 'Usuário do GitHub (Opcional)' } value={ github_username } onChange={ e => setGithub_username(e.target.value) } />
        <FormInput id={ 'fields' } label={ 'Área de atuação' } value={ fields } onChange={ e => setFields(e.target.value) } required />
        <FormInput id={ 'tecnologias' } label={ 'Tecnologias' } value={ techs } onChange={ e => setTechs(e.target.value) } required />
        <FormInput id={ 'email' } type='email' label={ 'E-mail' } value={ email } onChange={ e => setEmail(e.target.value) } required />
        <FormInput id={ 'whatsapp' } type='tel' maxlength="14" label={ 'WhatsApp (Apenas números)' } value={ whatsapp } onChange={ e => setWhatsapp(e.target.value) } required />
        <FormsCoordsDiv>
          <FormInput id={ 'latitude' } type='number' coords={ true } label={ 'Latitude' } value={ latitude } onChange={ e => setLatitude(e.target.value) } required />
          <FormInput id={ 'longitude' } type='number' coords={ true } label={ 'Longitude' } value={ longitude } onChange={ e => setLongitude(e.target.value) } required />
        </FormsCoordsDiv>
        <FormButton type='submit'>Cadastrar</FormButton>
      </FormBlockContainer>
    </form>
  )
}
export default Register;