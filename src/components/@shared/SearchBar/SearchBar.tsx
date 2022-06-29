import { TEST_ID } from "@/constants/testIds";
import { memo, useCallback, useState } from "react";
import * as S from "./SearchBar.styled";

export type SearchBarProps = {
  /** 이용자가 검색을 수행했을 때 동작하는 핸들러 */
  onSearch: (keyword: string) => void;
};

const SearchKeywordLengthLimit = 1000;

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();

      onSearch(keyword);
    },
    [keyword]
  );

  const handleKeywordChange: React.FormEventHandler<HTMLInputElement> = useCallback((event) => {
    const { value } = event.target as HTMLInputElement;

    if (value.length > SearchKeywordLengthLimit) {
      alert(`${SearchKeywordLengthLimit}자 이상을 입력할 수 없습니다.`);
      return;
    }

    setKeyword(value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <S.SearchInput
        type="search"
        name="검색 바"
        placeholder="검색..."
        value={keyword}
        onChange={handleKeywordChange}
        data-testid={TEST_ID.SEARCH_BAR_INPUT}
      />

      <S.SearchButton type="submit" data-testid={TEST_ID.SEARCH_BAR_SUBMIT_BUTTON}>
        <S.SearchIcon />
      </S.SearchButton>
    </form>
  );
};

export default memo(SearchBar);
