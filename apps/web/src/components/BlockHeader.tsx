import React from "react";
import { Link } from "react-router-dom";

const BlockHeader: React.FC<{ header: string; link?: string, navigate?: any }> = ({
  header,
  link,
  navigate
}) => {
  return (
    <div className="flex justify-between h-14 items-center px-4 bg-white">
      <h2 className="text-3xl font-bold">{header}</h2>
      {link && <Link to={link}>View All</Link>}
      {navigate}
    </div>
  );
};

export default BlockHeader;
