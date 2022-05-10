import React from "react";
import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  Wrapper,
  MenuItemLink,
} from "./NavbarStyles";
import logo from "../../assets/images/capres.jpg";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <img
            className="h-16 w-auto cursor-pointer"
            src={logo}
            alt="Logo CAPRES"
          />
        </LogoContainer>
        <Menu>
          <MenuItem>
            <MenuItemLink to="/">Inicio</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/">Nosotros</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/">Socios</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/">Servicios</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/">Contacto</MenuItemLink>
          </MenuItem>{" "}
          <button className="mr-4 px-8 py-2 hover:bg-blue-700 text-blue-50 hover:duration-400 hover:ease-in">
            Sign Up
          </button>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
