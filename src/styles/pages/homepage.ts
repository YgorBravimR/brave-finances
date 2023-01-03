import styled from "@emotion/styled"

export const HomepageContainer = styled.div`
  padding: 5rem;
  margin: auto;
  max-width: 70rem;
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  .mobills_logo {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
  }
`

export const ImageSectionContainer = styled.section``
export const FormSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    button {
      min-width: 7rem;
      font-size: 1rem;
      font-weight: 600;
    }
  }
`
