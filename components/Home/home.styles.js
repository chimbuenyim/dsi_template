import styled from "styled-components";
import Container from "../universal/container";

export const HomePageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;

  .app__home-body {
    display: flex;
    flex-direction: column;

    .app__home-hero {
      height: 95vh;
    }

    .app__home-bodyCard {
      display: flex;

      ${Container} {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        align-items: center;
        padding: 5rem 0;
      }

      .app__home-bodyCardText,
      .app__home-bodyCardImage {
        width: 45%;
        display: flex;
        flex-direction: column;
      }

      p {
        margin-bottom: 20px;
      }

      span {
        color: ${({ theme }) => theme.primaryColor};
      }
    }

    @media screen and (max-width: 992px) {
      ${Container} {
        flex-direction: column-reverse;
        width: 100%;
      }

      .app__home-bodyCard {
        .app__home-bodyCardText,
        .app__home-bodyCardImage {
          width: 100%;
          text-align: center;
          align-items: center;
          padding: 0 10px;
        }
      }
    }
  }

  .app__home-products {
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    ${Container} {
      text-align: left;
      display: flex;
      justify-content: space-between;
      gap: 40px;
      flex-grow: 10px;
    }

    .app__home-productCard {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;

      h3 {
        color: ${({ theme }) => theme.primaryColor};
      }
      p {
        height: 100px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }

    @media screen and (max-width: 992px) {
      ${Container} {
        padding: 0 10px;
      }
    }

    @media screen and (max-width: 786px) {
      ${Container} {
        flex-direction: column;
        text-align: center;
        gap: 50px;
      }
      .app__home-productCard {
        width: 100%;
        align-items: center;
        gap: 10px;
      }
    }
  }
`;
