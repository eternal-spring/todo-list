import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/auth";

const useRegister = (username, password) => {
    let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleRegister = async (event) => {
    event?.preventDefault();
      AuthService.register(username, password).then(
        () => {
           AuthService.login(username, password).then(() => 
           {navigate("/home");
          window.location.reload();})
        },
        (error) => {
          setMessage(error.response.data.message);
        }
      );
  };

  return {
    message,
    handleRegister
  };
};

export default useRegister;
