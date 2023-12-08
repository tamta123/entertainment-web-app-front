import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, MovieInfo } from "../../components/Mutual";
import { fetchMovies } from "../../store/features/movieSlice";
import styled from "styled-components";

const Home = () => {
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
      <h1>Home</h1>
      <MovieInfo categoryId={1} />
    </div>
  );
};

export default Home;

const Key = styled.div``;
