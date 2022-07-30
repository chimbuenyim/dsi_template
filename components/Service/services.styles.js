import styled from "styled-components";
import Container from "../universal/container";

export const ServicesWrapper = styled.div`
  /* margin: 50px 0; */

  .app__service-header {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    background-color: ${({ theme }) => theme.lightGreyColor};

    ${Container} {
      font-size: 48px;
      line-height: 1.4;
      text-align: center;
      top: 100px;
      margin: auto;
    }
    .app__image {
    }
  }

  .app__service-bodyCard {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    gap: 30px;
  }

  .app__service-bodyCard-text,
  .app__service-bodyCard-image {
    width: 50%;
    display: flex;
    flex-direction: column;

    p {
      margin: 20px 0;
    }

    h2 {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 992px) {
    ${Container} {
      padding: 0 10px;
    }

    .app__service-bodyCard {
      flex-direction: column-reverse;
    }

    .app__service-bodyCard-text,
    .app__service-bodyCard-image {
      width: 100%;
      gap: 20px;
    }
  }
`;
