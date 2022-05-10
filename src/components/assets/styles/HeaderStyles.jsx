import { Link, NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";

export const NavContainer = tw.nav`
relative
top-0
left-0
w-full
flex
justify-between
items-center
h-20
bg-blue-500
text-gray-50
font-medium
shadow-lg
`;

export const LogoContainer = tw(NavLink)`
md:pl-4
pl-6

`;

export const HamburgerIcon = tw.div`
px-4
cursor-pointer
md:hidden
inline-flex
text-right

`;

export const Menu = tw.ul`
absolute
w-full
h-[100vh]
top-20
left-0
flex
flex-col
bg-blue-500 md:bg-transparent

`;
export const MenuLink = tw(NavLink)`
mb-2
`;
export const ButtonSignUp = tw.div`


px-8
py-2
bg-blue-400
rounded-full
`;
export const ButtonMenuContainer = tw.div`
absolute
top-[calc(100vh - 12em)]
`;
