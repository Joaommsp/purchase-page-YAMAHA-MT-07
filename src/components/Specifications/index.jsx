import PropTypes from "prop-types";

import { Icons } from "../../assets/images/svg/icons/icons";
import Gallery from "../../assets/images/gellery/exportGallery";
import MtLogo from "../../assets/images/mtLogo.png";

import {
  SpecificationElement,
  SpecificationTextContent,
  Title,
  BikeName,
  VersionSellectButtons,
  SpecificationsBtn,
  GalleryContainer,
  BikeData,
} from "./styles";

function Specifications(props) {
  return (
    <>
      <SpecificationElement>
        <SpecificationTextContent>
          <Title>MASTER OF TORQUE</Title>
          <BikeName>MT-07</BikeName>
          <VersionSellectButtons>
            <button className="versionBtn">2024</button>
            <button className="versionBtn slect">2025</button>
          </VersionSellectButtons>
          <SpecificationsBtn>
            <span>view specifications</span>
            <img src={Icons.ArrowRightShort} alt="" />
          </SpecificationsBtn>
        </SpecificationTextContent>
        <GalleryContainer>
          <div className="gallery">
            <img className="galleryImage" src={Gallery.image02} alt="" />
            <img className="galleryImage" src={Gallery.image03} alt="" />
            <img className="galleryImage" src={Gallery.image01} alt="" />
          </div>
        </GalleryContainer>
      </SpecificationElement>
      <BikeData>
        <div className="bikeDataText">
          <h2 className="bikeDataTitle">
            FIND YOUR<strong> MYSTERIOUS SIDE</strong> MT-07
          </h2>
          <p className="bikeDataDescription">
            MT-07 Since its launch, with over 160,000 units sold, the MT-07
            ranks number 1 in its class. With a 690cc CP2 engine, generous
            torque, compact and nimble chassis and excellent flexibility, it`s
            impossible not to fall in love with Yamaha`s best-selling Hyper
            Naked model. Show less
          </p>
          <div className="statsContainer">
            <div className="stat">
              <span className="statValue">689cc</span>
              <span className="statName">Capacity</span>
            </div>
            <div className="stat">
              <span className="statValue">689cc</span>
              <span className="statName">Capacity</span>
            </div>
            <div className="stat">
              <span className="statValue">689cc</span>
              <span className="statName">Capacity</span>
            </div>
          </div>
        </div>
        <div className="logoMtContainer">
          <img className="logoMT" src={MtLogo} alt="Logo Master of Torque" />
        </div>
      </BikeData>
    </>
  );
}

Specifications.propTypes = {};

export default Specifications;
