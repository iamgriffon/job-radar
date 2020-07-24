import React, { useState, useEffect } from 'react';
import FormInput from '../Form-input/form-input-component';
import { FormButton, FormBlockContainer, FormInputTitle, FormsCoordsDiv } from '../Form-input/form-input-styles';

const Register = (props) => {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [name, setName] = useState('');
  const [techs, setTechs] = useState('');
  const [fields, setFields] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [avatar_url, setAvatar_url] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      fields,
      techs,
      latitude,
      longitude,
      whatsapp,
      email,
      avatar_url,
    }
    props.onSubmit(data);
    setName('');
    setEmail('');
    setFields('');
    setWhatsapp('');
    setTechs('');
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        return console.log(err);
      },
      {
        timeout: 30000,
      }
    );

  }, []);

  return(
    <form className='cadastro' onSubmit={ handleSubmit }>
      <FormBlockContainer>
        <FormInputTitle>Cadastro</FormInputTitle>
        <FormInput id={ 'name' } label={ 'Seu nome' } value={ name } onChange={ e => setName(e.target.value) } required />
        <FormInput id={ 'fields' } label={ 'Área de atuação' } value={ fields } onChange={ e => setFields(e.target.value) } required />
        <FormInput id={ 'tecnologias' } label={ 'Tecnologias' } value={ techs } onChange={ e => setTechs(e.target.value) } required />
        <FormInput id={ 'email' } type='email' label={ 'E-mail' } value={ email } onChange={ e => setEmail(e.target.value) } required />
        <FormInput id={ 'link-foto' } label={ 'Link de uma foto' } value={ avatar_url } onChange={ e => setAvatar_url(e.target.value) } required />
        <FormInput id={ 'whatsapp' } type='number' label={ 'WhatsApp (Apenas números)' } value={ whatsapp } onChange={ e => setWhatsapp(e.target.value) } required />
        <FormsCoordsDiv>
          <FormInput id={ 'latitude' } type='number' coords={ true } label={ 'Latitude' } value={ latitude } onChange={ e => setLatitude(e.target.value) } required />
          <FormInput id={ 'longitude' } type='number' coords={ true } label={ 'Longitude' } value={ longitude } onChange={ e => setLongitude(e.target.value) } required />
        </FormsCoordsDiv>
        <FormButton type='submit'>Cadastrar</FormButton>
      </FormBlockContainer>
    </form>
  );
};
export default Register;