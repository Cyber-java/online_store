import React, { useState, useEffect } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";
import { validateConfig } from "../utils/validateConfig";

const SingIn = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  useEffect(() => {
    validate();
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValide = validate();
    if (!isValide) return;
    console.log(data);
  };

  const validate = () => {
    const errors = validator(data, validateConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValideButton = Object.keys(errors).length === 0;
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-4">
            <h3 className="mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <TextField
                name="email"
                value={data.email}
                onChange={handleChange}
                label="Email"
                error={errors.email}
              />
              <TextField
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                label="Password"
                error={errors.password}
              />
              <button
                className="btn btn-primary m-2 w-100 wx-auto"
                disabled={!isValideButton}
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingIn;
