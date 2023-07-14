import React, { useEffect } from "react";
import { useTodoStore } from "../../hooks";

export const Home = () => {
    const { startLoadingTodos, todos } = useTodoStore();

    useEffect(() => {
        startLoadingTodos();
    }, []);

    return (
        <>
            <h1>Todos:</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <a href={`/todo/${todo.id}`}>{todo.title}</a>
                    </li>
                ))}
            </ul>
            <a href="/new" className="btn btn-primary">
                New Todo
            </a>
        </>
    );
};
