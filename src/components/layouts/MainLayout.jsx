import React from "react";
import { Outlet } from "react-router-dom";
import { Container, ContentContainer } from "../assets/styles/PagesStyles";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
