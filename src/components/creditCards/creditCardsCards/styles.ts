import styled from '@emotion/styled'

export const CreditCardsCardContainer = styled.div`
  .MuiPaper-root {
    border-radius: 25px;
    min-width: 22rem;
  }
`

export const CreditCardsCardContent = styled.div`
  padding: 1rem;
  font-weight: 500;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

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
    }
  }
`

export const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1rem;

  >div {
    display: flex;
    justify-content: space-between;
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

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 1rem;
`

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  font-weight: 400;
  gap: 0.25rem;
`
export const AvaiableLimitContent = styled.div`

`
export const LimitCompareContent = styled.div`
`
export const ClosingOnContent = styled.div`
`
export const PartialValueContent = styled.div`
`
