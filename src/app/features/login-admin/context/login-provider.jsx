import { useActionState } from "react";
import LoginContext from "./login-context";

export async function LoginHandler(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || !password) {
    return {
      error: "Missing credentials",
      username,
      password,
    };
  }

  // fake login
  await new Promise((r) => setTimeout(r, 500));

  return {
    success: true,
    username,
    password,
  };
}
export const LoginProvider = ({ children }) => {
  const [loginFormState, formAction] = useActionState(LoginHandler, {
    username: "",
    password: "",
    success: false,
    error: null,
  });
  return (
    <LoginContext.Provider value={{ loginFormState, formAction }}>
      {children}
    </LoginContext.Provider>
  );
};
