import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/auth";

const useForm = (username, password) => {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    setMessage("");
    if (!username) setMessage("Missing username");
    else if (!password) setMessage("Missing password");
    else {
      AuthService.login(username, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        () => {
          setMessage("Invalid username or password");
        }
      );
    }
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    setMessage("");
    if (!username) setMessage("Missing username");
    else if (!password) setMessage("Missing password");
    else {
      AuthService.register(username, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          setMessage(error.response.data.message);
        }
      );
    }
  };

  return {
    message,
    handleLogin,
    handleRegister,
  };
};

export default useForm;
