import styled from '@emotion/styled'

export const FormTransactionContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 38rem;

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
`

export const TransferFormLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  #price {
    font-size: 1.5rem;
  }
`

export const TransferFormRightBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  #tags {
    line-height: 2rem;
  }
`
