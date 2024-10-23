import React from "react";
import Layout from "../layout/Layout";
import MiniCards from "../containers/MiniCards";

const Home: React.FC = () => {
  return (
    <Layout>
      <MiniCards />
      <div className="flex"></div>
    </Layout>
  );
};

export default Home;
