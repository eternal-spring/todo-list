import { useState, useEffect } from 'react';
import { getTodos, postTodo, updateTodo, deleteTodo } from '../Services';

export default (url) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getAllTodos = async () => {
      const response = await getTodos(url);
      console.log(response);
      setTodos(response);
    };
    getAllTodos();
  }, [])

  return {
    todos,

    addTodo: async description => {
      await postTodo(url, {description: description, isDone: false});
      const newTodos = await getTodos(url);
      setTodos(newTodos);    
    },

    updateTodo: async todo => {
      await updateTodo(url, todo);
      const newTodos = await getTodos(url);
      setTodos(newTodos);
    },
    
    deleteTodo: async id => {
      await deleteTodo(url, id);
      const newTodos = await getTodos(url);
      setTodos(newTodos);
    }
  };
};