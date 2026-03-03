import { useContext } from "react";
import { LoginContext } from "../context/login-provider";

export const useLogin = () => useContext(LoginContext);
