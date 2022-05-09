import { Link, NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";

export const NavContainer = tw.nav`
absolute
w-full
flex
justify-between
items-center
h-20
bg-transparent
text-gray-300
font-medium
shadow-md
`;

export const LogoContainer = tw(NavLink)`
md:pl-4
pl-6

`;

export const HamburgerIcon = tw.div`
px-4
cursor-pointer
md:hidden
inline-block
text-right

`;

export const Menu = tw.div`
pr-8
md:pr-1
hidden
md:block
`;
export const MenuLink = tw(NavLink)`
p-4
`;
