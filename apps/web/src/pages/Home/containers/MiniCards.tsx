import React from "react";
import { Card as CardType } from "@types";
import Card from "@components/Card";
import Button from "@components/Button";
import { incrementSequence } from "@utils";

interface Props {
  cards: CardType[];
}

const CARDS: CardType[] = [
  {
    id: "123",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    url: "https://images.unsplash.com/photo-1516911576578-f27f1b99bc65?w=400&h=400&fit=crop&crop=faces",
    category: "Nature",
    title: 'Sanctus amit sed ipsum lorem'
  },
  {
    id: "234",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    url: "https://images.unsplash.com/photo-1483156524046-3f48e5c8bb40?w=400&h=400&fit=crop&crop=faces",
    category: "Cityscape",
    title: 'Sanctus amit sed ipsum lorem'
  },
  {
    id: "456",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=400&fit=crop&crop=faces",
    category: "Forest",
    title: 'Sanctus amit sed ipsum lorem'
  },
  {
    id: "678",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=400&fit=crop&crop=faces",
    category: "Ocean",
    title: 'Sanctus amit sed ipsum lorem'
  },
];

const MiniCards: React.FC<{news: any}> = ({news}) => {
  let cards = CARDS; // Will fetch later
  const [index, setIndex] = React.useState([0, 1, 2]);
  
  const goNext = React.useCallback(() => {
    let nexId = incrementSequence(index, 3);
    setIndex(nexId);
  }, [index]);

  return (
    <div className="flex gap-4 mt-4 relative">
      <Button cls="absolute z-10 top-1/4 left-4" onClick={goNext}>{"<"}</Button>
      {index.map((c) => (
        <div className="w-1/3" key={CARDS[c].id}>
          <Card
            id={CARDS[c].id}
            url={CARDS[c].url}
            content={CARDS[c].content}
            category={CARDS[c].category}
          />
        </div>
      ))}
      <Button cls="absolute z-10 right-4 top-1/4" onClick={goNext}>{">"}</Button>
    </div>
  );
};

export default MiniCards;
