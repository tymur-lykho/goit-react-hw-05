import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/api";
import Review from "../Review/Review";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId).then(({ data }) => setReviews(data.results));
  }, []);

  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <Review data={review} />
          </li>
        );
      })}
    </ul>
  );
}
