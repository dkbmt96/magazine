import BlockHeader from "@components/BlockHeader";
import VCard from "@components/VCard";
import React from "react";

const ITEMS: Card[] = [
  {
    id: "123",
    url: "/images/6.png",
    category: "Technology",
    updateAt: "Jan 01 2022",
    title: "Sanctus amit sed ipsum lorem",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
  },
  {
    id: "234",
    url: "/images/7.png",
    category: "Technology",
    updateAt: "Feb 01 2023",
    title: "Sanctus amit sed ipsum lorem",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
  },
  {
    id: "456",
    url: "/images/3.png",
    category: "Technology",
    updateAt: "Jul 02 2022",
    title: "Sanctus amit sed ipsum lorem",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
  },
  {
    id: "678",
    url: "/images/2.png",
    category: "Technology",
    updateAt: "Sep 01 2022",
    title: "Sanctus amit sed ipsum lorem",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
  },
];

const Category: React.FC<{ header: string; id: string }> = ({ header, id }) => {
  return (
    <div>
      <BlockHeader header={header} link={`/category/${id}`} />
      <div className="grid grid-cols-2">
        {ITEMS.map((item) => (
          <VCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
