import styled from "styled-components";

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.headingL.web};
`;

export const Test = () => {
  return <Text>Whatever!</Text>;
};
