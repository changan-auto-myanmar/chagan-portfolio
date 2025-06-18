import { useQuery } from "@tanstack/react-query";
import getNews from "../../api/home/getnews";
import ContentTap from "../NewAndEvent/ContentTap/ContentTap";
import { useEffect, useState } from "react";

function OtherNew() {
  const [news, setNews] = useState([]);
  const getNewsData = async () => {
    const data = await getNews();
    setNews(data.data.csrContents);
  };

  useEffect(() => {
    getNewsData();
  }, []);

  // console.log(news);
  return (
    <div className="lg:w-[1000px] mx-auto px-5 lg:px-0 my-[64px]">
      <p className="header-text font-bold font-changan">
        Other Interesting News
      </p>
      <div className="mt-10">
        <ContentTap data={news} />
      </div>
    </div>
  );
}

export default OtherNew;
