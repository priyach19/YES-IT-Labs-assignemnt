import React from "react";
import { FormProvider } from "./context/FormContext";
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <FormProvider>
      <UserForm />
    </FormProvider>
  );
};

export default App;
