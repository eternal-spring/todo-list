import React from "react";
import { TextField } from "@mui/material";
import useTodoInput from "../Hooks/useTodoInput";

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useTodoInput();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
