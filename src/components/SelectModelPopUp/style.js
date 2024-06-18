import styled from "styled-components";

const theme = {
  primaryColor: "#181818",
  alternativePrimary: "#fefdfd",
  secundaryColor: "#40A2E3",
  linkColor: "#FF0303",
  lightGrey: "#A9A9A9",
};

export const SelectModelContainer = styled.div`
  width: 980px;
  height: 85%;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  z-index: 100;

  background-color: ${theme.alternativePrimary};

  .sideBar {
    width: 50px;
    height: 100%;
    background-color: ${theme.primaryColor};

    display: flex;
    justify-content: flex-end;

    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;
  }

  .sectionIndexContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    padding-top: 2rem;
    width: 50%;
  }

  .sectionIndex {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding-left: 0.2rem;

    border-bottom-left-radius: 60px;
    border-top-left-radius: 60px;
  }

  .selectedIndex {
    background-color: ${theme.alternativePrimary};
  }

  .sectionIndex img {
    width: 24px;
    padding: 0.3rem;
    background-color: ${theme.primaryColor};

    border-radius: 50%;
  }

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    width: 780px;
    height: 85%;
    border-radius: 10px;
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    width: 580px;
    height: 85%;
    border-radius: 10px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0;

    .sideBar {
      border-radius: 0;
    }
  }
`;

export const ModelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;

  position: relative;

  .rakuzanLogo {
    position: absolute;
    width: 100px;
    top: 1rem;
    right: 5rem;
  }

  .priceContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    position: absolute;
    right: 4rem;
    top: 8rem;
  }

  .priceContainer span {
    color: #757575;
  }

  .price {
    font-size: 1.8rem;
    font-family: "Anta", sans-serif;
  }

  .colorsContainer {
    width: 60%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .colorButton {
    width: 118px;
    border: 0;
    padding: 0.5rem;
    border-radius: 50px;
    position: relative;

    font-family: "Poppins", sans-serif;
    text-align: right;
    font-size: 0.75rem;
    transition: 0.5s;
  }

  .colorButton:hover {
    cursor: pointer;
  }

  .racingBlue::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #1626b9;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1em;
    margin: auto;
  }

  .stormGray::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #cbc8c6;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1em;
    margin: auto;
  }

  .bloodWhite::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #d31737;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1em;
    margin: auto;
  }

  .modelImgContainer {
    width: 100%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

  .modelImg {
    width: 350px;
    filter: drop-shadow(-6px -2px 4px #757575);
    transition: 0.5s;
  }

  .modelImg:hover {
    transform: scale(1.1);
  }

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    .price {
      font-size: 1rem;
    }

    .portions {
      font-size: 0.8rem;
    }

    .rakuzanLogo {
      width: 80px;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    .price {
      font-size: 1rem;
    }

    .priceContainer {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      position: absolute;
      right: 4rem;
      top: 5rem;
    }

    .portions {
      font-size: 0.8rem;
    }

    .rakuzanLogo {
      width: 50px;
      top: 1rem;
      right: 6.5rem;
    }

    .modelImg {
      margin-top: 4rem;
      width: 325px;
    }

    .colorButton {
      width: fit-content;
      border: 0;
      padding: 0.5rem;
      border-radius: 50px;
      position: relative;

      font-family: "Poppins", sans-serif;
      text-align: right;
      font-size: 0.75rem;
      transition: 0.5s;
    }

    .colorButton span {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    .rakuzanLogo {
      position: absolute;
      width: 50px;
      top: 1rem;
      right: 7rem;
    }

    .colorButton span {
      display: none;
    }

    .colorButton {
      width: fit-content;
      border: 0;
      padding: 0.5rem;
      border-radius: 50px;
      position: relative;

      font-family: "Poppins", sans-serif;
      text-align: right;
      font-size: 0.75rem;
      transition: 0.5s;
    }

    .modelImg {
      width: 250px;
      filter: drop-shadow(-6px -2px 4px #757575);
      transition: 0.5s;
    }

    .price {
      font-size: 1rem;
    }

    .priceContainer {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      position: absolute;
      right: 2rem;
      top: 5rem;
    }
  }
`;

export const IndexIndicator = styled.div`
  position: absolute;
  left: 1rem;
  width: 150px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  .pageName {
    font-size: 1.3rem;
    margin-top: 0.5rem;
    font-family: "Poppins", sans-serif;
  }

  .pageName {
    color: ${theme.linkColor};
  }

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    .pageName {
      font-size: 1rem;
    }
  }
`;

export const PreviousIndexIndicator = styled.div`
  position: absolute;
  left: 1em;
  bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;

  img {
    width: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const NextIndexIndicator = styled.div`
  position: absolute;
  right: 0rem;
  bottom: 1rem;
  width: 150px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  .index,
  .pageName {
    color: ${theme.lightGrey};
    margin-right: 0.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const OptionalsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${(props) => props.$optionalsBg});
  background-position: center;
  background-size: cover;

  border-radius: 10px;

  .optionals {
    width: 100%;
    height: 100%;

    position: relative;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    padding: 1.5rem;
    padding-bottom: 5rem;
  }

  .darkSideOfJapan__Container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 2rem;
    right: 5rem;
    opacity: 0;
  }

  .darkSideOfJapan__Container h2 {
    color: ${theme.primaryColor};
    font-size: 2rem;
    font-family: "Anta", sans-serif;
  }

  .darkSideOfJapan__Container span {
    width: 100%;
    font-family: "Anta", sans-serif;
    text-align: right;
    color: ${theme.linkColor};
  }

  .darkSideOfJapan__price {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .darkSideOfJapan__AddButton {
    width: 100px;

    margin-top: 1rem;
    padding: 0.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;

    border-radius: 50px;
    border: 0;

    transition: 0.3s ease-in-out;
  }

  .darkSideOfJapan__AddButton:hover {
    cursor: pointer;
    background-color: #00000080;
    color: #ffffff;
  }

  .optional {
    width: 106px;
    height: 70px;
    clip-path: polygon(0 0, 65% 0, 100% 100%, 29% 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    overflow: hidden;
  }

  .optionalName {
    font-size: 0.8rem;
    text-align: center;
    color: ${theme.primaryColor};
    margin-bottom: 0.5rem;
  }

  .optionalImage {
    width: 156px;
    transition: 0.5s ease-in-out;

    margin-bottom: 1rem;

    box-shadow: 0px 0px 1.1px rgba(0, 0, 0, 0.097),
      0px 0px 3.8px rgba(0, 0, 0, 0.143), 0px 0px 17px rgba(0, 0, 0, 0.24);
  }

  .optionalImage:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .optionalCheckbox {
    margin-right: 1rem;
  }

  input[type="checkbox"] {
    position: relative;
    cursor: pointer;
  }

  input[type="checkbox"]:before {
    content: "";
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 0px;
    top: 0;
    left: 0;
    background-color: ${theme.lightGrey}; /* Azul */
  }

  input[type="checkbox"]:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 5px;
    left: 9px;
  }

  .optionalEmphasis {
    width: 50%;
    height: 100%;
    opacity: 0;

    position: relative;

    background-image: url(${(props) => props.$optionalEmphasis});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .gradient {
    width: 100%;
    height: 100%;

    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0802696078431373) 0%,
      rgba(18, 18, 18, 1) 100%
    );
    padding: 2rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    .darkSideOfJapan__Container h2 {
      font-size: 1.2rem;
    }

    .darkSideOfJapan__price {
      font-size: 1.2rem;
    }

    .darkSideOfJapan__AddButton {
      width: 100px;
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    .darkSideOfJapan__Container h2 {
      font-size: 1.2rem;
    }

    .darkSideOfJapan__price {
      font-size: 1.2rem;
    }

    .darkSideOfJapan__AddButton {
      width: 100px;
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 600px) {
    border-radius: 0;

    .darkSideOfJapan__Container h2 {
      font-size: 1.2rem;
    }

    .darkSideOfJapan__price {
      font-size: 1.2rem;
    }

    .darkSideOfJapan__AddButton {
      width: 100px;
      font-size: 0.8rem;
    }

    .optionals {
      flex-wrap: wrap;
      align-items: flex-end;
    }
  }
`;

export const BannerContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10rem;

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
    color: #b7b7b7;
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
  top: 0.5rem;
  right: 0.5rem;

  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  .closePopUpIcon {
    width: 18px;
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    top: 1rem;
    right: 2em;
  }

  @media only screen and (max-width: 600px) {
    top: 1rem;
    right: 2em;
  }
`;
