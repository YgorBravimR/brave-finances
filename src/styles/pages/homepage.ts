import styled from "styled-components"

export const HomepageContainer = styled.div`
  padding: 5rem;
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: white;


  .mobills_logo {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
  }
`

export const HomePageContent = styled.section`
max-width: 70rem;
margin: auto;
width: 100%;
height: 100%;

display: grid;
grid-template-columns: 5fr 4fr;
align-items: center;
gap: 3rem;
`

export const ImageSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
  }

  h3 {
    font-size: 1.75rem;
  }
`
export const FormSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

    form > button {
      border-radius: 20px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      color: black;
      width: 10rem;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 0;

      :hover {
        background-color: transparent;
      }
    }

    .selected {
      border-bottom: 3px solid ${({theme}) => theme.colors.light.primary};
      border-top: 3px solid transparent;
    }

    .notSelected {
      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;
    }
  }
`
