import React from "react";

import Logo from "../../assets/images/DESAMAHA-LOGO.png";
import { Icons } from "../../assets/images/svg/icons/icons";

import { HeaderContainer, HeaderLinks} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLinks>
        <li><a href="">Order</a></li>
        <li> <img src={Logo} alt="" /> </li>
        <li><a href="">About</a></li>
      </HeaderLinks>
    </HeaderContainer>
  );
};

export default Header;
