import { useState, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";

import { Model } from "../../assets/images/models/models";

import {
  SelectModelContainer,
  ModelsContainer,
  IndexIndicator,
  NextIndexIndicator,
  OptionalsContainer,
} from "./style";

import { Icons } from "../../assets/images/svg/icons/icons";
import { Optionals } from "../../assets/images/optionals/optionals";

const SelectModel = () => {
  const [modelImg, setModelImg] = useState(Model.racingBlue);
  const [formIndex, setformIndex] = useState(1);
  const [formPage, setformPage] = useState("Select color");
  const [nextFormPage, setNextFormPage] = useState("optionals");
  const [optionalEmphasisImage, setOptionalEmphasisImage] = useState(
    "https://images.unsplash.com/photo-1638289394195-64e572399560?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

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

  const changeColor = (imageColor) => {
    setModelImg(imageColor);
  };

  const nextFormItem = () => {
    setformIndex(2);
  };
  
  const handleOptionalEmphasisImage = (url) => {
    setOptionalEmphasisImage(url)
  };

  return (
    <SelectModelContainer className="mainContainer">
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
          <NextIndexIndicator onClick={nextFormItem}>
            <span className="pageName">{nextFormPage}</span>
            <img src={Icons.arrowRight} alt="" />
          </NextIndexIndicator>
        </ModelsContainer>
      )}
      {formIndex == 2 && (
        <OptionalsContainer $optionalEmphasis={optionalEmphasisImage}>
          <IndexIndicator>
            <span className="index">{formIndex}</span>
            <span className="pageName">{formPage}</span>
          </IndexIndicator>
          <div className="optionals">
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
                onChange={handleOptionalEmphasisImage}
              />
            </div>
          </div>
          <div className="optionalEmphasis"></div>
        </OptionalsContainer>
      )}
      {/* <FormContainer></FormContainer> */}
    </SelectModelContainer>
  );
};

export default SelectModel;
