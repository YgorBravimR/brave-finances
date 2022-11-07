import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const MainContentLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ChildrenLayout = styled.div`
  width: calc(100% - 2.5rem);
  height: calc(100% - 2rem);
  margin: 1rem 1.25rem 0;
  box-sizing: border-box;
  overflow-y: scroll;
`;
