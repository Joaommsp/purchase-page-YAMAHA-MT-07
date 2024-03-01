import styled from "styled-components";

const theme = {
  primaryColor: "#181818",
  alternativePrimary: "#fefdfd",
  secundaryColor: "#40A2E3",
  linkColor: "#FF0303",
};

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${(props) => props.$backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BannerGradient = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.0802696078431373) 0%,
    rgba(18, 18, 18, 1) 100%
  );
`;

export const BannerContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .homeTitle {
    font-size: 3rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
    text-shadow: -2px 2px 3px rgba(0, 0, 0, 0.6);
  }

  .homeSubtitle {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    margin-bottom: 2rem;
    text-align: center;
    text-shadow: -2px 2px 3px rgba(0, 0, 0, 0.6);
  }

  .buyButton {
    width: 15rem;
    height: 2.5rem;
    border: 0;
    border-radius: 50px;

    position: relative;

    background-color: ${(props) => props.$bgColor};

    color: ${theme.alternativePrimary};
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    font-weight: 500;

    transition: 0.5s ease-in-out;

    &::after {
      content: "";
      width: 25px;
      height: 25px;
      background-color: #ffffff;
      border-radius: 50%;

      position: absolute;
      top: 0;
      bottom: 0;
      left: ${(props) => props.$position};
      margin: auto;

      transition: 0.5s ease-in-out;
    }

    &:hover {
      cursor: pointer;
    }

    &:active {
    }
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;

export const ClosePopUp = styled.button`
  border: 0;
  position: absolute;
  top: 5rem;
  right: 5rem;

  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  .closePopUpIcon {
    width: 25px;
  }
`;
