import React from "react";
import { Card as CartType } from "@types";
import BlockHeader from "@components/BlockHeader";
import VCard from "@components/VCard";
import Card from "@components/Card";

const ITEMS: CartType[] = [
  {
    id: "123",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    url: "/images/6.png",
    category: "Technology",
    updateAt: "Jan 01 2022",
    title: "Sanctus amit sed ipsum lorem",
  },

  {
    id: "234",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    url: "/images/7.png",
    category: "Business",
    updateAt: "Feb 01 2023",
    title: "Sanctus amit sed ipsum lorem",
  },
  {
    id: "456",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    url: "/images/3.png",
    category: "Entertaiment",
    updateAt: "Jul 02 2022",
    title: "Sanctus amit sed ipsum lorem",
  },
  {
    id: "678",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    url: "/images/2.png",
    category: "Sports",
    updateAt: "Sep 01 2022",
    title: "Sanctus amit sed ipsum lorem",
  },
];

const News: React.FC<{
  header: string;
  items: CartType[];
  picPerSlide?: number;
}> = ({ header, items }) => {
  return (
    <div className="w-full mb-4">
      <BlockHeader header={header} link="/" />
      <div className={`grid grid-cols-2 gap-4`}>
        {[0, 1].map((i) => (
          <div className={`overflow-hidden w-full`}>
            <VCard {...ITEMS[i]} />
          </div>
        ))}
        {[0, 1, 2, 3].map((c) => (
          <div className="w-full" key={ITEMS[c].id}>
            <Card
              id={ITEMS[c].id}
              url={ITEMS[c].url}
              content={ITEMS[c].content}
              category={ITEMS[c].category}
              updateAt={ITEMS[c].updateAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
