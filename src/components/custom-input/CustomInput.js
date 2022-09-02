import React from 'react';
import './custom-input.styles.scss';

function CustomInput({ handleChange, label, name, defaultValue }) {
  return (
    <div>
      <label className={`form-input-label-${name}`}>{label}</label>
      <input
        className={`form-input-${name}`}
        onChange={(e) => handleChange(e)}
        name={name}
        type="text"
        placeholder={defaultValue}
      />
    </div>
  );
}

export default CustomInput;
