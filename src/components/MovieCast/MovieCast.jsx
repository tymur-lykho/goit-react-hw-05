import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/api";
import CastItem from "../CastItem/CastItem";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCast(movieId).then(({ data }) => {
      return setCasts(data.cast);
    });
  }, []);
  return (
    <ul>
      {casts.map((item) => {
        return (
          <li key={item.id}>
            <CastItem data={item} />
          </li>
        );
      })}
    </ul>
  );
}
