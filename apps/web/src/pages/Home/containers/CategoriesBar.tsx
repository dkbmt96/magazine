import React from "react";
import BlockHeader from "@components/BlockHeader";

const ITEMS = [
  {
    id: "123",
    url: "/images/7.png",
    category: "Technology",
  },

  {
    id: "234",
    url: "/images/5.png",
    category: "Business",
  },
  {
    id: "456",
    url: "/images/3.png",
    category: "Entertaiment",
  },
  {
    id: "678",
    url: "/images/4.png",
    category: "Sports",
  },
];

const CategoriesBar: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <BlockHeader header="Categories" link="/categories"/>
      {ITEMS.map((item) => (
        <div
          key={item.id}
          className="w-full h-14 justify-center text-white text-2xl flex items-center"
          style={{
            backgroundImage: `url(${item.url})`,
          }}
        >{item.category}</div>
      ))}
    </div>
  );
};

export default CategoriesBar
