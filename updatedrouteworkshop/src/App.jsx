import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";
import NotFoundPage from "./Components/NotFoundPage";

export default function App() {
  return (
    <div className="App">
      <h1> Welcome to my website</h1>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
