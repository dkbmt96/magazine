import Card from "@components/Card";
import BlockHeader from "@components/BlockHeader";
import React from "react";
import { useSelector } from "react-redux";

const Tranding: React.FC = () => {
  const { recentNews } = useSelector((state) => state.data);
  return (
    <div className="mb-4">
      <BlockHeader header="Tranding" />
      {recentNews.length > 0 &&
        [0, 1, 2, 3, 4].map((c) => (
          <div className="w-full mt-4" key={recentNews[c].id}>
            <Card {...recentNews[c]} />
          </div>
        ))}
    </div>
  );
};

export default Tranding;
