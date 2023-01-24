import styled from 'styled-components'

export const FormTransactionContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 72rem;

  h2 {
    position: absolute;
    top: 1.25rem
  }

  #limit {
    font-size: 1.5rem;
  }

  .MuiFormControl-root, .MuiInput-root{
    width: 100%;
  }

  > div {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  }

  /* .MuiInputAdornment-root {
    color: red
  } */
`

export const CreditCardTransactionLeftBlock = styled.div`
  #price {
    font-size: 1.5rem;
  }
`

export const CreditCardTransactionRightBlock = styled.div`
  #tags {
    line-height: 2rem;
  }
`
