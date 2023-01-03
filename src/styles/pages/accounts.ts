import styled from '@emotion/styled'

export const AccountsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const AccountsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

export const BalancesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
