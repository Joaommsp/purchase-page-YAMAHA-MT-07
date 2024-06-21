import Header from "../../components/Header";
import SelectModel from "../../components/SelectModelPopUp";
import Specifications from "../../components/Specifications";
import About from "../../components/About";

import Banner from "../../assets/images/banner-mt07.jpg";
import SecundaryBanner from "../../assets/images/banner02.png";
import TerciaryBanner from "../../assets/images/banner03.png";

import {
  HomeContainer,
  BannerContainer,
  BannerGradient,
  SecundaryBannerContainer,
} from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <BannerContainer $backgroundImg={Banner}>
        <BannerGradient>
          <div className="selectModelModalContainer">
            <SelectModel />
          </div>
          <Specifications />
          <SecundaryBannerContainer>
            <img className="secundaryBanner" src={SecundaryBanner} alt="" />
          </SecundaryBannerContainer>
          <About />
        </BannerGradient>
      </BannerContainer>
    </HomeContainer>
  );
};

export default Home;
