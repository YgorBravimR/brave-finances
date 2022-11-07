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
`;

export const BalanceCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
`;
