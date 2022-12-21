import styled from '@emotion/styled'

export const ModalContainer = styled.aside`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 38rem;
  border: 1px solid #000;
  box-shadow: 24;
  padding: 2rem;
  background-color: white;
  border-radius: 25px;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    button {
      margin-top: 2rem;
      padding: 0.5rem 3.5rem;
      border-radius: 25px;
      align-self: flex-end;
    }
  }
`
