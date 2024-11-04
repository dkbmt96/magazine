import React from "react";
import { Link } from "react-router-dom";
import { Tag } from "../types";
import Button from "./Button";

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

const Tags: React.FC<{ title?: string; tags: Tag[], header?: any }> = ({ header, title, tags }) => {
  // const links = title === 'Categories' ? '/category/' : '/tag/'
  return (
    <div>
      {header}
      <h2 className="font-bold text-xl mb-4">{title}</h2>
      <div className="flex gap-2 flex-wrap">
        {categories.map((tag) => (
          <Link key={tag.id} to={`/categories/${tag.id}`} reloadDocument>
            <Button onClick={() => {}}>{tag.name}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags
