import React from "react";
import PropTypes from "prop-types";

import GalleryImage01 from "../../assets/images/gallery1.png";
import GalleryImage02 from "../../assets/images/gallery2.png";
import GalleryImage03 from "../../assets/images/gallery3.png";
import GalleryImage04 from "../../assets/images/gallery4.png";
import GalleryImage05 from "../../assets/images/gallery5.png";
import GalleryImage06 from "../../assets/images/gallery6.png";

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
        <img className="galleryImage" src={GalleryImage01} alt="" />
        <img className="galleryImage" src={GalleryImage03} alt="" />
        <img className="galleryImage" src={GalleryImage02} alt="" />
      </div>
      <div className="aboutTheme">
        <div className="aboutThemeTextContainer">
          <p className="aboutThemeText">
            The rear suspension has a shock absorber with rebound adjustment and
            9 spring compression settings, which, combined with the wide and
            ergonomic seat, provide comfort and sportiness to your riding.
          </p>
        </div>
        <div className="aboutThemeMain">
          <span className="aboutThemeTitle alignRight">CONFORT</span>
          <h2 className="aboutThemeEmphasis alignRight">
            FIND THE BEST COMBINATION
          </h2>
        </div>
      </div>
      <div className="galleryTheme noMargin">
        <img className="galleryImage" src={GalleryImage04} alt="" />
        <img className="galleryImage" src={GalleryImage05} alt="" />
        <img className="galleryImage" src={GalleryImage06} alt="" />
      </div>
    </AboutContainer>
  );
}

About.propTypes = {};

export default About;
