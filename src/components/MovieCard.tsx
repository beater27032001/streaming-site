import { CiClock2 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  year: number;
  image: string;
  duration: number;
}

export default function MovieCard({
  id,
  title,
  year,
  image,
  duration,
}: MovieCardProps) {
  return (
    <Link to={`/movies/${id}`}>
      <div className="flex flex-col h-full max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
        <img
          className="h-2/3 w-full object-cover rounded-t-lg"
          src={image}
          alt={title}
        />
        <div className="flex flex-col justify-between p-4 text-gray-800 h-1/3">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-1">
              <CiCalendar />
              <span>{year}</span>
            </div>

            <div className="flex items-center gap-1">
              <CiClock2 />
              <span>{duration} minutos</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
