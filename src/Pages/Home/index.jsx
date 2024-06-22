import Header from "../../components/Header";
import SelectModel from "../../components/SelectModelPopUp";
import Specifications from "../../components/Specifications";
import About from "../../components/About";
import Footer from "../../components/Footer";

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
          <SecundaryBannerContainer $bgColor={"#827e6c"}>
            <img className="secundaryBanner" src={SecundaryBanner} alt="" />
          </SecundaryBannerContainer>
          <About />
          <SecundaryBannerContainer $bgColor={"#EEFDD3"}>
            <img className="secundaryBanner" src={TerciaryBanner} alt="" />
          </SecundaryBannerContainer>
          <Footer />
        </BannerGradient>
      </BannerContainer>
    </HomeContainer>
  );
};

export default Home;
