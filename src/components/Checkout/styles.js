import styled from "styled-components";

const theme = {
  primaryColor: "#181818",
  alternativePrimary: "#fefdfd",
  secundaryColor: "#40A2E3",
  linkColor: "#FF0303",
};

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;

  .itemCheckout {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .itemCheckout__title {
    color: #757575;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  .itemCheckout__price {
    font-size: 1.5rem;
    color: ${theme.primaryColor};
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .paymentCheckout {
    width: 50%;
    height: 100%;
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    overflow-y: scroll;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .itemCheckout {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .paymentCheckout {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    overflow-y: scroll;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .itemCheckout {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .paymentCheckout {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ItemCardCheckout = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  gap: 10px;

  margin: 1rem 0;

  .itemCheckout__details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .itemCheckout__details div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .itemCheckout__details div:nth-child(2) {
    align-items: flex-end;
  }

  .itemCheckout__image {
    width: 150px;
  }

  .checkoutImage {
    width: 80px;
  }

  .checkoutImageDelivery {
    width: 60px;
  }

  .itemCheckout__details span {
    font-size: 0.8rem;
    color: #757575;
  }

  .checkoutPrice {
    font-weight: 500;
  }

  .amount {
    font-weight: bold;
  }
`;

export const PurchaseDetails = styled.div`
  width: 90%;

  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .subtotalContainer,
  .totalContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .subtotalContainer {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #00000030;
  }

  .total {
    color: ${theme.primaryColor};
    font-size: 0.8rem;
  }

  .totalPrice {
    color: ${theme.primaryColor};
    font-size: 0.8rem;
  }
`;

export const PaymentCheckout = styled.div`
  width: 400px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  .creditCard {
    width: 350px;
    background-color: #9b42c9;
    height: 210px;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 1rem;
  }

  .creditCard__header {
    width: 100%;
    height: 30%;

    display: flex;
    justify-content: space-between;
  }

  .creditCard__bank {
    width: 50px;
    height: 30px;
  }

  .creditCard__nfc {
    width: 25px;
    height: 25px;
  }

  .chipContainer {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .chip {
    width: 90px;
  }

  .creditCard__infos {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .creditCard__infos__data {
    display: flex;
    flex-direction: column;
  }

  .creditCard__date,
  .creditCard__name {
    font-size: 0.8rem;
  }

  .flag {
    width: 80px;
  }

  .creditCardForm {
    width: 100%;
    margin-top: 1rem;
  }

  .creditCardForm form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 1rem;
  }

  .input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
  }

  .input-wrapper img {
    width: 20px;
  }

  .input-wrapper input {
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 50px;
    font-size: 0.8rem;
    border: 0;
    background-color: #eeeeee;
    border: 2px solid transparent;
    transition: 0.2s ease-in-out;
  }

  .input-wrapper input:hover {
    border: 2px solid #00000030;
  }

  .input-wrapper input:focus {
    border: 2px solid #00000080;
  }

  #expiration-date {
    width: 200px;
  }

  .finishStore {
    width: 100%;
    padding: 0.5rem;
    font-size: 0.8rem;
    font-family: "Poppins", sans-serif;
    border-radius: 20px;
    background-color: #df0126;
    border: 0;
    color: #ffffff;
    transition: 0.3s ease-in-out;
  }

  .finishStore:hover {
    cursor: pointer;
    background-color: #c40c0c;
  }

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    .creditCard {
      width: 300px;
      height: 200px;
    }

    .creditCard__bank {
      width: 40px;
      height: 20px;
    }

    .creditCard__nfc {
      width: 15px;
      height: 15px;
    }

    .chip {
      width: 70px;
    }

    .creditCard__infos {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
    }

    .creditCard__infos__data {
      display: flex;
      flex-direction: column;
    }

    .creditCard__date,
    .creditCard__name {
      font-size: 0.8rem;
    }

    .flag {
      width: 60px;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    width: fit-content;
    height: 100%;

    .creditCard {
      margin-top: 2rem;
      width: 400px;
      height: 250px;
    }
  }

  @media only screen and (min-width: 500px) and (max-width: 600px) {
    width: fit-content;
    height: 100%;

    .creditCard {
      margin-top: 2rem;
      width: 400px;
      height: 250px;
    }
  }

  @media only screen and (max-width: 500px) {
    width: fit-content;
    height: 90%;
    padding: 1rem 0 1rem 0rem;

    .creditCard {
      margin-top: 2rem;
      width: 300px;
      height: 200px;
    }
  }
`;
