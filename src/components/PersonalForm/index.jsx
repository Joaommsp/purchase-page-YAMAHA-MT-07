import { useEffect } from "react";
import { gsap } from "gsap";

import { PersonalFormContainer, SubmitButton, ResetFormButton } from "./styles";

const PersonalForm = () => {
  useEffect(() => {
    gsap.to(".personalFormContainer", {
      duration: 0.5,
      x: 0,
      opacity: 1,
    });

  });

  return (
    <PersonalFormContainer className="personalFormContainer">
      <div className="personalInfos">
        <div className="personalInfos__personal">
          <h2 className="personalInfos__title">Personal Informations</h2>
          <div className="formItem formItem__main">
            <label htmlFor="nameInput">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="nameInput"
              className="nameInput"
            />
          </div>
          <div className="formItem formItem__main">
            <label htmlFor="lastNameInput">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastNameInput"
              className="lastNameInput"
            />
          </div>
          <div className="formItem formItem__main">
            <label htmlFor="cpfInput">C.P.F</label>
            <input
              type="number"
              placeholder="CPF"
              name="cpfInput"
              className="cpfInput"
            />
          </div>
          <div className="formItem">
            <label htmlFor="emailnput">E-mail</label>
            <input
              type="text"
              placeholder="Email"
              name="emailnput"
              className="emailInput"
            />
          </div>
          <div className="formItem">
            <label htmlFor="phoneInput">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneInput"
              className="phoneInput"
            />
          </div>
          <ResetFormButton>Reset All</ResetFormButton>
        </div>
        {/* <div className="personalInfos__adress">
          <h2 className="personalInfos__adress__title">Adress</h2>
          <div className="formItem formItem__main">
            <label htmlFor="neighborhoodlnput">Neighborhood</label>
            <input type="text" placeholder="Bairro" name="neighborhoodlnput" className="neighborhoodlnput"/>
          </div>
          <div className="formItem">
            <label htmlFor="neighborhoodlnput">Street</label>
            <input type="text" placeholder="Rua" name="streetlnput"  className="streetlnput"/>
          </div>
          <div className="formItem">
            <label htmlFor="neighborhoodlnput">Number</label>
            <input type="text" placeholder="Número" name="numberInput" className="numberInput"/>
          </div>
          <div className="formItem">
            <label htmlFor="neighborhoodlnput">City</label>
            <input type="text" placeholder="Cidade" name="cityInput" className="cityInput"/>
          </div>
          <div className="formItem">
            <label htmlFor="neighborhoodlnput">CEP</label>
            <input type="text" placeholder="CEP" name="cepInput" className="cepInput"/>
          </div>
        </div> */}
      </div>
      <SubmitButton>Submit</SubmitButton>
    </PersonalFormContainer>
  );
};

export default PersonalForm;
