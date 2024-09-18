import { useParams } from "react-router-dom";
import data from "../db/MovieSeries";
import { CiCalendar, CiClock2 } from "react-icons/ci";

export default function SerieDetails() {
  const { id } = useParams();
  const serie = data.series.find((serie) => serie.id === Number(id));

  if (!serie) {
    return <div>Filme ou Série não encontrado.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          className="w-full md:w-1/3 rounded-lg"
          src={serie.image}
          alt={serie.title}
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">{serie.title}</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CiCalendar />
              <span>{serie.year}</span>
            </div>

            <div className="flex items-center gap-1">
              <CiClock2 />
              <span>{serie.seasons} temporadas</span>
            </div>
          </div>
          <p>{serie.description}</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Comentários</h3>
        <div>
          {/* Área para os comentários */}
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
