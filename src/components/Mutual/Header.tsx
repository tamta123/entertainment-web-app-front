import styled from "styled-components";
import { Bookmarks, Home, Logo, Movie, TvSeries } from "../../svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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
      <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
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

const LoginButton = styled.button`
  border-radius: 6px;
  background: #fc4747;
  width: 50px;
  height: 30px;
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
  outline: none;
`;

const User = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: space-between;
`;
