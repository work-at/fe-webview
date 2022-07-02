import { Meta, Story } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { useState } from "react";

import { BottomDrawer, BottomDrawerProps } from "./BottomDrawer";

import { wait } from "@/components/testUtil";
import { Z_INDEX } from "@/constants/zIndex";

export default {
  title: "Components/Layout/BottomDrawer",
  component: BottomDrawer,
} as Meta;

const Template: Story<BottomDrawerProps> = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button
        style={{ position: "fixed", bottom: "10px", right: "10px", zIndex: Z_INDEX.HIGHEST }}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        Toggle BottomDrawer
      </button>
      <BottomDrawer isOpen={isOpen} onClose={() => setOpen(false)}>
        <h3>Bottom Drawer</h3>
      </BottomDrawer>
    </div>
  );
};

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const toggleButton = await canvas.findByText(/Toggle BottomDrawer/i);
  await userEvent.click(toggleButton);

  await wait(2);

  const closeButton = await canvas.findByText(/닫기/i);
  await userEvent.click(closeButton);
};