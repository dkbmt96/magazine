import React from "react";
import Tags from "../components/Tags";
import BottomLogo from "../components/BottomLogo";
import QuickLinks from "../components/QuickLinks";



const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex gap-4 px-8 items-center bg-white pb-4 mt-4">
        <div className="basis-1/4">
          <BottomLogo />
        </div>
        <div className="basis-1/4">
          <Tags title="Categoies" tags={[]} />
        </div>
        <div className="basis-1/4">
          <Tags title="Tags" tags={[]} />
        </div>
        <div className="basis-1/4">
          <QuickLinks />
        </div>
      </div>
      <div className="copyright py-4 text-center"><span>&copy; 2024 Your Company Name</span></div>
    </footer>
  );
};

export default Footer;
