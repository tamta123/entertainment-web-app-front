import { useEffect, useState } from "react";
import { Header, MovieInfo } from "../../components/Mutual";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/features/movieSlice";
import styled from "styled-components";
import Trending from "../../components/Home/Trending";
import HomeSearchBar from "../../components/Home/HomeSearchBar";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.movies);
  //useSelector hook is used to get hold of any state that is maintained in redux store.This hook accepts the selector function as its parameter, it receives the redux state as its argument and returns the value

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  //useDispatch hook is used to dispatch an action with react redux

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <Header></Header>
      <MainWrapper>
        <HomeSearchBar onSearch={setSearchQuery} />
        <Title>Trending</Title>
        <Trending />
        <Title>Recommended for you</Title>
        <CardWrapper>
          <MovieInfo homeCategoryId={2} searchQuery={searchQuery} />
        </CardWrapper>
      </MainWrapper>
    </div>
  );
};

export default Home;

const MainWrapper = styled.div`
  padding: 16px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.312px;
  margin-bottom: 24px;
`;
