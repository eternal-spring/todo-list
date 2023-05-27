import { Button, TextField } from "@mui/material";
import useForm from "../Hooks/useForm";
import useUserInput from "../Hooks/useUserInput";

const UserForm = ({ type }) => {
  const { username, password, onChangeUsername, onChangePassword } =
    useUserInput();
  const { message, handleRegister, handleLogin } = useForm(username, password);
  return (
    <form className="Form">
      <p className={message ? "message" : "offscreen"} aria-live="assertive">
        {message}
      </p>
      <TextField
        fullWidth
        InputProps={{ sx: { marginBottom: 1 } }}
        label="Name"
        type="text"
        id="username"
        value={username}
        onChange={onChangeUsername}
        required
      />
      <div>
        <TextField
          fullWidth
          InputProps={{ sx: { marginBottom: 1 } }}
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <Button
        onClick={type === "login" ? handleLogin : handleRegister}
        className="login-button"
      >
        {type === "login" ? "Sign in" : "Sign up"}
      </Button>
    </form>
  );
};

export default UserForm;
