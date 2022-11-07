import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.25rem;
  width: 100%;
  padding: 1.5rem 2rem;

  button {
    padding: 0.2rem 0.75rem;
    border-radius: 25px;
    color: black;

    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;

    :hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`;

export const CoinsShopContainer = styled.div`
  button {
    gap: 0.75rem;
  }
`;

export const CalendarButtonContainer = styled.div`
  button {
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding-left: 2rem;
    padding-right: 1.25rem;
    font-weight: 400;

    :hover {
      border: 1px solid rgba(0, 0, 0, 0.23);
    }
  }
`;

export const ProfileModalContainer = styled.div`
  button {
    padding: 0.25 1.25rem;
    align-items: center;

    p {
      font-weight: 700;
      width: 5rem;
      text-align: left;
    }
  }
`;
