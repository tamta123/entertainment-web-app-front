import { useSelector } from "react-redux";
import styled from "styled-components";

const MovieInfo = ({ categoryId }) => {
  const movies = useSelector((state) => state.movies.data);
  const filteredMovies = movies.filter(
    (movie) => movie.CategoryId === categoryId
  );

  return (
    <Main>
      <Name>Movies</Name>
      <CardsWrapper>
        {filteredMovies.map((movie) => (
          <Card key={movie.id}>
            <Poster src={movie.posterSmall} alt={`poster for ${movie.title}`} />
            <Ul>
              <ListItem>{movie.year}</ListItem>
              <ListItem>{movie.CategoryId}</ListItem>
              <ListItem>{movie.rating}</ListItem>
            </Ul>
            <Title>{movie.title}</Title>
          </Card>
        ))}
      </CardsWrapper>
    </Main>
  );
};
export default MovieInfo;

const Main = styled.div`
  padding: 24px 16px;
`;

const Name = styled.h2`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.312px;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;
`;

const Card = styled.div`
  width: 164px;
  height: 154px;
`;

const Poster = styled.img`
  width: 164px;
  height: 110px;
  border-radius: 8px;
  background: lightgray 50% / cover no-repeat;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li`
  color: #fff;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
