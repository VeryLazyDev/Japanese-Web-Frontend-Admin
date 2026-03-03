import { LoginProvider } from "./context/login-provider";
import LoginAdminPage from "./page";

const LoginAdminWrapper = () => {
  return (
    <LoginProvider>
      <LoginAdminPage />
    </LoginProvider>
  );
};
export default LoginAdminWrapper;
