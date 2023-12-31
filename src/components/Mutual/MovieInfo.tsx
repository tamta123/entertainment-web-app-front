import { useSelector } from "react-redux";
import styled from "styled-components";

const MovieInfo = ({
  categoryId = null,
  homeCategoryId = null,
  searchQuery,
}) => {
  const movies = useSelector((state) => state.movies.data);
  const filteredMovies = movies.filter((movie) => {
    const matchesCategory =
      categoryId === null || movie.CategoryId === categoryId;
    const matchesHomeCategory =
      homeCategoryId === null || movie.HomeCategoryId === homeCategoryId;
    const matchesSearchQuery = movie.title
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());

    return matchesCategory && matchesHomeCategory && matchesSearchQuery;
  });

  return (
    <>
      {filteredMovies.map((movie) => (
        <Card key={movie.id}>
          <Poster src={movie.posterSmall} alt={`poster for ${movie.title}`} />
          <Ul>
            <ListItem>{movie.year}</ListItem>
            <ListItem>
              {movie.CategoryId === 1 ? (
                <>
                  <Icon src="icon-nav-movies.svg" alt="Movie Icon" />
                  Movie
                </>
              ) : (
                <>
                  <Icon src="icon-nav-tv-series.svg" alt="TV Icon" />
                  TV Series
                </>
              )}
            </ListItem>
            <ListItem>{movie.rating}</ListItem>
          </Ul>
          <Title>{movie.title}</Title>
        </Card>
      ))}
    </>
  );
};
export default MovieInfo;

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
  width: 140px;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const ListItem = styled.li`
  color: #fff;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  opacity: 0.75;
  &:first-child {
    list-style: none; // Hide the bullet for the first ListItem
  }
`;

const Icon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 4px;
`;
const Title = styled.h3`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
