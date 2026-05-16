import { Routes, Route, Link } from 'react-router-dom';
import BoardPage from './pages/BoardPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>Kanban Board</h1>
        <div>
          <Link to="/">Board</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}