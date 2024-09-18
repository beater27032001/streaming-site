import MovieCard from "../components/MovieCard";
import data from "../db/MovieSeries";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SerieCard from "../components/SerieCard";
import FeaturedMovie from "../components/FeaturedMovie";
import { Link } from "react-router-dom";

export default function Home() {
  const settings = {
    dots: true, // Exibe os pontos de navegação no carrossel
    infinite: true, // Permite navegação infinita no carrossel
    speed: 500, // Velocidade da transição
    slidesToShow: 3, // Exibe 3 filmes de cada vez (pode mudar para 4)
    slidesToScroll: 1, // Rola 1 filme por vez
  };

  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const featuredMovie = data.movies[getRandomNumber(0, data.movies.length - 1)];
  const movieIndex = data.movies.findIndex((movie) => movie.id === featuredMovie.id);
  return (
    <div>
      <Link to={`/movies/${movieIndex+1}`}>
        <section className="flex flex-col gap-2 mb-8">
          <h2 className="text-4xl font-bold mb-4">Filme em Destaque</h2>
          <FeaturedMovie
            title={featuredMovie.title}
            year={featuredMovie.year}
            background={featuredMovie.background}
            duration={featuredMovie.duration}
            description={featuredMovie.description}
          />
        </section>
      </Link>

      <section className="flex flex-col gap-2 mb-8">
        <h2 className="text-4xl font-bold mb-4">Filmes Recentes</h2>
        <Slider {...settings}>
          {data.movies.slice(0, 7).map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              image={movie.image}
              duration={movie.duration}
              id={movie.id}
            />
          ))}
        </Slider>
      </section>

      <section className="flex flex-col gap-2 mb-8">
        <h2 className="text-4xl font-bold mb-4">Séries Recentes</h2>
        <Slider {...settings}>
          {data.series.slice(0, 7).map((serie) => (
            <SerieCard
              key={serie.id}
              title={serie.title}
              year={serie.year}
              image={serie.image}
              seasons={serie.seasons}
              id={serie.id}
            />
          ))}
        </Slider>
      </section>
    </div>
  );
}
