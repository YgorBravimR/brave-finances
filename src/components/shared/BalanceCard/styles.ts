import styled from '@emotion/styled'

export const BalanceCardContent = styled.div`
  .MuiPaper-root {
    padding: 1.25rem 1rem;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      strong {
        font-size: 1.15rem;
        font-weight: 600;
      }
    }
  }
`
