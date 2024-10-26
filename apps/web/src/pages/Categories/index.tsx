import Layout from "@layout/Layout";
import React from "react";
import Breadcrumb from "@components/Breadcrumb";
import Category from "./containers/Category";
import { useParams } from "react-router-dom";
import RecentlyNews from "./containers/RecentlyNews";

const Categories: React.FC = () => {
  const { params } = useParams();
  const id = params?.id || 1;

  return (
    <Layout>
      <Breadcrumb />
      <Category header="Technology" id={id} />
      <RecentlyNews />
    </Layout>
  );
};

export default Categories;
