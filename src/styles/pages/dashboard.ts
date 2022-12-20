import styled from "@emotion/styled";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  img {
    align-self: center;
  }

  button {
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 25px;

    margin-top: 1rem;
  }
`;

export const BalanceCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
`;

export const MainCardsContent = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
