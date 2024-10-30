import React from "react";
import Header from "../containers/Header";
import "./layout.css";
import Footer from "../containers/Footer";
import FollowUs from "../containers/FollowUs";
import NewsLetter from "../containers/NewsLetter";
import Tranding from "../containers/Tranding";
import Tags from "@components/Tags";
import BlockHeader from "@components/BlockHeader";
import { useDispatch } from "react-redux";
import { recentlyNews } from "@redux/dataSlice";

const Layout: React.FC<{
  children: any;
  upperContent?: any;
  lowerContent?: any;
}> = ({ children, upperContent, lowerContent }) => {

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(recentlyNews());
  }, [dispatch]);

  return (
    <div className="container max-w-full w-full bg-gray-100">
      <Header />
      <div className="flex h-auto min-h-80">
        <div className="banner-left"></div>
        <div className="content flex-1">
          {upperContent}
          <div className="flex gap-4">
            <div className="w-2/3">{children}</div>
            <div className="w-1/3 mt-4">
              <FollowUs />
              <NewsLetter />
              <Tranding />
              <Tags header={<BlockHeader header="Tags" />} tags={[]} />
            </div>
          </div>
          {lowerContent}
        </div>
        <div className="banner-right"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
