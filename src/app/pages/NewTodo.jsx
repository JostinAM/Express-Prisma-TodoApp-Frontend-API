import React, { useState } from "react";
import { useTodoStore } from "../../hooks";

export const NewTodo = () => {
    const { startSavingTodo } = useTodoStore();

    const [form, setForm] = useState({
        title: "",
        description: "",
        priority: "Low",
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
        startSavingTodo({
            ...form,
        });
    };

    return (
        <>
            <h1>New Todo</h1>

            <form onSubmit={handleSubmit}>
                <label className="form-label">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    onChange={handleChange}
                />

                <label className="form-label">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    className="form-control"
                    onChange={handleChange}
                />

                <label className="form-label">Priority</label>
                <select
                    id="priority"
                    name="priority"
                    className="form-control mb-3"
                    onChange={handleChange}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <button type="submit" className="btn btn-success">
                    Create
                </button>
                <a className="btn btn-danger" href="/">
                    Back
                </a>
            </form>
        </>
    );
};
