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
