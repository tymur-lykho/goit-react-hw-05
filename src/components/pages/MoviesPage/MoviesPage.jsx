import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../../SearchForm/SearchForm";
import MovieList from "../../MovieList/MovieList";
import { getMoviesByQuery } from "../../../api/api";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovie = (query) => {
    getMoviesByQuery(query).then(({ data }) => {
      setSearchParams(`?query=${query}`);
      setMovies(data.results);
    });
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      getMoviesByQuery(query).then(({ data }) => {
        setMovies(data.results);
      });
    }
  }, []);

  return (
    <>
      <SearchForm onSubmit={searchMovie} />
      {!movies ? (
        <p className={css.message}>Enter your search query</p>
      ) : (
        <MovieList data={movies} />
      )}
    </>
  );
}
