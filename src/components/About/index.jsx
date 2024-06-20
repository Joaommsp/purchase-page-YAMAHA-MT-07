import React from "react";
import PropTypes from "prop-types";

import GalleryImage01 from "../../assets/images/gallery1.png";
import GalleryImage02 from "../../assets/images/gallery2.png";
import GalleryImage03 from "../../assets/images/gallery3.png";

import { AboutContainer } from "./styles";

function About(props) {
  return (
    <AboutContainer>
      <div className="aboutTheme">
        <div className="aboutThemeMain">
          <span className="aboutThemeTitle">TECHNOLOGY</span>
          <h2 className="aboutThemeEmphasis">FROM THE TRACKS TO THE STREETS</h2>
        </div>
        <div className="aboutThemeTextContainer">
          <p className="aboutThemeText">
            With the same architecture and operation as the MotoGP Yamaha YZR-M1
            engines, the 689 cc twin-cylinder Crossplane engine offers
            breathtaking acceleration with immediate response
          </p>
        </div>
      </div>
      <div className="galleryTheme">
        <img className="galleryImage" src={GalleryImage02} alt="" />
        <img className="galleryImage" src={GalleryImage03} alt="" />
        <img className="galleryImage" src={GalleryImage01} alt="" />
      </div>
    </AboutContainer>
  );
}

About.propTypes = {};

export default About;
