import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";
import NotFoundPage from "./Components/NotFoundPage";
import ContactUsPage from "./Components/ContactUsPage";
import HoneyBadgerCard from "./Components/HoneyBadgerCard";
import SortOrderForm from "./Components/SortOrderForm";
import UserPage from "./Components/UserPage";
import UserLikesPage from "./Components/UserLikesPage";
import UserPostsPage from "./Components/UserPostsPage";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home page</Link>
        <Link to="/about">About us</Link>
        <Link to="/honeybadgers">HONEY BADGERS!</Link>
      </nav>
      <h1> Welcome to my website</h1>
      <h1> FIND OUT ABOUT OUR HONEY BADGERS HERE</h1>
      <SortOrderForm />
      <Routes>
        <Route path="/users/:username" element={<UserPage />}>
          <Route path="posts" element={<UserPostsPage />} />
          <Route path="likes" element={<UserLikesPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/honeybadgers" element={<HoneyBadgerCard />} />
      </Routes>
      <footer>
        <Link to="/contact">Contact us</Link>
      </footer>
    </div>
  );
}
