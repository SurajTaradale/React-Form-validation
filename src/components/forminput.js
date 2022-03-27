import React, { useState } from "react";
import "../styles/forminput.css";
const Forminput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...fieldval } = props;
  const handlefocuse = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...fieldval} onChange={onChange} onBlur={handlefocuse} focused={focused.toString()}/>
      <span>{errorMessage}</span>
    </div>
  );
};

export default Forminput;
