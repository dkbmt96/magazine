import React from "react";
import Layout from "@layout/Layout";
import MiniCards from "./containers/MiniCards";
import Slider from "@components/Slider";
import CategoriesBar from "./containers/CategoriesBar";
import BlockHeader from "@components/BlockHeader";
import Category from "./containers/Category";
import News from "./containers/News";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@redux/dataSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const { categories, news } = useSelector((state) => state.data);

  return (
    <Layout
      upperContent={
        <div>
          <MiniCards news={news} />
          <section>
            <div className="flex my-4 gap-4">
              <div className="w-2/3">
                <Slider items={news} />
              </div>
              <div className="flex-1">
                <CategoriesBar />
              </div>
            </div>
          </section>
          <section className="feature">
            <BlockHeader header="Featured" link="/" />
            <Slider items={news} picPerSlide={4} />
          </section>
          <section className="categories">
            <div className="grid grid-cols-2 gap-4 mt-4">
              {categories?.slice(0, 4)?.map((cat) => (
                <Category key={cat.id} header={cat.name} items={cat.news} />
              ))}
            </div>
          </section>
        </div>
      }
    >
      <section className="info">
        <div className="mt-4">
          {["Popular", "Latest"].map((cat) => (
            <News key={cat} header={cat} items={[]} />
          ))}
        </div>
      </section>
      <div className="flex"></div>
    </Layout>
  );
};

export default Home;
