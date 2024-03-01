import { useState, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../../components/Header";
import SelectModel from "../../components/SelectModelPopUp";

import Banner from "../../assets/images/banner-mt07.jpg";

import {
  HomeContainer,
  BannerContainer,
  BannerGradient,
  BannerContent,
  ClosePopUp,
} from "./styles";
import { Icons } from "../../assets/images/svg/icons/icons";
const Home = () => {
  const [buttonAnimation, setbuttonAnimation] = useState(".5rem");
  const [buttonBgColor, setbuttonBgColor] = useState("#00000090");
  const [buttonText, setbuttonText] = useState("Buy online");
  const [selectModel, setSelectModel] = useState(false);

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

  const openSelectModelPopUp = () => {
    setSelectModel(true);
  };

  const closeSelectModelPopUp = () => {
    setSelectModel(false);
  };

  return (
    <HomeContainer>
      <Header />
      <BannerContainer $backgroundImg={Banner}>
        <BannerGradient>
          <BannerContent $position={buttonAnimation} $bgColor={buttonBgColor}>
            <h1 className="homeTitle">GT-07 ABS</h1>
            <h2 className="homeSubtitle">the goddess of torque motorcycle</h2>
            <button
              className="buyButton"
              onMouseEnter={animateButton}
              onMouseLeave={restoreButton}
              onClick={openSelectModelPopUp}
            >
              {buttonText}
            </button>
            <div>{selectModel && <SelectModel className="selectModel"/>}</div>
            {selectModel && (
              <ClosePopUp onClick={closeSelectModelPopUp}>
                {" "}
                <img
                  src={Icons.closeIcon}
                  className="closePopUpIcon"
                  alt="Close PopUp"
                />{" "}
              </ClosePopUp>
            )}
          </BannerContent>
        </BannerGradient>
      </BannerContainer>
    </HomeContainer>
  );
};

export default Home;
