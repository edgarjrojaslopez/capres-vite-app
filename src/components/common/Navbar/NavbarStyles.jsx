import { NavLink } from "react-router-dom";
import tw from "twin.macro";

export const Container = tw.div`
w-full
h-auto
bg-blue-500
items-center
`;

export const Wrapper = tw.div`
w-full
flex
flex-wrap
justify-between
items-center
m-auto
`;

export const LogoContainer = tw.div`
ml-[0.5rem]
py-2

`;

export const Menu = tw.ul`
h-full
flex
justify-between
list-none
`;

export const MenuItem = tw.li`
h-full
`;

export const MenuItemLink = tw(NavLink)`
flex
justify-center
items-center
h-full
py-[0.5rem]
px-[1.5rem]
text-blue-100
font-medium
text-lg
cursor-pointer
duration-200
ease-in

hover:text-white
hover:duration-200
hover:ease-in



`;
