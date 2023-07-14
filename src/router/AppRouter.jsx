import { Navigate, Route, Routes } from "react-router-dom";
import { EditTodo, Home, NewTodo, ViewTodo } from "../app";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewTodo />} />
            <Route path="/todo/:id" element={<ViewTodo />} />
            <Route path="/todo/:id/edit" element={<EditTodo />} />
            <Route path="/*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    );
};
