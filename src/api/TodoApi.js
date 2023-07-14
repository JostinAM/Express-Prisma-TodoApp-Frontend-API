import axios from "axios";

const TodoApi = axios.create({
    baseURL: "http://localhost:3000/api",
});

export default TodoApi;
