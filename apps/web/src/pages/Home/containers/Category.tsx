import React from "react";
import { Card } from "@types";
import BlockHeader from "@components/BlockHeader";
import Button from "@components/Button";
import { incrementSequence } from "@utils";
import VCard from "@components/VCard";

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
      <div className={`grid grid-cols-${picPerSlide} gap-4`}>
        {index.map((i) => (
          <div className={`overflow-hidden`}>
            <VCard {...items[i]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
