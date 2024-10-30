import React from "react";
import BlockHeader from "@components/BlockHeader";
import { Link } from "react-router-dom";
import { fetchCategories } from "@redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
const ITEMS = [
  {
    id: "123",
    url: "/images/7.png",
    category: "Technology",
  },

  {
    id: "234",
    url: "/images/5.png",
    category: "Business",
  },
  {
    id: "456",
    url: "/images/3.png",
    category: "Entertaiment",
  },
  {
    id: "678",
    url: "/images/4.png",
    category: "Sports",
  },
];

const CategoriesBar: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const { categories, loading } = useSelector((state) => state.data);
  return (
    <div className="flex flex-col gap-6">
      <BlockHeader header="Categories" link="/categories" />
      {categories?.map((item) => (
        <Link key={item.id} to={`/categories/${item.id}`}>
          <div
            className="w-full h-14 justify-center text-white text-2xl flex items-center"
            style={{
              backgroundImage: `url(${item.background})`,
            }}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesBar;
