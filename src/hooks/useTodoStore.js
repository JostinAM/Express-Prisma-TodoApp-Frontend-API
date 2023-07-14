import { useDispatch, useSelector } from "react-redux";
import TodoApi from "../api/TodoApi";
import {
    onAddTodo,
    onClearActiveTodo,
    onClearTodos,
    onLoadTodos,
    onSetActiveTodo,
} from "../store";
import { useNavigate } from "react-router-dom";

export const useTodoStore = () => {
    const { todos, activeTodo } = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const startLoadingTodos = async () => {
        
        console.log("loading all todos");
        dispatch(onClearTodos());

        const { data } = await TodoApi.get("/");
        // console.log(data);
        dispatch(onLoadTodos(data.message));
    };

    const startSavingTodo = async ({ title, description, prority }) => {
        console.log("saving todo");

        dispatch(onClearTodos());

        const { data } = await TodoApi.post("/", {
            title,
            description,
            prority,
        });
        console.log(data);
        dispatch(onAddTodo(data.message));
        navigate("/");
    };

    const starLoadingActiveTodo = async (id) => {
        console.log("loading active todo");

        dispatch(onClearActiveTodo());
        const { data } = await TodoApi.get(`/${id}`);
        console.log(data);
        dispatch(onSetActiveTodo(data.message));
    };

    const startDeleteTodo = async (id) => {
        console.log("deleting todo");

        const { data } = await TodoApi.delete(`/${id}`);
        console.log(data);
        navigate("/");
    };

    const startEditTodo = async (
        id,
        { title, description, priority, state }
    ) => {
        console.log("editing todo");

        console.log({ priority });

        const { data } = await TodoApi.put(`/${id}`, {
            title,
            description,
            priority,
            state,
        });
        // console.log(data);
        dispatch(onClearActiveTodo());
        // dispatch(onAddTodo(data.message));
        dispatch(onSetActiveTodo(data.message));
        navigate(`/todo/${id}`);
    };

    return {
        //props
        todos,
        activeTodo,

        //actions
        startLoadingTodos,
        startSavingTodo,
        starLoadingActiveTodo,
        startDeleteTodo,
        startEditTodo,
    };
};
