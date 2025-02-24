
import { Route, Routes } from "react-router-dom";
import MainPage from "./routes/MainPage";
import NotFoundPage from "./routes/NotFoundPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}
