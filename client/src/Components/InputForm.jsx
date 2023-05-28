import { TextField } from "@mui/material";

const InputForm = ({
  username,
  password,
  onChangeUsername,
  onChangePassword,
}) => {
  return (
    <div>
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
  );
};

export default InputForm;
