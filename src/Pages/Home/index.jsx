import Header from "../../components/Header";
import SelectModel from "../../components/SelectModelPopUp";
import Specifications from "../../components/Specifications";

import Banner from "../../assets/images/banner-mt07.jpg";

import { HomeContainer, BannerContainer, BannerGradient } from "./styles";

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
        </BannerGradient>
      </BannerContainer>
    </HomeContainer>
  );
};

export default Home;
