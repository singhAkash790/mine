import React, { createContext, useState } from 'react';

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [errors, setErrors] = useState({});

  const addError = (field, error) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  return (
    <AlertContext.Provider value={{ errors, addError, clearErrors }}>
      {children}
    </AlertContext.Provider>
  );
};