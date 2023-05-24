import React from 'react';
import { TextField } from '@mui/material';
import useInput from '../Hooks/useInput';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInput();

  return (
    <form
      onSubmit={event => {
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