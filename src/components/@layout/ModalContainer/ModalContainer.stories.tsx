import { Meta, Story } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { useState } from "react";

import { ModalContainer, ModalContainerProps } from "./ModalContainer";

import { wait } from "@/components/testUtil";
import { Z_INDEX } from "@/constants/zIndex";

export default {
  title: "Components/Layout/Modal",
  component: ModalContainer,
} as Meta;

const Template: Story<ModalContainerProps> = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button
        style={{ position: "fixed", bottom: "10px", right: "10px", zIndex: Z_INDEX.HIGHEST }}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        Toggle Modal
      </button>
      <ModalContainer isOpen={isOpen} onClose={() => setOpen(false)}>
        <h3>Modal</h3>
      </ModalContainer>
    </div>
  );
};

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const toggleButton = await canvas.findByText(/Toggle Modal/i);
  await userEvent.click(toggleButton);

  await wait(2);

  const closeButton = await canvas.findByText(/닫기/i);
  await userEvent.click(closeButton);
};
