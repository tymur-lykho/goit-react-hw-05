import { Link } from "react-router-dom";

export default function GoBackBtn({ to }) {
  return <Link to={to}>Back</Link>;
}
