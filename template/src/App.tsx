import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
};
