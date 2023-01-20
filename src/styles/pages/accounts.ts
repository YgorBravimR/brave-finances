import styled from '@emotion/styled'

export const AccountsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 78rem;
  margin: auto;
`
export const AccountsPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  button {
    background-color: white;
    min-width: 0;
    border-radius: 100%;
    padding: 1rem;
  }
`

export const AccountsPageBody = styled.div`
  display: flex;
  justify-content: space-between;
    gap: 4rem;

`

export const AccountsCardsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

export const BalancesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 18rem;
`
