import { useParams } from "react-router-dom";
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
          <p>{movie.description}</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Comentários</h3>
        <div>
          <p>Não há comentários no momento.</p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Escreva um comentário"
          />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Comentar
          </button>
        </div>
      </div>
    </div>
  );
}
