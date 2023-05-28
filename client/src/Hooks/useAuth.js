import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/auth";

const useAuth = (isHomePage) => {
  let navigate = useNavigate();
  const [user, setUser] = useState("")
  useEffect(() => {
    const getUser = () => {
      const user = AuthService.getCurrentUser();
      if (!user && isHomePage) {
        navigate("/login");
        window.location.reload();
      }

      if (user && !isHomePage) {
        navigate("/home");
        window.location.reload();
      }
      if (user) setUser(user);
    };
    getUser();
  });
  return {
    user,
    handleLogout: () => {
      AuthService.logout();
      window.location.reload();
    },
  };
};

export default useAuth;
