import { useState } from "react";
import tw, { styled } from "twin.macro";

export const Box = tw.div`

    w-full
    h-screen
    bg-black
    flex
    justify-center
    items-center
    text-blue-300
    text-3xl

`;
function App() {
  return (
    <div className="App">
      <Box>Placeholder</Box>
    </div>
  );
}

export default App;
