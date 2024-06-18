import { useState, useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import { IMask } from "react-imask";

import CheckoutImage from "../../assets/images/checkout-image.png";
import DeliveryIcon from "../../assets/images/delivery-icon.png";
import NfcIcon from "../../assets/images/nfc-sign.png";
import CreditCardChip from "../../assets/images/credit-card-chip.png";
import { Icons } from "../../assets/images/svg/icons/icons";

import MasterCard from "../../assets/images/flags/masterCard.png";
import Nubank from "../../assets/images/banks/nubank.png";

import {
  CheckoutContainer,
  ItemCardCheckout,
  PurchaseDetails,
  PaymentCheckout,
} from "./styles";

const Checkout = (props) => {
  const [deliveryPrice, setDeliveryPrice] = useState(2000);

  const [cardHolder, setCardHolder] = useState("********");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMask, setCardMask] = useState("0000 0000 0000 0000");
  const [cardExpiration, setCardExpiration] = useState("00/00");

  const cardPatterns = {
    visa: /^4\d{0,15}/,
    mastercard: /(^5[1-5]\d{0,2}|^22[2-9]\d{0,1}|^2[3-7]\d{0,2})\d{0,12}/,
    hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
    mestro: /^(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15}$/,
    elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/,
    americanexpress: /^3[47]\d{13}$/,
  };

  const handleCardHolder = (event) => {
    setCardHolder(event.target.value);
  };

  const determineCardMask = (number) => {
    for (const [cardType, pattern] of Object.entries(cardPatterns)) {
      if (pattern.test(number)) {
        switch (cardType) {
          case "visa":
            return "0000 0000 0000 0000";
          case "mastercard":
            return "0000 0000 0000 0000";
          // Adicione outros casos conforme necessário
          default:
            return "0000 0000 0000 0000"; // Máscara padrão
        }
      }
    }
    return "0000 0000 0000 0000"; // Máscara padrão
  };

  const handleCardNumber = (event) => {
    const number = event.target.value.replace(/\s+/g, "");
    const mask = determineCardMask(number);
    setCardMask(mask);
    setCardNumber(number.replace(/(\d{4})/g, "$1 ").trim());
  };

  return (
    <CheckoutContainer>
      <div className="itemCheckout">
        <h2 className="itemCheckout__title">Payment</h2>
        <span className="itemCheckout__price">R$ {props.price + 2000},00</span>
        <ItemCardCheckout>
          <div className="itemCheckout__image">
            <img src={CheckoutImage} alt="" className="checkoutImage" />
          </div>
          <div className="itemCheckout__details">
            <div>
              <span className="itemName">Yamaha MT-07</span>
              <span>
                <span className="amount">1</span>
              </span>
            </div>
            <div>
              <span className="checkoutPrice">R$ {props.price}</span>
            </div>
          </div>
        </ItemCardCheckout>
        <ItemCardCheckout>
          <div className="itemCheckout__image">
            <img src={DeliveryIcon} alt="" className="checkoutImageDelivery" />
          </div>
          <div className="itemCheckout__details">
            <div>
              <span className="itemName">Delivery</span>
              <span>
                Qty <span className="amount">1</span>
              </span>
            </div>
            <div>
              <span className="checkoutPrice">R$ 2000</span>
            </div>
          </div>
        </ItemCardCheckout>
        <PurchaseDetails>
          <div className="subtotalContainer">
            <span className="total">Subtotal</span>
            <span className="totalPrice">R$ {deliveryPrice + props.price}</span>
          </div>
          <div className="totalContainer">
            <span className="total">Total</span>
            <span className="totalPrice">R$ {deliveryPrice + props.price}</span>
          </div>
        </PurchaseDetails>
      </div>
      <PaymentCheckout>
        <div className="creditCard">
          <div className="creditCard__header">
            <img src={Nubank} alt="" className="creditCard__bank" />
            <img src={NfcIcon} alt="" className="creditCard__nfc" />
          </div>
          <div className="chipContainer">
            <img src={CreditCardChip} alt="" className="chip" />
          </div>
          <div className="creditCard__infos">
            <div className="creditCard__infos__data">
              <span className="creditCard__number">{cardNumber}</span>
              <span className="creditCard__date">{cardExpiration}</span>
              <span className="creditCard__name">{cardHolder}</span>
            </div>
            <div className="creditCard__infos__flag">
              <img src={MasterCard} alt="" className="flag" />
            </div>
          </div>
        </div>
        <div className="creditCardForm">
          <form action="">
            <div className="input-wrapper">
              <input
                id="card-number"
                onChange={handleCardHolder}
                maxLength={16}
                placeholder="Holder"
              />
              <img src={Icons.UserCircleDarkIcon} alt="" />
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                value={cardNumber}
                placeholder="Card number"
                maxLength={19}
                onChange={handleCardNumber}
              />
              <img src={Icons.CardIcon} alt="" />
            </div>

            <div className="flex">
              <div className="input-wrapper">
                <input id="expiration-date" placeholder="Expiration date" />
                <img src={Icons.CalendarIcon} alt="" />
              </div>
            </div>

            <button id="add-card" className="finishStore">
              Finalizar compra
            </button>
          </form>
        </div>
      </PaymentCheckout>
    </CheckoutContainer>
  );
};

Checkout.propTypes = {
  price: PropTypes.string,
};

export default Checkout;
