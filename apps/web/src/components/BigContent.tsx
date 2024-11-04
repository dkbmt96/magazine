import { Card } from "@types";
import React from "react";

const BigContent: React.FC<Card> = ({
  id,
  title,
  content,
  category,
  image,
  createdAt,
}) => {
  const markup = { __html: content };
  const date = new Date(Number(createdAt)).toDateString();
  const categoryName = category?.name || '';
  return (
    <div className="bg-white mt-4">
      <div className="w-full max-h-96 overflow-hidden flex items-center">
        <img src={image} />
      </div>
      <div className="px-4">
        <div className="mt-4 text-gray-700">
          <span className="text-red-500">{categoryName}</span> / <span>{new Date(Number(createdAt)).toDateString()}111</span>
        </div>
        <div className="w-full my-4 text-wrap text-3xl text-gray-600 font-bold">
          {title}
        </div>
        <div className="pb-8" dangerouslySetInnerHTML={markup} />
      </div>
    </div>
  );
};

export default BigContent;
