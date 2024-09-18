import { Link, useParams } from "react-router-dom";
import data from "../db/MovieSeries";
import { CiCalendar, CiClock2 } from "react-icons/ci";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = data.movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <div>Filme ou Série não encontrado.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          className="w-full md:w-1/3 rounded-lg"
          src={movie.image}
          alt={movie.title}
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">{movie.title}</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CiCalendar />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <CiClock2 />
              <span>{movie.duration} min</span>
            </div>
          </div>
          <div className="flex gap-3">
            <span>Diretor(a):</span>
            <span className="text-gray-400"> {movie.director}</span>
          </div>
          <span className="bg-gray-600 text-white font-semibold px-3 py-1 rounded-lg w-min">
            Filme
          </span>
          <p>{movie.description}</p>
          <Link
            className="bg-gray-600 text-white font-semibold px-3 py-1 rounded-lg w-fit"
            to={movie.trailer}
          >
            Ver Trailer
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Comentários</h3>
        <div className="flex flex-col">
          <p className="mb-4">Não há comentários no momento.</p>
          <textarea
            className="w-full p-2 rounded-lg mb-3"
            placeholder="Escreva um comentário"
          />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg w-fit">
            Comentar
          </button>
        </div>
      </div>
    </div>
  );
}
