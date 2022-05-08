import tw, { styled } from "twin.macro";

export const Container = tw.div`
flex
h-screen
w-full
items-center
justify-center
bg-gray-100
`;

export const ContentContainer = tw.div`
flex
w-full
h-full
bg-blue-800
items-center
justify-center
p-10
font-bold
text-white
`;

export const Heading = tw.h1`
text-5xl
`;
