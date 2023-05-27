import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/tasks";

class TaskService {
  async getTodos(userId) {
    try {
      const response = await axios.get(API_URL, {
        headers: authHeader(),
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }

  async postTodo(task) {
    try {
      const response = await axios.post(API_URL, task, {
        headers: authHeader(),
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }

  async deleteTodo(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`, {
        headers: authHeader(),
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }

  async updateTodo(task) {
    try {
      const response = await axios.patch(
        `${API_URL}/${task.id}`,
        { id: task.id, isDone: !task.isDone },
        { headers: authHeader() }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TaskService();
