import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <>
    <label>{label}</label>
    <input onChange={handleChange} {...otherProps} required />
  </>
);

export default FormInput;