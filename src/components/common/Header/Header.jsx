import React, { useState } from "react";
import tw from "twin.macro";
import { Link, Outlet, useLocation } from "react-router-dom";
import CapresLogo from "../../assets/images/capres.jpg";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";
import {
  ButtonMenuContainer,
  ButtonSignUp,
  HamburgerIcon,
  LogoContainer,
  Menu,
  MenuLink,
  NavContainer,
} from "../../assets/styles/HeaderStyles";
import logo from "../../assets/images/capres.jpg";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const LinkItems = [
    { name: "Inicio", link: "/" },
    { name: "Nosotros", link: "/nosotros" },
    { name: "Socios", link: "/socios" },
    { name: "Servicios", link: "/servicios" },
    { name: "Contacto", link: "/contacto" },
  ];
  const linkItems = LinkItems.map((LinkItem) => (
    <MenuLink key={LinkItem.name} to={LinkItem.link}>
      {LinkItem.name}
    </MenuLink>
  ));
  return (
    <>
      <NavContainer>
        <LogoContainer to="/">
          <img css={tw`h-16 w-auto`} src={logo} alt="Logo CAPRES" />
        </LogoContainer>
        <Menu>{linkItems}</Menu>
        <ButtonMenuContainer>
          <ButtonSignUp>Button</ButtonSignUp>
        </ButtonMenuContainer>
        <HamburgerIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </HamburgerIcon>
      </NavContainer>
    </>
  );
};

export default Header;
