import Layout from "@layout/Layout";
import React from "react";
import Breadcrumb from "@components/Breadcrumb";
import Category from "./containers/Category";
import { useParams } from "react-router-dom";
import RecentlyNews from "./containers/RecentlyNews";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsByCatId } from "@redux/dataSlice";

const Categories: React.FC = () => {
  const params = useParams();
  const id = params?.id || 1;

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchNewsByCatId({catId: id, count: 20}));
  }, [dispatch]);
  const { news, category } = useSelector((state) => state.data);
  const mainNews = React.useMemo(() => {
    return news?.slice(0, 4)
  }, [news])
  const otherNews =  React.useMemo(() => {
    return news?.slice(4, -1)
  }, [news])
  return (
    <Layout>
      <Breadcrumb type={category} />
      <Category header={category} id={id} news={mainNews}/>
      <RecentlyNews news={otherNews}/>
    </Layout>
  );
};

export default Categories;
