import { memo } from "react";
import styled from "styled-components";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Container = styled.button``;

const Button = ({ ...props }: ButtonProps) => {
  return <Container {...props} />;
};

export default memo(Button);
