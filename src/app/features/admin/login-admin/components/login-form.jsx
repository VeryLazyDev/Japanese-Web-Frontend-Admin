import { useLogin } from "../hooks/useLogin";
import InputField from "./input-field";

const LoginForm = () => {
    const { formAction, loginFormState } = useLogin();
    return (
        <form
            className="w-100 h-100 text-primary flex flex-col items-center justify-center gap-2"
            onSubmit={(e) => e.preventDefault()}
        >
            <div>
                <h3 className="text-xl font-semibold">Just Login</h3>
            </div>
            <InputField
                type="text"
                name={"username"}
                defaultValue={loginFormState.username}
                placeholder="Username"
            />
            <InputField
                type="password"
                name={"password"}
                placeholder="Password"
                defaultValue={loginFormState.password}
            />
            <button
                formAction={formAction}
                type="submit"
                className="w-full h-10 bg-light-bg rounded hover:brightness-90 active:brightness-80"
            >
                Login
            </button>
        </form>
    );
};
export default LoginForm;
