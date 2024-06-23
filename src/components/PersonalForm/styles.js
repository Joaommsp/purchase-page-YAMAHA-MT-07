import styled from "styled-components";

const theme = {
  primaryColor: "#181818",
  alternativePrimary: "#fefdfd",
  secundaryColor: "#40A2E3",
  linkColor: "#FF0303",
  lightGrey: "#A9A9A9",
};

export const PersonalFormContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;

  opacity: 0;

  position: relative;

  border-radius: 10px;

  background-color: ${theme.alternativePrimary};

  .rakuzanLogo {
    position: absolute;
    width: 100px;
    right: 5rem;
    top: 1rem;
  }

  h2 {
    font-size: 1rem;
  }

  .personalInfos {
    width: 100%;
    height: 100%;
  }

  .personalInfos {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .personalInfos__title {
    width: 100%;
    font-size: 1.3rem;
    color: ${theme.linkColor};
    margin-bottom: 2rem;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
    font-weight: 400;
    text-align: left;
  }

  .personalInfos__personal {
    height: 50%;
    width: 100%;
  }

  .personalInfos__personal {
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

  .nameInput {
    width: 90%;
  }

  .lastNameInput {
    width: 100%;
  }

  .cpfInput {
    width: 90%;
  }

  .emailInput {
    width: 100%;
  }

  .phoneInput {
    width: 90%;
  }

  /* .personalInfos__adress {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0rem 1rem 1rem 1rem;

    color: ${theme.primaryColor};
  }

  .personalInfos__adress .formItem input {
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
    .rakuzanLogo {
      width: 80px;
    }
  }

  @media only screen and (max-width: 600px) {
    .personalInfos__personal {
      padding: 1rem;
    }

    .personalInfos__title {
      width: 50%;
      font-size: 0.9rem;
      color: ${theme.linkColor};
      margin-bottom: 2rem;
      font-family: "Poppins", sans-serif;
      letter-spacing: 1px;
      font-weight: 400;
      text-align: left;
    }

    .rakuzanLogo {
      position: absolute;
      width: 50px;
      top: 1rem;
      right: 7rem;
    }

    .formItem {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .nameInput {
      width: 100%;
    }

    .lastNameInput {
      width: 100%;
    }

    .cpfInput {
      width: 100%;
    }

    .emailInput {
      width: 100%;
    }

    .phoneInput {
      width: 100%;
    }

    .formItem {
      margin-bottom: 2rem;
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
