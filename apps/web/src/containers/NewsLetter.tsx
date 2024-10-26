import React from "react";
import BlockHeader from "@components/BlockHeader";

const NewsLetter: React.FC = () => {
  return (
    <div className="mb-4">
      <BlockHeader header="Newsletter" />
      <div className="mt-4 bg-white p-4">
        <div className="text-center mb-4">
          Aliqu justo et labore at eimord sea earate flose weso baiata
        </div>
        <div className="flex">
          <input className="text-xl border pl-4" placeholder="Your Email"></input>
          <button className="p-2 bg-red-700 text-white">Sign Up</button>
        </div>
        <div className="text-xs text-center text-gray-700">Sit eirmod nomury kask emnu</div>
      </div>
    </div>
  );
};

export default NewsLetter;
