import Logo from "../../assets/images/yamahaLogo.png";
import { Icons } from "../../assets/images/svg/icons/icons";

import { HeaderContainer, HeaderLinks } from "./styles";

const Header = () => {
  const openMenu = () => {
    let menu = document.querySelector(".menu");

    menu.style.display == "none"
      ? (menu.style.display = "flex") 
      : (menu.style.display = "none");
  };

  return (
    <HeaderContainer>
      <img className="logo" src={Logo} alt="" />{" "}
      <HeaderLinks className="menu">
        <li>
          <a className="homeLink" href="">
            Home
          </a>
        </li>
        <li>
          <a href="#">Order</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <img src={Icons.SearchIcon} alt="" />
        </li>
        <li>
          <img src={Icons.ShopBagIcon} alt="" />
        </li>
      </HeaderLinks>
      <button className="menuMobileBtn" onClick={() => openMenu()}>
        <img src={Icons.MenuIcon} alt="" />
      </button>
    </HeaderContainer>
  );
};

export default Header;
