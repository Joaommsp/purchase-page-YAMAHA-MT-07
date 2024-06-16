import Header from "../../components/Header";
import SelectModel from "../../components/SelectModelPopUp";

import Banner from "../../assets/images/banner-mt07.jpg";

import { HomeContainer, BannerContainer, BannerGradient } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <BannerContainer $backgroundImg={Banner}>
        <BannerGradient>
          <SelectModel />
        </BannerGradient>
      </BannerContainer>
    </HomeContainer>
  );
};

export default Home;
