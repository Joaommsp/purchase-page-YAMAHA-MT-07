import PropTypes from "prop-types";

import { Icons } from "../../assets/images/svg/icons/icons";

import {
  SpecificationElement,
  SpecificationTextContent,
  Title,
  BikeName,
  VersionSellectButtons,
  SpecificationsBtn,
} from "./styles";

function Specifications(props) {
  return (
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
    </SpecificationElement>
  );
}

Specifications.propTypes = {};

export default Specifications;
