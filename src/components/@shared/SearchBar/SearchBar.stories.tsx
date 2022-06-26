import { wait } from "@/components/testUtil";
import { TEST_ID } from "@/constants/testIds";
import { Meta, Story } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import SearchBar, { SearchBarProps } from "./SearchBar";

export default {
  title: "Components/Shared/SearchBar",
  component: SearchBar,
} as Meta;

const Template: Story<SearchBarProps> = () => <SearchBar onSearch={(keyword) => alert(`'${keyword}' 검색 수행`)} />;

export const Basic = Template.bind({});

const USER_KEYWORDS = "이용자의 검색어";

Basic.play = async ({ canvasElement }: any) => {
  // 검색어를 입력한다.
  const canvas = within(canvasElement);
  const $searchInput = await canvas.findByTestId(TEST_ID.SEARCH_BAR_INPUT);
  const $searchButton = await canvas.findByTestId(TEST_ID.SEARCH_BAR_SUBMIT_BUTTON);

  await wait(1);

  // 검색어를 입력 후 돋보기 아이콘을 누르거나 Enter 를 누르면 onSearch 핸들러가 동작한다.

  await userEvent.type($searchInput, USER_KEYWORDS);

  await wait(1);

  await userEvent.click($searchButton);
};
