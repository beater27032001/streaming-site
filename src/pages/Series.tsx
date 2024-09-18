import SerieCard from "../components/SerieCard";
import data from "../db/MovieSeries";

export default function Series() {
    return(
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold mb-4">Séries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.series.map((serie) => (
              <SerieCard
                id={serie.id}
                key={serie.id}
                title={serie.title}
                year={serie.year}
                image={serie.image}
                seasons={serie.seasons}
              />
            ))}
          </div>
        </div>
      )
}