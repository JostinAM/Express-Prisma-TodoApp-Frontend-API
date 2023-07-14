import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        activeTodo: {},
    },
    reducers: {
        onLoadTodos: (state, action) => {
            state.todos = action.payload;
        },
        onClearTodos: (state) => {
            state.todos = [];
        },
        onAddTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        onSetActiveTodo: (state, action) => {
            state.activeTodo = action.payload;
        },
        onClearActiveTodo: (state) => {
            state.activeTodo = {};
        },
    },
});

export const {
    onLoadTodos,
    onClearTodos,
    onAddTodo,
    onSetActiveTodo,
    onClearActiveTodo,
} = todoSlice.actions;
