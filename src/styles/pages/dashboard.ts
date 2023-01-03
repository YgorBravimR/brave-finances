import { styled } from "@mui/system"


export const DashboardContainer = styled('div')(({ theme }) => `
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
`)

export const BalanceCardContainer = styled('div')(({ theme }) => `
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
`)

export const MainCardsContent = styled('div')(({ theme }) => `
  margin-top: 3rem;
  margin-bottom: 3rem;
`)
