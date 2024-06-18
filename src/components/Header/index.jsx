import Logo from "../../assets/images/yamahaLogo.png";

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
