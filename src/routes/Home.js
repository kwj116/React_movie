import { useEffect, useState } from "react";
import Movie from "../components/Movie";
function Home() {
  const [loading, setloading] = useState(true);
  const [movie, setmovie] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();

    setmovie(json.data.movies);
    setloading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Super Movie </h1>
      {loading
        ? "Loading..."
        : movie.map((movie) => (
            <Movie
              id={movie.id}
              key={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
    </div>
  );
}

export default Home;
