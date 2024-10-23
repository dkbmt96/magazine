import React from "react";
import TradingBar from "./TradingBar";
import Logo from "../components/Logo";
import TopMenu from "./TopMenu";

const Header: React.FC = () => {
  return (
    <header>
      <TradingBar />
      <Logo />
      <TopMenu />
    </header>
  );
};

export default Header;
