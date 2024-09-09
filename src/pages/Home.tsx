import MovieCard from "../components/MovieCard";
import data from "../db/MovieSeries";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SerieCard from "../components/SerieCard";
import FeaturedMovie from "../components/FeaturedMovie";
import background from "../assets/oppenheimerBG.jpg";

export default function Home() {
  const settings = {
    dots: true, // Exibe os pontos de navegação no carrossel
    infinite: true, // Permite navegação infinita no carrossel
    speed: 500, // Velocidade da transição
    slidesToShow: 3, // Exibe 3 filmes de cada vez (pode mudar para 4)
    slidesToScroll: 1, // Rola 1 filme por vez
  };

  const featuredMovie = data.movies[0];

  return (
    <div>
      <section className="flex flex-col gap-2 mb-8">
        <h2 className="text-4xl font-bold mb-4">Filme em Destaque</h2>
        <FeaturedMovie
          title={featuredMovie.title}
          year={featuredMovie.year}
          image={background}
          duration={featuredMovie.duration}
          description={featuredMovie.description}
        />
      </section>

      <section className="flex flex-col gap-2 mb-8">
        <h2 className="text-4xl font-bold mb-4">Filmes Recentes</h2>
        <Slider {...settings}>
          {data.movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              image={movie.image}
              duration={movie.duration}
            />
          ))}
        </Slider>
      </section>

      <section className="flex flex-col gap-2 mb-8">
        <h2 className="text-4xl font-bold mb-4">Séries Recentes</h2>
        <Slider {...settings}>
          {data.series.map((serie) => (
            <SerieCard
              key={serie.id}
              title={serie.title}
              year={serie.year}
              image={serie.image}
              seasons={serie.seasons}
            />
          ))}
        </Slider>
      </section>
    </div>
  );
}
