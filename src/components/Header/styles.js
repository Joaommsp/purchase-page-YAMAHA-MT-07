import styled from "styled-components";

const theme = {
  primaryColor: "#181818",
  alternativePrimary: "#fefdfd",
  secundaryColor: "#40A2E3",
  linkColor: "#FF0303",
};

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  z-index: 2000;
  background-color: #0f0f0f;
  border-bottom: 2px solid #cef783;

  padding: 1rem 8rem;

  .logo {
    width: 136px;
  }

  .menuMobileBtn {
    background-color: transparent;
    border: 0;
    display: none;
  }

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    padding: 1rem 2rem;

    .logo {
      width: 136px;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 1rem 0rem 1rem 2rem;
    height: fit-content;

    .logo {
      width: 104px;
    }

    .menuMobileBtn {
      display: block;
      position: absolute;
      top: 1.2rem;
      right: 2rem;
    }

    .menuMobileBtn:hover {
      cursor: pointer;
    }

    .menuMobileBtn img {
      width: 24px;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 1rem 0rem 1rem 0.5rem;

    .menuMobileBtn {
      display: block;
      position: absolute;
      top: 1.2rem;
      right: 1rem;
    }
  }
`;

export const HeaderLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;

  li a {
    text-decoration: none;
    color: ${theme.alternativePrimary};
    font-weight: 300;
    transition: 0.5s opacity;
    font-size: 0.9rem;
  }

  li:hover {
    cursor: pointer;
    opacity: 80%;
  }

  .homeLink {
    color: #cef783;
    font-weight: 500;
  }

  @media only screen and (max-width: 800px) {
    padding: 1rem 1rem;
    display: none;

    margin-top: 2rem;

    flex-direction: column;

    .logo {
      width: 136px;
    }
  }
`;
