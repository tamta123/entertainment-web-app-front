import { useSelector } from "react-redux";
import styled from "styled-components";

const MovieInfo = ({ categoryId }) => {
  const movies = useSelector((state) => state.movies.data);
  const filteredMovies = movies.filter(
    (movie) => movie.CategoryId === categoryId
  );

  return (
    <div>
      {filteredMovies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.poster} alt={`poster for ${movie.title}`} />
          <Ul>
            <ListItem>{movie.year}</ListItem>
            <ListItem>{movie.CategoryId}</ListItem>
            <ListItem>{movie.rating}</ListItem>
          </Ul>
          <Title>{movie.title}</Title>
        </div>
      ))}
    </div>
  );
};
export default MovieInfo;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li`
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Title = styled.h3`
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
