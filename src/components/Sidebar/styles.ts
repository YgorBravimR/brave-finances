import styled from "@emotion/styled";

export const SidebarButton = styled.div`
  button {
    height: 4rem;
    border-radius: 99px;
    margin-left: 0;

    text-transform: capitalize;
    font-family: "Maven Pro";
    font-size: 1.25rem;

    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
      0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);

    svg {
      height: 1.75rem;
      width: 1.75rem;
    }
  }
`;

export const ButtonExpanded = styled.div`
  button {
    border-radius: 36px;
    width: 12rem;
    padding-left: 20px;

    display: flex;
    justify-content: flex-start;
    gap: 2.25rem;
  }
`;

export const ButtonContained = styled.div`
  button {
    border-radius: 99px;
    height: 4rem;
    width: 4rem;
    min-width: 0;
  }
`;