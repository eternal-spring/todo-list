import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css";
import LinkButton from "../LinkButton";
import UserForm from "../UserForm";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <UserForm type="login" />
      <LinkButton onClick={() => navigate("/signup")}>Sign Up</LinkButton>
    </div>
  );
};

export default Login;
