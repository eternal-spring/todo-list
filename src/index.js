import { React } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import useTodo from './Hooks/useTodo';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { Typography } from '@mui/material';

const App = () => {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodo('http://localhost:3000/tasks');

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todo List
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);