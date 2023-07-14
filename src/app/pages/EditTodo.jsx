import React, { useState } from "react";
import { useTodoStore } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const EditTodo = () => {
    const { activeTodo, startEditTodo } = useTodoStore();

    const navigate = useNavigate();

    console.log({ activeTodo });

    const [form, setForm] = useState({
        title: activeTodo.title,
        description: activeTodo.description,
        priority: activeTodo.priority,
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        console.log("Form submitted");
        startEditTodo(activeTodo.id, {
            ...form,
        });
    };

    return (
        <>
            <h1>Edit Todo</h1>

            <form onSubmit={handleSubmit}>
                <label className="form-label">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    onChange={handleChange}
                    value={form.title}
                />

                <label className="form-label">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    className="form-control"
                    onChange={handleChange}
                    value={form.description}
                />

                <label className="form-label">Priority</label>
                <select
                    id="priority"
                    name="priority"
                    className="form-control mb-3"
                    onChange={handleChange}
                    value={form.priority}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <label className="form-label">State</label>
                <select
                    id="state"
                    name="state"
                    className="form-control mb-3"
                    onChange={handleChange}
                    value={form.state}
                >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <button type="submit" className="btn btn-success">
                    Update
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => navigate(`/todo/${activeTodo.id}`)}
                >
                    Back
                </button>
            </form>
        </>
    );
};
