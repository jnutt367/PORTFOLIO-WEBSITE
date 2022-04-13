import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 90%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
