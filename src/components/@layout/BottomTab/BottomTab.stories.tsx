import { ComponentStory, ComponentMeta } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import BottomTab from "./BottomTab";

export default {
  title: "Components/Layout/BottomTab",
  component: BottomTab,
} as ComponentMeta<typeof BottomTab>;

const Template: ComponentStory<typeof BottomTab> = () => <BottomTab />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const accommodationButton = await canvas.findByText(/숙소/i);
  await userEvent.click(accommodationButton);

  const mapButton = await canvas.findByText(/지도/i);
  await userEvent.click(mapButton);

  const communityButton = await canvas.findByText(/커뮤니티/i);
  await userEvent.click(communityButton);

  const mypageButton = await canvas.findByText(/마이페이지/i);
  await userEvent.click(mypageButton);
};
