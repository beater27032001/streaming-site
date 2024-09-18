import { MdOutlineMovie } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";

interface SerieCardProps {
  id: number;
  title: string;
  year: number;
  image: string;
  seasons: number;
}

export default function SerieCard({
  id,
  title,
  year,
  image,
  seasons,
}: SerieCardProps) {
  return (
    <Link to={`/series/${id}`}>
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
              <MdOutlineMovie />
              <span>{seasons} temporadas</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
