import styled from '@emotion/styled'

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

export const MainContentLayout = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
`

export const ChildrenLayout = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  height: calc(100% - 2rem);
  overflow-y: scroll;
`
