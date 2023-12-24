import { useSelector } from "react-redux";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Trending = ({ homeCategoryId = null }) => {
  const movies = useSelector((state) => state.movies.data);
  const filteredMovies = movies.filter((movie) => {
    const matchesHomeCategory =
      homeCategoryId === null || movie.HomeCategoryId === 2;
    // const matchesSearchQuery = movie.title
    //   .toLowerCase()
    //   .includes(searchQuery.trim().toLowerCase());

    return matchesHomeCategory;
  });

  const settings = {
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    speed: 500, // Adjust the speed as needed
  };

  return (
    <Slider {...settings} style={{ width: "100%" }}>
      {filteredMovies.map((movie) => (
        <Card key={movie.id}>
          <Poster src={movie.posterMedium} alt={`poster for ${movie.title}`} />
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
    </Slider>
  );
};

const Card = styled.div`
  /* width: 240px;
  height: 140px; */
  position: relative;
  padding: 0 10px; // Adjust the padding as needed
  padding-left: 0;
  margin-bottom: 24px;
`;

const Poster = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 8px;
  background: lightgray 50% / cover no-repeat;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  width: 140px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  align-items: center;
  position: absolute;
  top: 86px;
  left: 16px;
`;

const ListItem = styled.li`
  color: #fff;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  opacity: 0.75;
  /* display: flex; */
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
  position: absolute;
  bottom: 16px;
  left: 16px;
`;

export default Trending;
