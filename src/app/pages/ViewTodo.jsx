import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodoStore } from "../../hooks";

export const ViewTodo = () => {
    const { id } = useParams();
    const { starLoadingActiveTodo, activeTodo, startDeleteTodo } =
        useTodoStore();

    const navigate = useNavigate();

    useEffect(() => {
        starLoadingActiveTodo(id);
    }, []);

    const handleDeleteTodo = () => {
        startDeleteTodo(id);
    };

    return (
        <>
            <h1>{activeTodo.title}</h1>

            <p>{activeTodo.description}</p>

            <p>{activeTodo.priority}</p>

            <p>{activeTodo.state}</p>

            <a className="btn btn-primary" href="/">
                Back
            </a>
            <button
                className="btn btn-warning"
                onClick={() => navigate(`/todo/${activeTodo.id}/edit`)}
            >
                Edit
            </button>

            <button className="btn btn-danger" onClick={handleDeleteTodo}>
                Delete
            </button>
        </>
    );
};
