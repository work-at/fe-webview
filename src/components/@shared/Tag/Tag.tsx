import { memo } from "react";
import styled from "styled-components";

export interface TagProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Container = styled.button``;

const Tag = ({ ...props }: TagProps) => {
  return <Container {...props} />;
};

export default memo(Tag);
