export function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, config) {
    let isValidate;
    switch (validateMethod) {
      case "isRequired":
        isValidate = data.trim() === "";
        break;
      case "isMail": {
        const emailRegex = /^\S+@\S+\.\S+$/g;
        isValidate = !emailRegex.test(data);
        break;
      }

      case "isCapitalSimbol": {
        const capitalRegex = /[A-Z]+/g;
        isValidate = !capitalRegex.test(data);
        break;
      }
      case "isContainDigit": {
        const digitRegex = /\d+/g;
        isValidate = !digitRegex.test(data);
        break;
      }
      case "min": {
        isValidate = data.length < config.value;
        break;
      }
    }
    if (isValidate) return config.message;
  }
  for (const name in data) {
    for (const validateMethod in config[name]) {
      const error = validate(
        validateMethod,
        data[name],
        config[name][validateMethod]
      );
      if (error && !errors[name]) {
        errors[name] = error;
      }
    }
  }
  return errors;
}
