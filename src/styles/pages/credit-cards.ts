import styled from 'styled-components'

export const CreditCardsPageContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-areas:
    'head head head head head head head'
    'card card card card card card bala'
    'card card card card card card bala';
`
export const CreditCardsPageHeader = styled.div`
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

export const CreditCardsCardsContainer = styled.div`
  grid-area: card;
  gap: 1rem;
  margin-right: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const BalancesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-area: bala;
`
