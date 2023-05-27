import { useState } from "react";

const useUserInput = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return {
    username,
    password,
    onChangeUsername: (event) => {
      setUsername(event.target.value);
    },
    onChangePassword: (event) => {
      setPassword(event.target.value);
    },
  };
};

export default useUserInput;
