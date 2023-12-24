import { useState } from "react";
import styled from "styled-components";

const HomeSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Wrapper>
      <Img src="icon-search.svg" alt="Search icon" />
      <Input
        type="text"
        placeholder="Search for movies and TV Series"
        value={query}
        onChange={handleInputChange}
      />
    </Wrapper>
  );
};

export default HomeSearchBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 3px;
  gap: 16px;
  background-color: transparent;
  margin-bottom: 24px;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-right: 8px;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
  outline: none;
  width: 100%;
`;

const Img = styled.img`
  cursor: pointer;
  height: 24px;
  width: 24px;
`;
