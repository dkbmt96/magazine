import React from "react";
import { Card as CartType } from "../types";

const Card: React.FC<CartType> = ({ content, url, category, updateAt }) => {
  return (
    <div className="flex items-center bg-white">
      <div className="w-16 h-16 relative overflow-hidden">
        <img
          className="absolute top-1/2 left-1/2 w-auto h-full -translate-y-1/2 -translate-x-1/2"
          src={url}
          alt={category}
        />
      </div>
      <div className="text-wrap flex-1 pl-4 max-h-32 text-ellipsis overflow-hidden text-sm text-gray-600 my-2">
        {updateAt && (
          <div className="">
            <div className="text-gray-700 text-xs">
              <span className="text-red-500">{category}</span> / {updateAt}
            </div>
          </div>
        )}
        <div className="font-bold pr-2">{content}</div>
      </div>
    </div>
  );
};

export default Card;
