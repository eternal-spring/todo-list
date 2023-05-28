import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/auth";

const useLogin = (username, password) => {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleLogin = (event) => {
    event?.preventDefault();
    AuthService.login(username, password).then(
      () => {
        navigate("/home");
        window.location.reload();
      },
      () => {
        setMessage("Invalid username or password");
      }
    );
  };
  return {
    message,
    handleLogin,
  };
};

export default useLogin;
