import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileDrawer from "../components/MobileDrawer/MobileDrawer";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
