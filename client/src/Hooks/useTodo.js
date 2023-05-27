import { useState, useEffect } from "react";
import TaskService from "../Services/task";

const useTodo = (userId) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getAllTodos = async () => {
      const response = await TaskService.getTodos();
      console.log(response);
      setTodos(response);
    };
    getAllTodos();
  }, [userId]);

  return {
    todos,

    addTodo: async (description) => {
      await TaskService.postTodo({ description: description, isDone: false });
      const newTodos = await TaskService.getTodos();
      setTodos(newTodos);
    },

    updateTodo: async (todo) => {
      await TaskService.updateTodo(todo);
      const newTodos = await TaskService.getTodos();
      setTodos(newTodos);
    },

    deleteTodo: async (id) => {
      await TaskService.deleteTodo(id);
      const newTodos = await TaskService.getTodos();
      setTodos(newTodos);
    },
  };
};

export default useTodo;
