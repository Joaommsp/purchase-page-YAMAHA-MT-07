import React from "react";
import PropTypes from "prop-types";

import { CheckoutContainer, ItemCardCheckout } from "./styles";

const Checkout = (props) => {
  return (
    <CheckoutContainer>
      <div className="itemCheckout">
        <h2 className="itemCheckout__title">Payment</h2>
        <span className="itemCheckout__price">{props.price}</span>
        <ItemCardCheckout></ItemCardCheckout>
      </div>
      <div className="paymentCheckout"></div>
    </CheckoutContainer>
  );
};

Checkout.propTypes = {
  price: PropTypes.string,
};

export default Checkout;
