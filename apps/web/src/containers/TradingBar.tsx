import React from "react";
import Button from "../components/Button";

const INFO = [
  "Lorem ipsum odor amet, consectetuer adipiscing elit, Aenean libero nullam sapien praesent hendrerit ut justo lobortis? Placerat magna at purus auctor; gravida parturient quam hac.",
  "Aenean libero nullam sapien praesent hendrerit ut justo lobortis?",
  "Placerat magna at purus auctor; gravida parturient quam hac.",
];

const TradingBar: React.FC = React.memo(() => {
  const [index, setIndex] = React.useState(0);

  const goNext = React.useCallback(() => {
    let nexId = index === INFO.length - 1 ? 0 : index + 1;
    setIndex(nexId);
  }, [index]);

  const goPrev = React.useCallback(() => {
    let nexId = index === 0 ? INFO.length - 1 : index - 1;
    setIndex(nexId);
  }, [index]);

  const date = React.useMemo(() => {
    return new Date().toDateString();
  }, []);

  // setInterval(() => {
  //   goNext();
  // }, 2000);
  return (
    <div className="flex gap-4 px-8 items-center bg-white">
      <span className="bg-red-500 px-2 w-fit text-white center py-2">Tranding</span>
      <div className="flex gap-4 my-2 w-fit">
        <Button onClick={goPrev}>{"<"}</Button>
        <Button onClick={goNext}>{">"}</Button>
      </div>
      <div className="info w-2/3 text-ellipsis overflow-hidden text-nowrap transition-opacity duration-500">
        {INFO[index]}
      </div>
      <div className="flex-1 text-right">{date}</div>
    </div>
  );
});

export default TradingBar;
