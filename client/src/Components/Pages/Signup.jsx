import React from "react";
import LinkButton from "../LinkButton";
import { useNavigate } from "react-router-dom";
import UserForm from "../UserForm";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <UserForm type="register" />
      <LinkButton onClick={() => navigate("/login")}>Sign In</LinkButton>
    </div>
  );
};

export default Signup;
