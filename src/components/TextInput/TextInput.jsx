import React from 'react';

const TextInput = ({ labelText, className, id, value, onChange, ...otherProperties }) => (
  <div className={'text-input form-group' + (className ? ' ' + className : '')}>
    <label className="text-input--label" htmlFor={id}>
      {labelText}
    </label>
    <input
      type="text"
      id={id}
      className="text-input--input form-control"
      value={value}
      onChange={onChange}
      {...otherProperties}
    />
  </div>
);

export default TextInput;