import React from "react";
import { Link } from "react-router-dom";
import { Tag } from "../types";
import Button from "./Button";

const Tags: React.FC<{ title: string; tags: Tag[] }> = ({ title, tags }) => {
  // const links = title === 'Categories' ? '/category/' : '/tag/'
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">{title}</h2>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <Link to={`/category/${tag.id}`}>
            <Button onClick={() => {}}>{tag.name}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags
