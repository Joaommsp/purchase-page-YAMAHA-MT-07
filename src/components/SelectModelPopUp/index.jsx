import { useState, useEffect } from "react";
import { gsap } from "gsap";

import PersonalForm from "../PersonalForm";
import DeliveryForm from "../DeliveryForm";
import Checkout from "../Checkout";

import {
  SelectModelContainer,
  ModelsContainer,
  NextIndexIndicator,
  OptionalsContainer,
  PreviousIndexIndicator,
  BannerContent,
  ClosePopUp,
} from "./style";

import OptionalsBg from "../../assets/images/optionals-bg.png";

import { Icons } from "../../assets/images/svg/icons/icons";
import { Optionals } from "../../assets/images/optionals/optionals";
import { Model } from "../../assets/images/models/models";

const SelectModel = () => {
  const [modelImg, setModelImg] = useState(Model.racingBlue);
  const [formIndex, setformIndex] = useState(1);
  const [goNextForm, setGoNextForm] = useState(true);
  const [goPreviousForm, setGoPreviousForm] = useState(false);
  const [price, setPrice] = useState(48500);
  const [buttonAnimation, setbuttonAnimation] = useState(".5rem");
  const [buttonBgColor, setbuttonBgColor] = useState("#00000090");
  const [buttonText, setbuttonText] = useState("Buy online");
  const [selectModel, setSelectModel] = useState(false);
  const [addBtnText, setAddBtnText] = useState("Add");

  useEffect(() => {
    gsap.to(".modelImgContainer", {
      duration: 0.3,
      x: -10,
      opacity: 0,
      onComplete: () => {
        gsap.to(".modelImgContainer", {
          x: 0,
          duration: 0.4,
          opacity: 1,
        });
      },
    });
  }, [modelImg]);

  useEffect(() => {
    gsap.to(".colorButton", {
      duration: 0.3,
      x: -200,
      opacity: 0,
      onComplete: () => {
        gsap.to(".colorButton", {
          x: 0,
          duration: 0.4,
          opacity: 1,
        });
      },
    });

    gsap.to(".mainContainer", {
      duration: 0.5,
      x: -200,
      opacity: 0,
      onComplete: () => {
        gsap.to(".mainContainer", {
          x: 0,
          duration: 0.5,
          opacity: 1,
        });
      },
    });
  }, []);

  useEffect(() => {
    gsap.to(".modelImgContainer", {
      duration: 0.3,
      x: -10,
      opacity: 0,
      onComplete: () => {
        gsap.to(".modelImgContainer", {
          x: 0,
          duration: 0.4,
          opacity: 1,
        });
      },
    });

    gsap.to(".colorButton", {
      duration: 0.3,
      x: -200,
      opacity: 0,
      onComplete: () => {
        gsap.to(".colorButton", {
          x: 0,
          duration: 0.4,
          opacity: 1,
        });
      },
    });

    gsap.to(".optional", {
      duration: 0.5,
      x: 0,
      opacity: 1,
    });

    gsap.to(".darkSideOfJapan__Container", {
      duration: 1,
      x: 55,
      opacity: 1,
    });

    gsap.to(".optionalEmphasis", {
      duration: 0.5,
      x: 0,
      opacity: 1,
    });

  }, [formIndex]);

  const changeColor = (imageColor) => {
    setModelImg(imageColor);
  };

  const nextFormItem = () => {
    let index = formIndex + 1;
    setGoPreviousForm(true);

    if (index >= 5) {
      index = 5;
      setGoNextForm(false);
    }

    setformIndex(index);
  };

  const previousFormItem = () => {
    let index = formIndex - 1;

    setGoNextForm(true);

    if (index <= 1) {
      index = 1;
      setGoPreviousForm(false);
    }

    setformIndex(index);
  };

  const openSelectModelPopUp = () => {
    setSelectModel(true);
  };

  const closeSelectModelPopUp = () => {
    setSelectModel(false);
    setformIndex(1);
    setGoNextForm(true);
  };

  const animateButton = () => {
    setbuttonAnimation("13rem");
    setbuttonBgColor("#FF0303");
    setbuttonText("Red Store");
  };

  const restoreButton = () => {
    setbuttonAnimation(".5rem");
    setbuttonBgColor("#00000090");
    setbuttonText("Buy online");
  };

  const addOptional = () => {
    setPrice(5100);
    setAddBtnText("Done");
  };

  return (
    <>
      {selectModel && (
        <SelectModelContainer className="mainContainer">
          {formIndex == 1 && (
            <div className="sideBar">
              <div className="sectionIndexContainer">
                <div className="sectionIndex selectedIndex">
                  <img src={Icons.selectColorIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.addIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.userIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.homeIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.checkIcon} alt="" />
                </div>
              </div>
            </div>
          )}
          {formIndex == 2 && (
            <div className="sideBar">
              <div className="sectionIndexContainer">
                <div className="sectionIndex">
                  <img src={Icons.selectColorIcon} alt="" />
                </div>
                <div className="sectionIndex selectedIndex">
                  <img src={Icons.addIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.userIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.homeIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.checkIcon} alt="" />
                </div>
              </div>
            </div>
          )}
          {formIndex == 3 && (
            <div className="sideBar">
              <div className="sectionIndexContainer">
                <div className="sectionIndex">
                  <img src={Icons.selectColorIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.addIcon} alt="" />
                </div>
                <div className="sectionIndex selectedIndex">
                  <img src={Icons.userIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.homeIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.checkIcon} alt="" />
                </div>
              </div>
            </div>
          )}
          {formIndex == 4 && (
            <div className="sideBar">
              <div className="sectionIndexContainer">
                <div className="sectionIndex">
                  <img src={Icons.selectColorIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.addIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.userIcon} alt="" />
                </div>
                <div className="sectionIndex selectedIndex">
                  <img src={Icons.homeIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.checkIcon} alt="" />
                </div>
              </div>
            </div>
          )}
          {formIndex == 5 && (
            <div className="sideBar">
              <div className="sectionIndexContainer">
                <div className="sectionIndex">
                  <img src={Icons.selectColorIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.addIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.userIcon} alt="" />
                </div>
                <div className="sectionIndex">
                  <img src={Icons.homeIcon} alt="" />
                </div>
                <div className="sectionIndex selectedIndex">
                  <img src={Icons.checkIcon} alt="" />
                </div>
              </div>
            </div>
          )}
          {formIndex === 1 && (
            <ModelsContainer>
              <div className="priceContainer">
                <span className="price">R$ 48.500,00</span>
                <span className="portions">or 24x of R$ 2300.00</span>
              </div>
              <div className="modelImgContainer">
                <img src={modelImg} alt="MT-07 Yamaha" className="modelImg" />
              </div>
              <div className="colorsContainer">
                <button
                  className="colorButton racingBlue"
                  onClick={() => changeColor(Model.racingBlue)}
                >
                  <span>Racing Blue</span>
                </button>
                <button
                  className="colorButton stormGray"
                  onClick={() => changeColor(Model.stormGray)}
                >
                  <span>Storm Grey</span>
                </button>
                <button
                  className="colorButton bloodWhite"
                  onClick={() => changeColor(Model.bloodWhite)}
                >
                  <span>Blood White</span>
                </button>
              </div>
            </ModelsContainer>
          )}
          {formIndex == 2 && (
            <OptionalsContainer $optionalsBg={OptionalsBg}>
              <div className="optionals">
                <div className="darkSideOfJapan__Container">
                  <h2>Dark side of japan</h2>
                  <span>customization kit</span>
                  <span className="darkSideOfJapan__price">R$ 2.500,00</span>
                  <button
                    className="darkSideOfJapan__AddButton"
                    onClick={() => addOptional()}
                  >
                    {addBtnText}
                  </button>
                </div>
                <div className="optional">
                  <span className="optionalName">Front Light Projector</span>
                  <img
                    src={Optionals.frontLightPrev}
                    alt=""
                    className="optionalImage"
                  />
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="optionalCheckbox"
                  />
                </div>
                <div className="optional">
                  <span className="optionalName">Windscreen</span>
                  <img
                    src={Optionals.windScreenPrev}
                    alt=""
                    className="optionalImage"
                  />
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="optionalCheckbox"
                  />
                </div>
                <div className="optional">
                  <span className="optionalName">Tail-light</span>
                  <img
                    src={Optionals.tailLightPrev}
                    alt=""
                    className="optionalImage"
                  />
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="optionalCheckbox"
                  />
                </div>
                <div className="optional">
                  <span className="optionalName">Led Indicator</span>
                  <img
                    src={Optionals.ledIndicatorPrev}
                    alt=""
                    className="optionalImage"
                  />
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="optionalCheckbox"
                  />
                </div>
              </div>
            </OptionalsContainer>
          )}
          {formIndex == 3 && <PersonalForm></PersonalForm>}
          {formIndex == 4 && <DeliveryForm></DeliveryForm>}
          {formIndex == 5 && <Checkout price={price}></Checkout>}
          {goNextForm && (
            <NextIndexIndicator
              onClick={() => {
                nextFormItem();
              }}
            >
              <img src={Icons.arrowRight} alt="" />
            </NextIndexIndicator>
          )}
          {goPreviousForm && (
            <PreviousIndexIndicator onClick={previousFormItem}>
              <img src={Icons.backwardIcon} />
            </PreviousIndexIndicator>
          )}
          {selectModel && (
            <ClosePopUp onClick={() => closeSelectModelPopUp()}>
              {" "}
              <img
                src={Icons.closeIcon}
                className="closePopUpIcon"
                alt="Close PopUp"
              />{" "}
            </ClosePopUp>
          )}
        </SelectModelContainer>
      )}
      <BannerContent $position={buttonAnimation} $bgColor={buttonBgColor}>
        <h1 className="homeTitle">MT-07 ABS</h1>
        <h2 className="homeSubtitle">Master of torque motorcycle</h2>
        <button
          className="buyButton"
          onMouseEnter={animateButton}
          onMouseLeave={restoreButton}
          onClick={openSelectModelPopUp}
        >
          {buttonText}
        </button>
      </BannerContent>
    </>
  );
};

export default SelectModel;
