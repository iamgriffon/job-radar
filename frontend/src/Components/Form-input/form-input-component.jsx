import React from 'react';
import { FormInputContainer, FormCoordsContainer, FormInputLabel } from './form-input-styles';

const FormInput = ({ handleChange, label, id, coords, ...otherProps }) => (
  <div>
      {
        label? (<FormInputLabel htmlFor={ id } >{ label }</FormInputLabel>) : null
      }
      {
        coords?
        (<FormCoordsContainer name={ id } onChange={ handleChange } { ...otherProps } />) :
        (<FormInputContainer name={ id } onChange={ handleChange } { ...otherProps } />)
      }
  </div>
);
export default FormInput;