import { useDispatch, useSelector } from "react-redux";
import { MovieInfo, Header } from "../../components/Mutual";
import { useEffect } from "react";
import { fetchMovies } from "../../store/features/movieSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header></Header>
      <MovieInfo categoryId={2} />
    </div>
  );
};
export default Movies;
