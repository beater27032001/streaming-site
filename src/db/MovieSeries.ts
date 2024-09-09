import { MoviesSeriesData } from "../types/MoviesSeriesData";
import oppenheimer from "../assets/oppenheimer.jpg";
import barbie from "../assets/barbie.jpg";
import spiderman_across_spiderverse from "../assets/spiderman_across_spiderverse.jpg";
import mission_impossible_dead_reckoning from "../assets/mission_impossible_dead_reckoning.jpg";
import guardians_of_the_galaxy_vol3 from "../assets/guardians_of_the_galaxy_vol3.jpg";
import john_wick_4 from "../assets/john_wick.jpg";
import the_flash from "../assets/the_flash.jpg";
import indiana_jones_dial_of_destiny from "../assets/indiana_jones_dial_of_destiny.jpg";
import the_marvels from "../assets/the_marvels.jpg";
import dune_part_two from "../assets/dune_part_two.jpg";
import wonka from "../assets/wonka.jpg";
import hunger_games_ballad from "../assets/hunger_games_ballad.jpg";
import the_last_of_us from "../assets/the_last_of_us.jpg";
import house_of_the_dragon from "../assets/house_of_the_dragon.jpg";
import stranger_things from "../assets/stranger_things.jpg";
import the_mandalorian from "../assets/the_mandalorian.jpg";
import wednesday from "../assets/wednesday.jpg";
import ted_lasso from "../assets/ted_lasso.jpg";
import loki from "../assets/loki.jpg";
import secret_invasion from "../assets/secret_invasion.jpg";
import foundation from "../assets/foundation.jpg";
import the_boys from "../assets/the_boys.jpg";
import squid_game from "../assets/squid_game.jpg";
import peacemaker from "../assets/peacemaker.jpg";

const data: MoviesSeriesData = {
  movies: [
    {
      id: 1,
      title: "Oppenheimer",
      year: 2023,
      description:
        "A biografia de J. Robert Oppenheimer, físico responsável pelo desenvolvimento da bomba atômica.",
      image: oppenheimer,
      duration: 180,
    },
    {
      id: 2,
      title: "Barbie",
      year: 2023,
      description: "Uma aventura fantástica na vida da icônica boneca Barbie.",
      image: barbie,
      duration: 114,
    },
    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      year: 2023,
      description:
        "Miles Morales volta para o multiverso enfrentando novos desafios como Homem-Aranha.",
      image: spiderman_across_spiderverse,
      duration: 140,
    },
    {
      id: 4,
      title: "Mission: Impossible – Dead Reckoning Part One",
      year: 2023,
      description:
        "Ethan Hunt e sua equipe enfrentam uma missão cheia de intrigas e ação.",
      image: mission_impossible_dead_reckoning,
      duration: 163,
    },
    {
      id: 5,
      title: "Guardians of the Galaxy Vol. 3",
      year: 2023,
      description:
        "Os Guardiões enfrentam uma nova ameaça enquanto lidam com problemas pessoais.",
      image: guardians_of_the_galaxy_vol3,
      duration: 150,
    },
    {
      id: 6,
      title: "John Wick: Chapter 4",
      year: 2023,
      description:
        "John Wick retorna para enfrentar os assassinos mais perigosos do mundo.",
      image: john_wick_4,
      duration: 169,
    },
    {
      id: 7,
      title: "The Flash",
      year: 2023,
      description:
        "Barry Allen, o Flash, usa seus poderes para viajar no tempo e salvar sua família, mas acaba criando consequências imprevistas.",
      image: the_flash,
      duration: 144,
    },
    {
      id: 8,
      title: "Indiana Jones and the Dial of Destiny",
      year: 2023,
      description:
        "Indiana Jones retorna para uma última aventura em busca de um artefato lendário.",
      image: indiana_jones_dial_of_destiny,
      duration: 154,
    },
    {
      id: 9,
      title: "The Marvels",
      year: 2023,
      description:
        "Capitã Marvel, Ms. Marvel e Monica Rambeau se unem para enfrentar uma nova ameaça cósmica.",
      image: the_marvels,
      duration: 105,
    },
    {
      id: 10,
      title: "Dune: Part Two",
      year: 2023,
      description:
        "Paul Atreides continua sua jornada em Arrakis, buscando vingança e controle sobre o destino do universo.",
      image: dune_part_two,
      duration: 155,
    },
    {
      id: 11,
      title: "Wonka",
      year: 2023,
      description:
        "A história do jovem Willy Wonka e como ele se tornou o famoso fabricante de chocolates.",
      image: wonka,
      duration: 130,
    },
    {
      id: 12,
      title: "The Hunger Games: The Ballad of Songbirds and Snakes",
      year: 2023,
      description:
        "Uma prequela que explora os primeiros anos dos Jogos Vorazes e a ascensão de Coriolanus Snow.",
      image: hunger_games_ballad,
      duration: 157,
    },
  ],
  series: [
    {
      id: 1,
      title: "The Last of Us",
      year: 2023,
      description:
        "Uma adaptação do famoso jogo de videogame que mostra a luta pela sobrevivência em um mundo pós-apocalíptico.",
      image: the_last_of_us,
      seasons: 2,
    },
    {
      id: 2,
      title: "House of the Dragon",
      year: 2022,
      description:
        "A prequela de Game of Thrones, focada na Casa Targaryen e sua luta pelo trono.",
      image: house_of_the_dragon,
      seasons: 2,
    },
    {
      id: 3,
      title: "Stranger Things",
      year: 2022,
      description:
        "O grupo de amigos de Hawkins enfrenta novos perigos do Mundo Invertido.",
      image: stranger_things,
      seasons: 5,
    },
    {
      id: 4,
      title: "The Mandalorian",
      year: 2023,
      description:
        "O caçador de recompensas Mandaloriano e seu companheiro Grogu continuam suas aventuras na galáxia.",
      image: the_mandalorian,
      seasons: 3,
    },
    {
      id: 5,
      title: "Wednesday",
      year: 2022,
      description:
        "A jornada de Wednesday Addams enquanto enfrenta os mistérios de sua escola peculiar.",
      image: wednesday,
      seasons: 1,
    },
    {
      id: 6,
      title: "Ted Lasso",
      year: 2023,
      description:
        "A série segue Ted Lasso, um treinador de futebol americano, enquanto ele lidera um time de futebol na Inglaterra.",
      image: ted_lasso,
      seasons: 3,
    },
    {
      id: 7,
      title: "Loki",
      year: 2023,
      description:
        "O deus da trapaça continua sua jornada no multiverso, enfrentando ameaças inesperadas.",
      image: loki,
      seasons: 2,
    },
    {
      id: 8,
      title: "Secret Invasion",
      year: 2023,
      description:
        "Nick Fury enfrenta uma invasão de alienígenas Skrulls que se infiltraram na Terra.",
      image: secret_invasion,
      seasons: 1,
    },
    {
      id: 9,
      title: "Foundation",
      year: 2021,
      description:
        "A luta para salvar a humanidade ao longo de séculos, baseada na obra de Isaac Asimov.",
      image: foundation,
      seasons: 2,
    },
    {
      id: 10,
      title: "The Boys",
      year: 2019,
      description:
        "Um grupo de vigilantes luta contra super-heróis corruptos que abusam de seus poderes.",
      image: the_boys,
      seasons: 4,
    },
    {
      id: 11,
      title: "Squid Game",
      year: 2021,
      description:
        "Concorrentes desesperados participam de jogos mortais por uma chance de ganhar uma grande quantia em dinheiro.",
      image: squid_game,
      seasons: 1,
    },
    {
      id: 12,
      title: "Peacemaker",
      year: 2022,
      description:
        "A história de Peacemaker, um anti-herói que acredita na paz a qualquer custo, mesmo que precise matar por isso.",
      image: peacemaker,
      seasons: 1,
    },
  ],
};

export default data;
