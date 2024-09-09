import MovieCard from "../components/MovieCard";
import data from "../db/MovieSeries";

export default function Movies() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-4">Filmes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            image={movie.image}
            duration={movie.duration}
          />
        ))}
      </div>
    </div>
  );
}
