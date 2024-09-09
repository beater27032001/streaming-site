import { Link } from "react-router-dom";
import { FaHome, FaFilm, FaTv } from "react-icons/fa";

export default function Header() {
  return (
    <header className="p-4 flex justify-between">
      <Link to="/" className="text-2xl font-bold">
        StreamingApp
      </Link>
      <nav className="flex space-x-4">
        <Link to="/" className="flex items-center gap-1">
          <FaHome /> Home
        </Link>
        <Link to="/movies" className="flex items-center gap-1">
          <FaFilm /> Filmes
        </Link>
        <Link to="/series" className="flex items-center gap-1">
          <FaTv /> Séries
        </Link>
      </nav>
    </header>
  );
}
