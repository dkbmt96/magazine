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

const RecentlyNews: React.FC = () => {

  const [currentPage, setCurrentPage] = React.useState(1);
  const onPageChange = React.useCallback((page: number) => {
    setCurrentPage(page)
    // return 
  }, [])
  return (
    <div className="my-4">
      <div className="grid grid-cols-2 gap-4">
        {Array(10)
          .fill(0)
          .map((v, i) => (
            <Card
              id={ITEMS.id}
              url={`${ITEMS.url.replace("1", `${(i % 6) + 1}`)}`}
              content={ITEMS.content}
              category={ITEMS.category}
              updateAt={ITEMS.updateAt}
            />
          ))}
      </div>
      <Pagination currentPage={currentPage} onPageChange={onPageChange}/>
    </div>
  );
};

export default RecentlyNews;
