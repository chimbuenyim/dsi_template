import styled from "styled-components";

export const ButtonWrapper = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    font-size: 1.125rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.whiteColor};
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    border: 0;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
