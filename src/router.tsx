import { createBrowserRouter } from "react-router";
import MainPage from "./routes/MainPage";
import SecondPage from "./routes/SecondPage";
import TodoItem from "./routes/TodoItem";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/second", element: <SecondPage /> },
  { path: "*", element: <h1>Not Found</h1> },
  { path: ":slug", element: <TodoItem /> },
]);
