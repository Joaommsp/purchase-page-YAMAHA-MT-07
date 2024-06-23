import styled from "styled-components";

const theme = {
  primaryColor: "#181818",
  alternativePrimary: "#fefdfd",
  secundaryColor: "#40A2E3",
  linkColor: "#FF0303",
  lightGrey: "#A9A9A9",
};

export const DeliveryFormContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;

  opacity: 0;

  position: relative;

  border-radius: 10px;

  background-color: ${theme.alternativePrimary};

  .rakuzanLogo2 {
    position: absolute;
    width: 100px;
    right: 5rem;
    top: 1rem;
  }

  h2 {
    font-size: 1rem;
  }

  .adressInfos {
    width: 100%;
    height: 100%;
  }

  .adressInfos {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .adressInfos__title {
    width: 100%;
    font-size: 1.3rem;
    color: ${theme.linkColor};
    margin-bottom: 2rem;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
    font-weight: 400;
    text-align: left;
  }

  .adressInfos__personal {
    height: 50%;
    width: 100%;
  }

  .adressInfos__personal {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 2rem;

    color: ${theme.primaryColor};
  }

  .formItem {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .miniFormItem {
    width: 25%;
  }

  .formItem label {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }

  .formItem input {
    height: 36px;
    padding: 0.5rem;
    border: 0;
    background-color: transparent;
    transition: 0.5s all;
    font-family: "Poppins", sans-serif;

    border-radius: 0;
    border-bottom: 1px solid #00000050;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Para navegadores Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .formItem__main {
    margin-bottom: 2rem;
  }

  .cityInput {
    width: 90%;
  }

  .stateInput {
    width: 100%;
  }

  .cepInput {
    width: 80%;
  }

  .streetInput {
    width: 90%;
  }

  .numberInput {
    width: 90%;
  }

  /* .adressInfos__adress {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0rem 1rem 1rem 1rem;

    color: ${theme.primaryColor};
  }

  .adressInfos__adress .formItem input {
    height: 25px;
    font-size: 0.8rem;
  }

  .neighborhoodlnput {
    width: 100%;
  }

  .streetlnput,
  .cityInput {
    width: 90%;
  }

  .numberInput,
  .cepInput {
    width: 100%;
  } */

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    .rakuzanLogo2 {
      width: 80px;
    }
  }

  @media only screen and (max-width: 600px) {
    .rakuzanLogo2 {
      width: 50px;
      top: 1rem;
      right: 6.5rem;
    }

    .adressInfos__personal {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      padding: 1rem;

      color: ${theme.primaryColor};
    }

    .formItem {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .cityInput {
      width: 100%;
    }

    .stateInput {
      width: 100%;
    }

    .cepInput {
      width: 50%;
    }

    .streetInput {
      width: 100%;
    }

    .numberInput {
      width: 50%;
    }

    .formItem__main {
      margin-bottom: 1rem;
    }

    .formItem {
      margin-bottom: 1rem;
    }

    .adressInfos__title {
      font-size: 1rem;
    }
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 5rem;

  width: 100px;
  height: 36px;

  border: 0;
  border-radius: 50px;
  background-color: #49a8e7;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.35);

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: ${theme.alternativePrimary};

  transition: 0.3s ease-out;

  &:hover {
    background-color: #387adf;
    cursor: pointer;
  }
`;

export const ResetFormButton = styled.div`
  width: fit-content;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: absolute;
  left: 2rem;
  bottom: 2rem;

  color: #00000090;
  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
