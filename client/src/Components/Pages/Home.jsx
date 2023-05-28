import "../../styles.css";
import useTodo from "../../Hooks/useTodo";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import { Typography } from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import LinkButton from "../LinkButton";

const Home = () => {
  const { user, handleLogout } = useAuth(true);
  const { todos, addTodo, updateTodo, deleteTodo } = useTodo();
  return (
    <div className="Home">
      <Typography component="h1" variant="h2">
        Todo List
      </Typography>

      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <div><Typography top="30px" left="30px" variant="h6" position="absolute">{user?.name}</Typography><LinkButton onClick={handleLogout}>Log out</LinkButton></div>
    </div>
  );
};

export default Home;
