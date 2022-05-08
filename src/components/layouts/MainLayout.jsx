import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../assets/styles/PagesStyles";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

const MainLayout = () => {
  return (
    <>
      <div>
        {/* <Header /> */}
        <Container>
          <Outlet />
        </Container>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainLayout;
