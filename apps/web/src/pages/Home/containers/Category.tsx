import React from "react";
import { Card } from "@types";
import BlockHeader from "@components/BlockHeader";
import Button from "@components/Button";
import { incrementSequence } from "@utils";
import VCard from "@components/VCard";

const ITEMS: Card[] = [
  {
    id: "123",
    url: "/images/6.png",
    category: "Technology",
    updateAt: "Jan 01 2022",
    title: 'Sanctus amit sed ipsum lorem'
  },

  {
    id: "234",
    url: "/images/7.png",
    category: "Business",
    updateAt: "Feb 01 2023",
    title: 'Sanctus amit sed ipsum lorem'
  },
  {
    id: "456",
    url: "/images/3.png",
    category: "Entertaiment",
    updateAt: "Jul 02 2022",
    title: 'Sanctus amit sed ipsum lorem'
  },
  {
    id: "678",
    url: "/images/2.png",
    category: "Sports",
    updateAt: "Sep 01 2022",
    title: 'Sanctus amit sed ipsum lorem'
  },
];

const Category: React.FC<{
  header: string;
  items: Card[];
  picPerSlide?: number;
}> = ({ header, items, picPerSlide = 2 }) => {
  const [index, setIndex] = React.useState(
    Array.from({ length: picPerSlide }, (_, i) => i)
  );

  const goNext = React.useCallback(() => {
    let nexId = incrementSequence(index, 3);
    setIndex(nexId);
  }, [index]);

  return (
    <div className="w-full">
      <BlockHeader
        header={header}
        navigate={
          <div className="flex gap-4 my-2 w-fit">
            <Button onClick={goNext}>{"<"}</Button>
            <Button onClick={goNext}>{">"}</Button>
          </div>
        }
      />
      <div className={`flex gap-4`}>
        {index.map((i) => (
          <div className={`overflow-hidden w-1/${picPerSlide}`}>
            <VCard {...ITEMS[i]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
