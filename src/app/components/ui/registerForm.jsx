import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import { validateConfig } from "../../utils/validateConfig";
import SelectField from "../common/form/selectField";
import API from "../../api";

const RegisterForm = () => {
  const [data, setData] = useState({ email: "", password: "", resource: "" });
  const [errors, setErrors] = useState({});
  const [resources, setResources] = useState([]);

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  useEffect(() => {
    validate();
  }, [data]);

  useEffect(() => {
    API.resource.fetchAll().then((data) => {
      const resourcesList = Object.keys(data).map((resourceName) => ({
        label: data[resourceName].name,
        value: data[resourceName].id,
      }));
      setResources(resourcesList);
    });
  }, []);
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
      <h3 className="mb-4">Register</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          value={data.email}
          onChange={handleChange}
          label="Введите свой Email"
          error={errors.email}
        />
        <TextField
          type="password"
          name="password"
          onChange={handleChange}
          value={data.password}
          label="Придумайте пароль"
          error={errors.password}
        />
        <SelectField
          options={resources}
          name="resource"
          label="Откуда вы о нас узнали?"
          value={data.resource}
          onChange={handleChange}
          defaultOptions="Способ..."
          error={errors.resource}
        />
        <button
          className="btn btn-primary mt-4 w-100 wx-auto"
          disabled={!isValideButton}
        >
          Отправить
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
