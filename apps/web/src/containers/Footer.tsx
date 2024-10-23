import React from "react";
import Tags from "../components/Tags";
import BottomLogo from "../components/BottomLogo";
import QuickLinks from "../components/QuickLinks";

const categories = [
  { name: "Politics", id: 0 },
  { name: "Business", id: 1 },
  { name: "Corporate", id: 2 },
  { name: "Sports", id: 3 },
  { name: "Health", id: 4 },
  { name: "Education", id: 5 },
  { name: "Science", id: 6 },
  { name: "Travel", id: 7 },
  { name: "Foods", id: 8 },
  { name: "Lifestyle", id: 9 },
  { name: "Science", id: 10 },
  { name: "Entertaiment", id: 11 },
];

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex gap-4 px-8 items-center bg-white pb-4">
        <div className="basis-1/4">
          <BottomLogo />
        </div>
        <div className="basis-1/4">
          <Tags title="Categoies" tags={categories} />
        </div>
        <div className="basis-1/4">
          <Tags title="Tags" tags={categories} />
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
