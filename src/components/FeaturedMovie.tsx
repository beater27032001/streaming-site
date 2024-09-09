import { CiClock2 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";

interface FeaturedMovieProps {
  title: string;
  year: number;
  image: string;
  duration: number;
  description: string;
}

export default function FeaturedMovie({
  title,
  year,
  image,
  duration,
  description,
}: FeaturedMovieProps) {
  return (
    <div
      className="relative w-full h-96 bg-cover bg-center rounded-3xl"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl flex flex-col justify-center p-8 text-white">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        <div className="flex items-center">
          <div className="flex items-center gap-1">
            <CiCalendar />
            <span className="mr-4">{year}</span>
          </div>
          <div className="flex items-center gap-1">
            <CiClock2 />
            <span>{duration} min</span>
          </div>          
        </div>
      </div>
    </div>
  );
}
