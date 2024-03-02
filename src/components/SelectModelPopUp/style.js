import styled from "styled-components";

const theme = {
  primaryColor: "#181818",
  alternativePrimary: "#fefdfd",
  secundaryColor: "#40A2E3",
  linkColor: "#FF0303",
  lightGrey: "#A9A9A9",
};

export const SelectModelContainer = styled.div`
  width: 70%;
  height: 70%;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0;

  background-color: ${theme.alternativePrimary};

  .sideBar {
    width: 20%;
    height: 100%;
    background-color: #49a8e7;

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
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding-left: .8rem;

    border-bottom-left-radius: 60px;
    border-top-left-radius: 60px;
  }

  .selectedIndex {
    background-color: ${theme.alternativePrimary};
  }

  .sectionIndex img {
    width: 50%;
    padding: 0.3rem;
    background-color: #49a8e7;

    border-radius: 50%;
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

  .colorsContainer {
    width: 60%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .colorButton {
    width: 25%;
    border: 0;
    padding: 0.5rem;
    border-radius: 50px;
    position: relative;
    opacity: 0;

    background-color: transparent;

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

  .ultraYellow::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #e6ae0b;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1em;
    margin: auto;
  }

  .ultraHotRed::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #e21a23;
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

  .shadowBlack::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #2e2e2e;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1em;
    margin: auto;
  }

  .lightBlue::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #31769f;
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

  .silverBlue::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #8d8d8d;
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
    opacity: 0;
  }

  .modelImg {
    width: 350px;
    filter: drop-shadow(-6px -2px 4px #757575);
    transition: 0.5s;
  }

  .modelImg:hover {
    transform: scale(1.1);
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

  .index {
    margin-right: 1rem;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
  }

  .pageName {
    margin-top: 0.5rem;
    font-family: "Poppins", sans-serif;
  }

  .index,
  .pageName {
    color: ${theme.linkColor};
  }
`;

export const PreviousIndexIndicator = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;

  img {
    width: 25px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const NextIndexIndicator = styled.div`
  position: absolute;
  right: 1rem;
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
`;

export const OptionalsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  position: relative;

  .optionals {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 100px;
    flex-wrap: wrap;
    padding: 1.5rem;
  }

  .optional {
    width: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
  }

  .optionalName {
    font-size: 0.8rem;
    text-align: center;
    color: ${theme.primaryColor};
    margin-bottom: 0.5rem;
  }

  .optionalImage {
    width: 100px;
    border-radius: 50%;
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
    width: 100px;
    height: 20px;
    border: 0;
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

  .optionalEmphasist__container {
    display: flex;
    flex-direction: column;
  }

  .optionalEmphasis__title {
    font-size: 3rem;
    text-align: right;
    text-shadow: -1px 2px 2px rgba(0, 0, 0, 0.6);
    font-family: "Poppins", sans-serif;
  }

  .optionalEmphasis__title_contrast {
    font-size: 2rem;
    text-align: right;
    color: #f57d1f;
    text-shadow: -1px 2px 2px rgba(0, 0, 0, 0.6);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    opacity: 1;
  }

  .rakuzanLogo {
    position: absolute;
    width: 150px;
    bottom: 1rem;
    left: 1rem;
  }
`;
