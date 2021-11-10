import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { StyledContainer } from "../styled/styledContainer";

export const MainLayout = ({ children }) => {
  return (
    <StyledContainer>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </StyledContainer>
  );
};
