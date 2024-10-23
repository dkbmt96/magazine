import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "/logo.png";

const Logo: React.FC = () => {
  return (
    <div className="w-full py-4 px-8">
      <Link to={"/"}>
        <img width={244} src={MainLogo} className="logo" alt="Main logo" />
      </Link>
    </div>
  );
};

export default Logo;
