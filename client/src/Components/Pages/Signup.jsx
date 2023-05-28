import React from "react";
import LinkButton from "../LinkButton";
import { useNavigate } from "react-router-dom";
import useRegister from "../../Hooks/useRegister";
import useUserInput from "../../Hooks/useUserInput";
import InputForm from "../InputForm";
import { Button } from "@mui/material";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  useAuth(false);
  const navigate = useNavigate();
  const { username, password, onChangeUsername, onChangePassword } =
    useUserInput();
  const { message, handleRegister } = useRegister(username, password);

  return (
    <div>
      <form className="Form" onSubmit={handleRegister}>
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
          Sign up
        </Button>
      </form>
      <LinkButton onClick={() => navigate("/login")}>Sign In</LinkButton>
    </div>
  );
};

export default Signup;
