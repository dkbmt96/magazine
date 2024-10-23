import React from "react";
import { Link } from "react-router-dom";

const Links = [
  "About",
  "Advertise",
  "Privacy Policy",
  "Term & Conditions",
  "Contact",
];

const QuickLinks: React.FC = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Quick Links</h2>
      <ul className="list-disc ml-4">
        {Links.map((item) => (
          <Link to={'/'} key={item}><li>{item}</li></Link>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
