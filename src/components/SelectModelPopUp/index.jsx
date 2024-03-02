import { useState, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";

import PersonalForm from "../PersonalForm";

import {
  SelectModelContainer,
  ModelsContainer,
  IndexIndicator,
  NextIndexIndicator,
  OptionalsContainer,
  PreviousIndexIndicator,
} from "./style";

import RakuzanLogo from "../../assets/images/rakuzan-logo.png";

import { Icons } from "../../assets/images/svg/icons/icons";
import { Optionals } from "../../assets/images/optionals/optionals";
import { Model } from "../../assets/images/models/models";

const SelectModel = () => {
  const [modelImg, setModelImg] = useState(Model.racingBlue);
  const [formIndex, setformIndex] = useState(1);
  const [formPage, setformPage] = useState("Select color");
  const [nextFormPage, setNextFormPage] = useState("optionals");
  const [optionalEmphasisImage, setOptionalEmphasisImage] = useState(
    "https://images.unsplash.com/photo-1638289394195-64e572399560?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const [optionalsTitle, setoptionalsTitle] = useState(true);

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
    gsap.to(".optional", {
      duration: 0.5,
      x: 0,
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

  const nextFormItem = (index) => {
    setformIndex(index);
  };

  const handleOptionalEmphasisImage = (url) => {
    setOptionalEmphasisImage(url);
  };

  return (
    <SelectModelContainer className="mainContainer">
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
      {formIndex === 1 && (
        <ModelsContainer>
          <IndexIndicator>
            <span className="index">{formIndex}</span>
            <span className="pageName">{formPage}</span>
          </IndexIndicator>
          <div className="colorsContainer">
            <button
              className="colorButton racingBlue"
              onClick={() => changeColor(Model.racingBlue)}
            >
              Racing Blue
            </button>
            <button
              className="colorButton ultraYellow"
              onClick={() => changeColor(Model.ultraYellow)}
            >
              Ultra Yellow
            </button>
            <button
              className="colorButton stormGray"
              onClick={() => changeColor(Model.stormGray)}
            >
              Storm Grey
            </button>
            <button
              className="colorButton ultraHotRed"
              onClick={() => changeColor(Model.ultraHotRed)}
            >
              UltraHot Red
            </button>
            <button
              className="colorButton shadowBlack"
              onClick={() => changeColor(Model.shadowBlack)}
            >
              Shadow Black
            </button>
            <button
              className="colorButton lightBlue"
              onClick={() => changeColor(Model.lightBlue)}
            >
              Light blue
            </button>
            <button
              className="colorButton bloodWhite"
              onClick={() => changeColor(Model.bloodWhite)}
            >
              Blood White
            </button>
            <button
              className="colorButton silverBlue"
              onClick={() => changeColor(Model.silverBlue)}
            >
              Silver Blue
            </button>
          </div>
          <div className="modelImgContainer">
            <img src={modelImg} alt="MT-07 Yamaha" className="modelImg" />
          </div>
          <NextIndexIndicator
            onClick={() => {
              nextFormItem(2);
              setNextFormPage("Confirmation");
            }}
          >
            <span className="pageName">{nextFormPage}</span>
            <img src={Icons.arrowRight} alt="" />
          </NextIndexIndicator>
        </ModelsContainer>
      )}
      {formIndex == 2 && (
        <OptionalsContainer $optionalEmphasis={optionalEmphasisImage}>
          <div className="optionals">
            <div className="optional">
              <span className="optionalName">Front Light Projector</span>
              <img
                src={Optionals.frontLightPrev}
                alt=""
                className="optionalImage"
                onClick={() => {
                  setoptionalsTitle(false);
                  handleOptionalEmphasisImage(Optionals.frontLigtBig);
                }}
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
                onClick={() => {
                  setoptionalsTitle(false);
                  handleOptionalEmphasisImage(Optionals.windScreenBig);
                }}
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
                onClick={() => {
                  setoptionalsTitle(false);
                  handleOptionalEmphasisImage(Optionals.tailLightBig);
                }}
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
                onClick={() => {
                  setoptionalsTitle(false);
                  handleOptionalEmphasisImage(Optionals.ledIndicatorBig);
                }}
              />
              <input
                type="checkbox"
                name=""
                id=""
                className="optionalCheckbox"
              />
            </div>
          </div>
          <div className="optionalEmphasis">
            <div className="gradient">
              {optionalsTitle && (
                <>
                  <div className="optionalEmphasist__container">
                    <h2 className="optionalEmphasis__title">Customize </h2>
                    <span className="optionalEmphasis__title_contrast">
                      Your machine
                    </span>
                  </div>
                </>
              )}
              <img src={RakuzanLogo} alt="" className="rakuzanLogo" />
            </div>
          </div>
          <NextIndexIndicator onClick={() => nextFormItem(3)}>
            <span className="pageName">{nextFormPage}</span>
            <img src={Icons.arrowRight} alt="" />
          </NextIndexIndicator>
        </OptionalsContainer>
      )}
      {formIndex == 3 && <PersonalForm></PersonalForm>}
      <PreviousIndexIndicator>
        <img src={Icons.backwardIcon} alt="" />
      </PreviousIndexIndicator>
    </SelectModelContainer>
  );
};

export default SelectModel;
