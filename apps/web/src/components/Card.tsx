import React from "react";
import { Card as CartType } from "../types";
import { Link } from "react-router-dom";

const Card: React.FC<CartType> = ({
  id,
  content,
  image,
  category,
  createdAt,
  title,
}) => {
  const categoryName = category.name;
  return (
    <div className="flex items-center bg-white">
      <div className="w-16 h-16 relative overflow-hidden">
        <Link to={`/news/${id}`}>
          <img
            className="absolute top-1/2 left-1/2 w-auto h-full -translate-y-1/2 -translate-x-1/2"
            src={image}
            alt={categoryName}
          />
        </Link>
      </div>
      <div className="text-wrap flex-1 pl-4 max-h-32 text-ellipsis overflow-hidden text-sm text-gray-600 my-2">
        {createdAt && (
          <div className="">
            <div className="text-gray-700 text-xs">
              <span className="text-red-500">{categoryName}</span> /{" "}
              {new Date(Number(createdAt)).toDateString()}
            </div>
          </div>
        )}
        <Link to={`/news/${id}`}>
          <div className="font-bold pr-2 pt-2 h-12">{title}</div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
