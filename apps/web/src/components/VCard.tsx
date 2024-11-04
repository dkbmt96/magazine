import React from "react";
import { Card } from "../types";
import { Link } from "react-router-dom";

const VCard: React.FC<Card> = ({
  id,
  content,
  image,
  category,
  createdAt,
  title,
}) => {
  const categoryName = category?.name || '';
  return (
    <Link to={`/news/${id}`} reloadDocument>
      <div className="flex flex-col items-center bg-white mt-4 py-4 h-96">
        <div className="w-64 h-32 relative overflow-hidden">
          <img
            className="absolute top-1/2 left-1/2 w-auto -translate-y-1/2 -translate-x-1/2"
            src={image}
            alt={categoryName}
          />
        </div>
        <div className="mt-4 text-gray-700">
          <span className="text-red-500">{categoryName}</span> / {new Date(Number(createdAt)).toDateString()}
        </div>

        <div className="w-full mt-4 text-wrap px-4 max-h-16 text-ellipsis overflow-hidden text-2xl text-gray-600 font-bold">
          {title}
        </div>

        <div className="w-full mt-4 text-wrap px-4 max-h-16 text-ellipsis overflow-hidden text-gray-700">
          {content}
        </div>
      </div>
    </Link>
  );
};

export default VCard;
