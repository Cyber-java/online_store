import React, { useState } from "react";
import PropTypes from "prop-types";
const TextField = ({ label, type, onChange, name, value, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };
  return (
    <div className="mt-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          className={getInputClasses()}
          type={showPassword ? "text" : type}
          id={name}
          value={value}
          name={name}
          onChange={onChange}
        ></input>
        {type === "password" && (
          <button
            className="btn btn-outline-secondary border-left-0"
            onClick={handleShowPassword}
          >
            <i className={"bi bi" + (showPassword ? "-eye" : "-eye-slash")}></i>
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};
TextField.defaultProps = { type: "text" };
TextField.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
};
export default TextField;
