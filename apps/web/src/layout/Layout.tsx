import React from "react";
import Header from "../containers/Header";
import './layout.css';
import Footer from "../containers/Footer";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="container max-w-full w-full bg-gray-100">
      <Header />
      <div className="flex h-auto min-h-80">
        <div className="banner-left"></div>
        <div className="content flex-1">{children}</div>
        <div className="banner-right"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
