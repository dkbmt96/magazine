import Card from "@components/Card";
import BlockHeader from "@components/BlockHeader";
import React from "react";
import { Card as CartType } from "@types";
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
  {
    id: "679",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    url: "/images/2.png",
    category: "Sports",
    updateAt: "Sep 01 2022",
    title: "Sanctus amit sed ipsum lorem",
  },
];

const Tranding: React.FC = () => {
  return (
    <div className="mb-4">
      <BlockHeader header="Tranding" />
      {[0, 1, 2, 3, 4].map((c) => (
        <div className="w-full mt-4" key={ITEMS[c].id}>
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
  );
};

export default Tranding
