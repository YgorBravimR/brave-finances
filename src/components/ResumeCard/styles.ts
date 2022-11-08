import styled from "@emotion/styled";

export const ResumeCardContainer = styled.div`
  > p {
    font-size: 1.15rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .MuiPaper-root {
    border-radius: 25px;
  }

  > div > :first-child {
    padding: 1rem;
  }
`;

export const SeeMoreContainer = styled.div`
  border-top: 1px solid lightgray;
  text-align: center;

  button {
    text-transform: uppercase;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
  }
`;
