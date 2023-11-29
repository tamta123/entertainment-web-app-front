import styled from "styled-components";
import { Bookmarks, Home, Logo, Movie, TvSeries } from "../../svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderElement>
      <Link to="/">
        <Logo />
      </Link>
      <Menu>
        <Link to="/">
          <Home />
        </Link>
        <Link to="/movies">
          <Movie />
        </Link>
        <Link to="/tvSeries">
          <TvSeries />
        </Link>
        <Link to="/bookmarks">
          <Bookmarks />
        </Link>
      </Menu>
      <User>
        <img src="image-avatar.png" alt="avatar" />
      </User>
    </HeaderElement>
  );
};

export default Header;

const HeaderElement = styled.header`
  background: #161d2f;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 16px;
`;

const Menu = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: space-between;
`;
