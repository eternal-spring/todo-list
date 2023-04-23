import axios from "axios";

export const getTodos = async (url) => {
  try {
        const response = await axios
            .get(url);
        console.log(response);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const postTodo = async (url, task) => {
  try {
        const response = await axios
            .post(url, task);
        console.log(response);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const deleteTodo = async (url, id) => {
  try {
        const response = await axios
            .delete(`${url}/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const updateTodo = async (url, task) => {
  try {
        const response = await axios
            .patch(`${url}/${task.id}`, { isDone: !task.isDone });
        console.log(response);
        return response.data;
    } catch (error) {
        return error.message;
    }
}
