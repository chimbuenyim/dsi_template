import styled from "styled-components";
import Container from "../container";

export const NavbarWrapper = styled.div`
  background: ${({ theme }) => theme.whiteColor};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  position: sticky;
  top: 0px;
  z-index: 1;
  padding: 10px 0;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .app__navbar-logo {
    display: flex;
    align-items: center;
  }

  .app__navbar-links {
    width: 100%;
    display: flex;
    justify-content: center;
    font-weight: 500;

    a {
      margin: 0 30px;
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }
    }
  }

  .app__navbar-icons {
    display: flex;
    align-items: center;

    svg {
      display: flex;
      font-weight: 500;
      opacity: 0.6;
      font-size: 1.5rem;
      cursor: pointer;
      margin: 0 10px;

      &:hover {
        opacity: 1;
      }
    }
    .hamburger {
      display: none;
    }
  }

  .navbar-active {
    opacity: 1;
    svg {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1300px) {
    .app__navbar-links {
      a {
        margin: 0 15px;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .app__navbar-icons {
      display: none;
    }
    .app__navbar-links {
      justify-content: flex-end;
    }
  }
  @media screen and (max-width: 992px) {
    ${Container} {
      margin: auto;
    }

    .app__navbar-logo {
      margin: 0 10px;
    }

    .app__navbar-links {
      display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
      position: absolute;
      flex-direction: column;
      justify-content: flex-start;
      z-index: 1;
      top: 56px;
      backdrop-filter: blur(10px);
      height: 100vh;
      width: 100%;

      a {
        margin: 0;
        margin-left: 10px;
      }
    }

    .app__navbar-icons {
      display: flex;

      .hamburger {
        display: flex;
        font-size: 2rem;
      }

      .home-shuffle {
        display: none;
      }
    }
  }
`;
