import { useEffect } from "react";
import { gsap } from "gsap";

import { DeliveryFormContainer, SubmitButton, ResetFormButton } from "./styles";

const DeliveryForm = () => {
  useEffect(() => {
    gsap.to(".DeliveryFormContainer", {
      duration: 0.5,
      x: 0,
      opacity: 1,
    });
  });

  return (
    <DeliveryFormContainer className="DeliveryFormContainer">
      <div className="adressInfos">
        <div className="adressInfos__personal">
          <h2 className="adressInfos__title">Delivery address</h2>
          <div className="formItem formItem__main">
            <label htmlFor="cityInput">City Name</label>
            <input
              type="text"
              placeholder="City"
              name="cityInput"
              className="cityInput"
            />
          </div>
          <div className="formItem formItem__main">
            <label htmlFor="stateInput">State</label>
            <input
              type="text"
              placeholder="State"
              name="stateInput"
              className="stateInput"
            />
          </div>
          <div className="formItem formItem__main miniFormItem">
            <label htmlFor="cepInput">CEP</label>
            <input
              type="number"
              placeholder="CEP"
              name="cepInput"
              className="cepInput"
            />
          </div>
          <div className="formItem">
            <label htmlFor="streetInput">Street</label>
            <input
              type="text"
              placeholder="Street"
              name="streetInput"
              className="streetInput"
            />
          </div>
          <div className="formItem miniFormItem">
            <label htmlFor="numberInput">Number</label>
            <input
              type="text"
              placeholder="Number"
              name="numberInput"
              className="numberInput"
            />
          </div>
          <div className="formItem miniFormItem">
            <label htmlFor="countryInput">Country</label>
            <input
              type="text"
              placeholder="Brazil"
              name="countryInput"
              className="countryInput"
              readOnly
            />
          </div>
          <ResetFormButton>Reset All</ResetFormButton>
        </div>
      </div>
      <SubmitButton>Submit</SubmitButton>
    </DeliveryFormContainer>
  );
};

export default DeliveryForm;
