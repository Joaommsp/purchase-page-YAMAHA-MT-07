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
  flex-direction: column;
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
    transition: .5s;
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
    background-color: #2E2E2E;
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
    background-color: #31769F;
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
    background-color: #D31737;
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
    background-color: #8D8D8D;
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
    padding: 1rem;
  }

  .optional {
    width:  150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .optionalName {
    font-size: .8rem;
    text-align: center;
    color: ${theme.primaryColor};
    margin-bottom: .5rem;
  }

  .optionalImage {
    width: 100%;
    border-radius: 50%;

    margin-bottom: 1rem;
    box-shadow:
  0px 0px 0.6px rgba(0, 0, 0, 0.105),
  0px 0px 5px rgba(0, 0, 0, 0.21)
;
  }

  .optionalCheckbox {
    width: 100px;
    height: 20px;
    border: 0;
  }

  .optionalEmphasis {
    width: 50%;
    height: 100%;
    background-image: url(${(props) => props.$optionalEmphasis});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

`;

