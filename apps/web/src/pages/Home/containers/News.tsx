import React from "react";
import { Card as CartType } from "@types";
import BlockHeader from "@components/BlockHeader";
import VCard from "@components/VCard";
import Card from "@components/Card";
import { useDispatch, useSelector } from "react-redux";
import { recentlyNews } from "@redux/dataSlice";

const News: React.FC<{
  header: string;
  items: CartType[];
  picPerSlide?: number;
}> = ({ header }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(recentlyNews());
  }, [dispatch]);
  const { recentNews } = useSelector((state) => state.data);
  return (
    <div className="w-full mb-8">
      <BlockHeader header={header} link="/" />
      {recentNews?.length > 0 && (
        <div className={`grid grid-cols-2 gap-4`}>
          {[0, 1].map((i) => (
            <div className={`overflow-hidden w-full`}>
              <VCard key={recentNews[i].id} {...recentNews?.[i]} />
            </div>
          ))}
          {[0, 1, 2, 3].map((c) => (
            <div className="w-full" key={recentNews[c].id}>
              <Card {...recentNews[c]} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
