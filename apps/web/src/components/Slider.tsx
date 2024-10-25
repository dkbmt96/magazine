import React from "react";
import { Card } from "../types";
import Button from "./Button";
import { incrementSequence } from "../utils";

interface Props {
  items: Card[];
  picPerSlide?: number;
}

const ITEMS: Card[] = [
  {
    id: "123",
    url: "/images/5.png",
    category: "Technology",
    updateAt: "Jan 01 2022",
    title: 'Sanctus amit sed ipsum lorem'
  },

  {
    id: "234",
    url: "/images/2.png",
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
    url: "/images/4.png",
    category: "Sports",
    updateAt: "Sep 01 2022",
    title: 'Sanctus amit sed ipsum lorem'
  },
];

const Slider: React.FC<Props> = ({ item, picPerSlide = 1 }) => {
  const [index, setIndex] = React.useState(Array.from({ length: picPerSlide }, (_, i) => i));


  const goNext = React.useCallback(() => {
    let nexId = incrementSequence(index, 3);
    setIndex(nexId);
  }, [index]);

  // const goPrev = React.useCallback(() => {
  //   let nexId = index === 0 ? ITEMS.length - 1 : index - 1;
  //   setIndex(nexId);
  // }, [index]);

  // setInterval(() => {
  //   goNext();
  // }, 2000);


  return (
    <div className="w-full relative">
      <Button cls="absolute z-10 top-1/2 left-4 text-white" onClick={goNext}>
        {"<"}
      </Button>
      <div className="flex gap-4">
        {index.map((i) => (
          <div
            className={`flex flex-col-reverse gap-4 px-8 h-96 w-full`}
            style={{
              backgroundImage: `url(${ITEMS[i].url})`,
            }}
          >
            <div className="text-white p-2 bg-gray-700/50 text-xl mb-4">
              {ITEMS[i].title}
            </div>
            <div className="text-white p-2 bg-gray-700/50 text-sm">
              {`${ITEMS[i].category}  /  ${new Date(ITEMS[i].updateAt).toDateString()}`}
            </div>
          </div>
        ))}
      </div>
      <Button cls="absolute z-10 right-4 top-1/2  text-white" onClick={goNext}>
        {">"}
      </Button>
    </div>
  );
};

export default Slider;
