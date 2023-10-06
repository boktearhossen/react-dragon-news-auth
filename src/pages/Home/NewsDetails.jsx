import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNave from "../shared/RightSideNav/RightSideNave";
import { useEffect, useState } from "react";

const NewsDetails = () => {
  const [singleNews, setSngleNews] = useState([]);
  const { id } = useParams();
  const newsData = useLoaderData();
  console.log(newsData);

  useEffect(() => {
    const findNewsData = newsData?.find((news) => news._id === id);
    setSngleNews(findNewsData);
    console.log(findNewsData);
  }, [id, newsData]);

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>



      <div className="grid grid-cols-4 mt-6 gap-10">
        {/* left sight */}
        <div className="mt-7 col-span-3">
          <h2 className="card-title">{singleNews.title}</h2>
          <div className="">
            <img src={singleNews.image_url} alt="" className="rounded-xl" />
          </div>
          <div className=" ">
            <img className="w-[60px] h-[60px] rounded-full" src={singleNews?.author?.img} alt="" />
            <h2  className="text-3xl">{singleNews?.author?.name}</h2>
            <h2  className="text-xl">Published: {singleNews?.author?.published_date}</h2>
            <p className="mt-4">
              {singleNews?.details}
            </p>
          </div>
        </div>
{/* right site */}
        <div className="col-span-1">
          <RightSideNave></RightSideNave>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
