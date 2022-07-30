import styled from "styled-components";
import Container from "../container";

export const FooterWrapper = styled.div`
  width: 100%;

  .app__footer-address {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 20px;
  }

  .app__footer-addressCard {
    display: flex;
    flex-direction: column;
    width: 33%;
  }

  .app__footer-addressCardHeader {
    display: flex;
    align-items: center;
    height: 60px;
  }

  .app__footer-copyright {
    text-align: center;
    padding: 20px;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.whiteColor};
    margin-top: 10px;
  }

  @media screen and (max-width: 992px) {
    .app__footer-address {
      padding: 0 10px;
    }
  }

  @media screen and (max-width: 786px) {
    ${Container} {
      margin: auto;
      width: 100%;
    }

    .app__footer-address {
      padding: 0 10px;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }

    .app__footer-addressCard {
      width: 100%;
      &:last-of-type {
        .app__footer-addressCardHeader {
          height: 20px;
        }
      }
    }
  }
`;
