import React from "react";
import { Card } from "../types";
import Button from "./Button";
import { incrementSequence } from "../utils";
import { Link } from "react-router-dom";

interface Props {
  items: Card[];
  picPerSlide?: number;
}

const Slider: React.FC<Props> = ({ items, picPerSlide = 1 }) => {
  const [index, setIndex] = React.useState(
    Array.from({ length: picPerSlide }, (_, i) => i)
  );

  const goNext = React.useCallback(() => {
    let nexId = incrementSequence(index, (items?.length || 0));
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
    <div className="w-full relative mt-4">
      <Button cls="absolute z-10 top-1/2 left-4 text-white" onClick={goNext}>
        {"<"}
      </Button>
      <div className="flex gap-4">
        {items?.length > 0 && index.map((i) => (
          <div
            className={`flex flex-col-reverse gap-4 px-8 h-96 w-full`}
            style={{
              backgroundImage: `url(${items[i]?.image})`,
            }}
          >
            <Link key={i} to={`/news/${items[i]?.id}`} reloadDocument>
              <div className="text-white p-2 bg-gray-700/50 text-xl mb-4">
                {items[i]?.title}
              </div>
            </Link>
            <div className="text-white p-2 bg-gray-700/50 text-sm">
              {`${items[i]?.category?.name}  /  ${new Date(Number(items[i]?.createdAt)).toDateString()}`}
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
