import { useEffect, useState } from "react";
import { getMovie } from "../../../api/api";
import { useParams, Outlet, NavLink } from "react-router-dom";

export default function MovieDetailsPage() {
  const [movieData, setMovieData] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId).then(({ data }) => {
      setMovieData(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <div>
        <h2>{movieData.original_title}</h2>
      </div>
      <div>
        <NavLink to="cast">Credits</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
