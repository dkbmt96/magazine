import React from "react";
import Layout from "@layout/Layout";
import MiniCards from "./containers/MiniCards";
import Slider from "@components/Slider";
import CategoriesBar from "./containers/CategoriesBar";
import BlockHeader from "@components/BlockHeader";
import Category from "./containers/Category";
import News from "./containers/News";
import FollowUs from "./containers/FollowUs";
import NewsLetter from "./containers/NewsLetter";
import Tranding from "./containers/Tranding";
import Tags from "@components/Tags";

const CATEGORIES = ["Business", "Technology", "Entertainment", "Sports"];

const CATEGORIES2 = ["Popular", "Latest"];

const Home: React.FC = () => {
  return (
    <Layout>
      <MiniCards />
      <section>
        <div className="flex my-4 gap-4">
          <div className="w-2/3">
            <Slider items={[]} />
          </div>
          <div className="flex-1">
            <CategoriesBar />
          </div>
        </div>
      </section>
      <section className="feature">
        <BlockHeader header="Featured" link="/" />
        <Slider items={[]} picPerSlide={4} />
      </section>
      <section className="categories">
        <div className="grid grid-cols-2 gap-4 mt-4">
          {CATEGORIES.map((cat) => (
            <Category key={cat} header={cat} items={[]} />
          ))}
        </div>
      </section>
      <section className="info">
        <div className="flex gap-4 mt-4">
          <div className="w-2/3">
            {CATEGORIES2.map((cat) => (
              <News key={cat} header={cat} items={[]} />
            ))}
          </div>
          <div className="w-1/3">
            <FollowUs />
            <NewsLetter />
            <Tranding />
            <Tags header={<BlockHeader header="Tags" />} tags={[]}/>
          </div>
        </div>
      </section>
      <div className="flex"></div>
    </Layout>
  );
};

export default Home;
