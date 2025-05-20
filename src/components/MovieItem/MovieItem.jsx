import { Link } from "react-router-dom";

export default function MovieItem({ data }) {
  return (
    <Link to={`/movies/${data.id}`}>
      <h2>{data.original_title}</h2>
    </Link>
  );
}
