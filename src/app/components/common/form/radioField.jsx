import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ label, name, options, onChange, value }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className="mb-4">
      <div>
        <label className="form-label">{label}</label>
      </div>
      {options.map((option) => (
        <div
          className="form-check form-check-inline"
          key={option.name + "_" + option.value}
        >
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={option.name + "_" + option.value}
            checked={option.value === value}
            value={option.value}
            onChange={handleChange}
          />
          <label
            className="form-check-label"
            htmlFor={option.name + "_" + option.value}
          >
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};
RadioField.propTypes = {};
export default RadioField;
