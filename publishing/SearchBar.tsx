import styled from "styled-components";

const Container = styled.form``;

const SearchInput = styled.input``;

const SearchButton = styled.button``;

const SearchIcon = styled.i``;

const SearchBar = () => {
  return (
    <Container>
      <SearchInput />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Container>
  );
};

export default SearchBar;
