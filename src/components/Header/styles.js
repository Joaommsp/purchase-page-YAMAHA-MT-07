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
  justify-content: center;

  background-color: transparent;
`;

export const HeaderLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;

  li a {
    text-decoration: none;
    color: ${theme.alternativePrimary};
    font-weight: 500;
    transition: 0.5s opacity;
  }

  img {
    width: 150px;
  }

  li:hover {
    cursor: pointer;
    opacity: 80%;
  }

  @media only screen and (max-width: 600px) {
    li a {
      font-size: .8rem;
    }

    img {
      width: 100px;
    }
  }
`;
