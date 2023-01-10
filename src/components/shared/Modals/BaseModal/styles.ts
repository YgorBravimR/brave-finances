import styled from "@emotion/styled";

export const ModalContainer = styled.aside`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 76rem;
  width: fit-content;
  border: 1px solid #000;
  box-shadow: 24;
  padding: 4rem 2rem;
  background-color: white;
  border-radius: 25px;

    button {
      margin-top: 2rem;
      padding: 0.5rem 3.5rem;
      border-radius: 25px;
      position: absolute;
      right: 2rem;
      bottom: 1rem;
    }
`
