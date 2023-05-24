import '../../styles.css';
import useTodo from '../../Hooks/useTodo';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import { Typography } from '@mui/material';

const Home = () => {
    const { todos, addTodo, updateTodo, deleteTodo } = useTodo('http://localhost:3000/tasks');
  
    return (
      <div className="Home">
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

  
  export default Home;