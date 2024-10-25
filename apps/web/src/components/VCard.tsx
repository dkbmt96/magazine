import React from "react";
import { Card } from "../types";

const VCard: React.FC<Card> = ({ content, url, category, updateAt, title }) => {
  return (
    <div className="flex flex-col items-center bg-white mt-4 py-4">
      <div className="w-64 h-32 relative overflow-hidden">
        <img
          className="absolute top-1/2 left-1/2 w-auto -translate-y-1/2 -translate-x-1/2"
          src={url}
          alt={category}
        />
      </div>
      <div className="mt-4 text-gray-700">
        <span className="text-red-500">{category}</span> / {updateAt}
      </div>
      <div className="w-full mt-4 text-wrap px-4 max-h-16 text-ellipsis overflow-hidden text-2xl text-gray-600 font-bold">
        {title}
      </div>
      <div className="w-full mt-4 text-wrap px-4 max-h-16 text-ellipsis overflow-hiddentext-gray-700">
        {content}
      </div>
    </div>
  );
};

export default VCard;
