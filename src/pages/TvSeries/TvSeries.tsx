import { useDispatch, useSelector } from "react-redux";
import { MovieInfo, Header } from "../../components/Mutual";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../store/features/movieSlice";
import styled from "styled-components";
import { SearchBarTv } from "../../components/TvSeries";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
    <>
      <Header></Header>
      <Main>
        <SearchBarTv onSearch={setSearchQuery} />
        <Name>TV Series</Name>
        <CardWrapper>
          <MovieInfo categoryId={2} searchQuery={searchQuery} />
        </CardWrapper>
      </Main>
    </>
  );
};
export default Movies;

const Name = styled.h2`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.312px;
  margin-top: 24px;
  margin-bottom: 24px;
`;
const Main = styled.div`
  padding: 24px 16px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;
`;
