import { createContext } from "react";

const LoginContext = createContext({
  loginFormState: null,
  formAction: () => {},
});
export default LoginContext;
