import React from "react";
import { Card as CardType } from "@types";
import Card from "@components/Card";
import Button from "@components/Button";
import { incrementSequence } from "@utils";

const MiniCards: React.FC<{ news: CardType[] }> = ({ news }) => {
  const [index, setIndex] = React.useState([0, 1, 2]);

  const goNext = React.useCallback(() => {
    let nexId = incrementSequence(index, 3);
    setIndex(nexId);
  }, [index]);

  return (
    <div className="flex gap-4 mt-4 relative">
      <Button cls="absolute z-10 top-1/4 left-4" onClick={goNext}>
        {"<"}
      </Button>
      {index.map(
        (c) =>
          news?.length > 0 && (
            <div className="w-1/3" key={news[c].id}>
              <Card {...news[c]} />
            </div>
          )
      )}
      <Button cls="absolute z-10 right-4 top-1/4" onClick={goNext}>
        {">"}
      </Button>
    </div>
  );
};

export default MiniCards;
