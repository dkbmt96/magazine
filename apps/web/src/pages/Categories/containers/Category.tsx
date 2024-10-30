import BlockHeader from "@components/BlockHeader";
import VCard from "@components/VCard";
import React from "react";

const Category: React.FC<{ header: string; id: string, news: any[] }> = ({ header, id, news }) => {
  return (
    <div>
      <BlockHeader header={header} link={`/category/${id}`} />
      <div className="grid grid-cols-2 gap-4">
        {news?.map((item) => (
          <VCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
