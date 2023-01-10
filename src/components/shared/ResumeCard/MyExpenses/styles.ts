import styled from '@emotion/styled'

export const MyExpensesContainer = styled.div``

export const TransactionsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;

    span {
      font-weight: 500;
    }

    strong {
      font-weight: 600;
      color: darkred;
    }
  }
`
