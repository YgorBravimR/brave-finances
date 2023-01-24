import styled from 'styled-components'

export const AccountCardContainer = styled.div`
  .MuiPaper-root {
    border-radius: 25px;
    min-width: 22rem;
  }
`

export const AccountCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  button {
    min-width: 0;
    border-radius: 100%;
    color: black;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    strong {
      font-size: 1.15rem;
      color: ${({ theme }) => theme.colors.light.textLightColor}
    }

    svg {
      color: ${({ theme }) => theme.colors.light.transfer}
    }
  }
`

export const BalanceContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;

  span {
    color: ${({ theme }) => theme.colors.light.income}
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  button {
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
`
