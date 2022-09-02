import React from 'react';
import './custom-input.styles.scss';

function CustomInput({ handleChange, label, name, defaultValue, type}) {
  return (
    <div>
      <label className={`form-input-label-${name}`}>{label}</label>
      <input
        className={`form-input-${name}`}
        onChange={(e) => handleChange(e)}
        name={name}
        placeholder={defaultValue}
        type={type}
      />
    </div>
  );
}

export default CustomInput;
