import styled from '@emotion/styled'

export const FormTransactionContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 72rem;

  h2 {
    position: absolute;
    top: 1.25rem
  }

  .MuiFormControl-root, .MuiInput-root{
    width: 100%;
  }

  .MuiTextField-root{
    color: white
  }
`

export const FormTransactionLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  #price {
    font-size: 1.5rem;
  }
`

export const FormTransactionRightBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  #tags {
    line-height: 2rem;
  }
`

export const SwitchContent = styled.div`

.MuiFormControlLabel-root{
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
`

export const SwitchLabelContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const RepeatBlockContainer = styled.div`
  display: flex;
  gap: 2rem;
`
