import { Meta, Story } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { useState } from "react";

import { TwoBtnModalContainer, TwoBtnModalContainerProps } from "./TwoBtnModalContainer";

import { wait } from "@/components/testUtil";
import { Z_INDEX } from "@/constants/zIndex";

export default {
  title: "Components/Layout/TwoBtnModal",
  component: TwoBtnModalContainer,
} as Meta;

const Template: Story<TwoBtnModalContainerProps> = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        style={{ position: "fixed", bottom: "10px", right: "10px", zIndex: Z_INDEX.HIGHEST }}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        Toggle Modal
      </button>
      <TwoBtnModalContainer isOpen={isOpen} onClose={() => setOpen(false)}>
        차단한 사용자와는 <br />
        다시 대화가 불가해요. <br />
        그래도 차단하시겠어요?
      </TwoBtnModalContainer>
    </>
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
