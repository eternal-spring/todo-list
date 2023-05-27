import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/auth";

const useAuth = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const getUser = () => {
      const user = AuthService.getCurrentUser();
      if (!user) {
        navigate("/login");
        window.location.reload();
      }
    };
    getUser();
  });
  return {
    handleLogout: () => {
      AuthService.logout();
      window.location.reload();
    },
  };
};

export default useAuth;
