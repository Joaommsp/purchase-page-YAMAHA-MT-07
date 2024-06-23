import RakuzanLogo from "../../assets/images/rakuzan-logo.png";
import { Icons } from "../../assets/images/svg/icons/icons";

import { FooterContainer } from "./styles";

function Footer(props) {
  return (
    <FooterContainer>
      <img className="logo" src={RakuzanLogo} alt="" />
      <div className="footerSections">
        <div className="footerSection">
          <span className="footerSectionTitle">Products</span>
          <a href="#">
            <span className="footerSectionlink">Bikes</span>
          </a>
          <a href="#">
            <span className="footerSectionlink">Acessories</span>
          </a>
          <a href="#">
            <span className="footerSectionlink">Wheels</span>
          </a>
          <a href="#">
            <span className="footerSectionlink">Helmets</span>
          </a>
        </div>
        <div className="footerSection">
          <span className="footerSectionTitle">About US</span>
          <a href="#">
            <span className="footerSectionlink">Bikes</span>
          </a>
          <a href="#">
            <span className="footerSectionlink">Acessories</span>
          </a>
          <a href="#">
            <span className="footerSectionlink">Wheels</span>
          </a>
          <a href="#">
            <span className="footerSectionlink">Helmets</span>
          </a>
        </div>
        <div className="footerSection">
          <span className="footerSectionTitle">Resources</span>
          <a href="#">
            <span className="footerSectionlink">Bikes</span>
          </a>
          <a href="#">
            <span className="footerSectionlink">Acessories</span>
          </a>
          <a href="#">
            <span className="footerSectionlink">Wheels</span>
          </a>
          <a href="#">
            <span className="footerSectionlink">Helmets</span>
          </a>
        </div>
        <div className="footerSection">
          <span className="footerSectionTitle">Get in Touch</span>
          <a href="#">
            <span className="footerSectionlink">Bikes</span>
          </a>
          <a href="#">
            <span className="footerSectionlink">Acessories</span>
          </a>
          <div className="socialLinks">
            <a href="">
              <img src={Icons.FacebookIcon} alt="" />
            </a>
            <a href="">
              <img src={Icons.TwitterIcon} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/joaomarcosmsp/"
              target="_blank"
            >
              <img src={Icons.LinkedinIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
      <span className="atribuiton">
        developed by<strong> João Marcos</strong> and for non-commercial
        purposes, all rights belong to the official brand
      </span>
    </FooterContainer>
  );
}

Footer.propTypes = {};

export default Footer;
