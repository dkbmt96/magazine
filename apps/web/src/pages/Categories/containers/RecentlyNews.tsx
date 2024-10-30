import Card from "@components/Card";
import Pagination from "@components/Pagination";
import React from "react";

const ITEMS = {
  id: "123",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
  url: "/images/1.png",
  category: "Technology",
  updateAt: "Jan 01 2022",
  title: "Sanctus amit sed ipsum lorem",
};

const RecentlyNews: React.FC<{ news: any }> = ({ news }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const onPageChange = React.useCallback((page: number) => {
    setCurrentPage(page);
    // return
  }, []);
  return (
    <div className="my-4">
      {news?.length > 0 && (
        <>
          <div className="grid grid-cols-2 gap-4">
            {news.map((n) => (
              <Card {...n} />
            ))}
          </div>
          <Pagination currentPage={currentPage} onPageChange={onPageChange} />
        </>
      )}
    </div>
  );
};

export default RecentlyNews;
