import { Card } from "@types";
import React from "react";

const BigContent: React.FC<Card> = ({
  id,
  title,
  content,
  category,
  url,
  updateAt,
}) => {
  const markup = { __html: content };

  return (
    <div className="bg-white mt-4">
      <div className="w-full">
        <img src={url} />
      </div>
      <div className="px-4">
        <div className="mt-4 text-gray-700">
          <span className="text-red-500">{category}</span> / {updateAt}
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
