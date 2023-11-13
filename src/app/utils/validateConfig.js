export const validateConfig = {
  email: {
    isRequired: { message: "Электронная почта обязательна к заполнению" },
    isMail: { message: "Введите электронный адрес верно" },
  },
  password: {
    isRequired: { message: "Пароль обязателен к заполнению" },
    isCapitalSimbol: {
      message: "Пароль должен содержать хотя бы одну заглавную букву",
    },
    isContainDigit: { message: "Пароль должен содержать хотя бы одну цифру" },
    min: { message: "Пароль должен содержать минимум 8 символов", value: 8 },
  },
  resource: {
    isRequired: { message: "Это это поможет нам улучшить сервис" },
  },
};
