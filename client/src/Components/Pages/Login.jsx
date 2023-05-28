import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css";
import LinkButton from "../LinkButton";
import useLogin from "../../Hooks/useLogin";
import useUserInput from "../../Hooks/useUserInput";
import InputForm from "../InputForm";
import { Button } from "@mui/material";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  useAuth(false);
  const navigate = useNavigate();
  const { username, password, onChangeUsername, onChangePassword } =
    useUserInput();
  const { message, handleLogin } = useLogin(username, password);
  return (
    <div>
      <form className="Form" onSubmit={handleLogin}>
        <p className={message ? "message" : "offscreen"} aria-live="assertive">
          {message}
        </p>
        <InputForm
          username={username}
          password={password}
          onChangeUsername={onChangeUsername}
          onChangePassword={onChangePassword}
        />
        <Button className="form-button" type="submit">
          Sign in
        </Button>
      </form>
      <LinkButton onClick={() => navigate("/signup")}>Sign Up</LinkButton>
    </div>
  );
};

export default Login;
