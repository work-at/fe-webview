import styled from "styled-components";

type PageProps = {
  title: string;
  children: React.ReactNode;
};

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

const Page = ({ title, children }: PageProps) => {
  return (
    <Container>
      <title>{title}</title>
      {children}
    </Container>
  );
};

export default Page;
