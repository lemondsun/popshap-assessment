import React from 'react';
import './custom-input.styles.scss';

function CustomInput({
  handleChange,
  label,
  name,
  defaultValue,
  type,
  reqiredValue
}) {
  return (
    <div>
      <label className={`form-input-label-${name}`}>{label}</label>
      <input
        className={`form-input-${name}`}
        onChange={(e) => handleChange(e)}
        name={name}
        placeholder={defaultValue}
        type={type}
        required
        value={reqiredValue}
      />
    </div>
  );
}

export default CustomInput;
