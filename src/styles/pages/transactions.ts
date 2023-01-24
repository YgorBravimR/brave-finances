import styled from 'styled-components'

export const TransactionsPageContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-areas:
    'head head head head head head'
    'card card card card card bala'
    'card card card card card bala';
`
export const TransactionsPageHeader = styled.div`
  grid-area: head;
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

export const TableContainer = styled.div`
  grid-area: card;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 3rem;
`

export const BalancesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-area: bala;
`
