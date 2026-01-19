import { useLogin } from "../hooks/useLogin";

const LoginForm = () => {
  const { formAction, loginFormState } = useLogin();
  return (
    <form className="w-100 h-100">
      <input
        type="text"
        placeholder="Username"
        defaultValue={loginFormState.username}
        name="username"
        className="w-100 h-10 bg-light-bg"
      />
      <input
        type="password"
        placeholder="Password"
        defaultValue={loginFormState.password}
        name="password"
        className="w-100 h-10 bg-light-bg"
      />
      <button formAction={formAction} className="w-20 h-10 bg-light-bg">
        Login
      </button>
    </form>
  );
};
export default LoginForm;
