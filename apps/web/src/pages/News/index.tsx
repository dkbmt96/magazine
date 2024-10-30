import BigContent from "@components/BigContent";
import Layout from "@layout/Layout";
import React from "react";
import Comments from "./containers/Comments";
import Breadcrumb from "@components/Breadcrumb";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsById } from "@redux/dataSlice";

const ITEM = {
  id: "234",
  url: "/images/7.png",
  category: "Technology",
  updateAt: "Feb 01 2023",
  title: "Sanctus amit sed ipsum lorem",
  content: `<div class="article"> <h2>The Rise of AI in Everyday Life</h2> <img src="https://via.placeholder.com/600x300" alt="AI Image"> <p>The integration of artificial intelligence (AI) into daily life is transforming industries. From virtual assistants like Siri and Alexa to smart home devices, AI is enhancing our productivity and convenience.</p> <p>Experts predict that as AI technology advances, it will play an even larger role in sectors such as healthcare, finance, and education, leading to significant improvements in efficiency and decision-making.</p> <p class="source">Source: TechCrunch</p> </div> <div class="article"> <h2>5G Technology: What You Need to Know</h2> <img src="https://via.placeholder.com/600x300" alt="5G Technology"> <p>5G technology promises to revolutionize the way we connect to the internet, offering speeds up to 100 times faster than 4G. This advancement will enable innovations in smart cities, autonomous vehicles, and augmented reality.</p> <p>As 5G networks continue to roll out globally, consumers can expect improved connectivity and new applications that were previously unimaginable.</p> <p class="source">Source: Wired</p> </div>`,
};

const News: React.FC = () => {
  const params = useParams();
  const id = params?.id || 1;

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchNewsById({ id: id }));
  }, [dispatch, id]);
  const { currentNews } = useSelector((state) => state.data);
  return (
    <Layout upperContent={<Breadcrumb type="Technology" />}>
      {currentNews && (
        <>
          <BigContent
            id={currentNews.id}
            title={currentNews.title}
            content={currentNews.content}
            category={currentNews.category.name}
            image={currentNews.image}
            createdAt={currentNews.createdAt}
          />
          <Comments id={currentNews.id} comments={currentNews.comments} />
        </>
      )}
    </Layout>
  );
};

export default News;
