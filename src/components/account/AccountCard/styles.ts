import styled from '@emotion/styled'

export const AccountCardContainer = styled.div`
  .MuiPaper-root {
    border-radius: 25px;
    min-width: 22rem;
  }
`

export const AccountCardContent = styled.div`
  padding: 1rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

    > p {
      font-size: 1.15rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }
`

export const BalanceContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  button {
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
`
