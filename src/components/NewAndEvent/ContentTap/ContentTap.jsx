import { useState } from "react";
import Content from "./Content";

const ContentTap = ({ data }) => {
  // console.log(data);
  const [activeTab, setActiveTab] = useState("All");
  const tabLabels = ["All", "News", "Events", "Promotions"];
  // const [content, setContent] = useState(tabs);

  // console.log(content);

  return (
    <div className="w-full lg:w-[1000px] px-5 sm:px-10 lg:px-0 mx-auto flex flex-col items-center ">
      <div className="my-10 w-full sm:w-auto md:px-10 flex justify-between sm:space-x-10 items-center">
        {tabLabels.map((tab, index) => (
          <button
            key={index}
            className={`text-center ${
              activeTab === tab ? "bg-white text-blue-500" : ""
            } py-2 px-4 focus:outline-none relative`}
            onClick={() => {
              setActiveTab(tab);
            }}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500"></span>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-full">
        {data.map((tab) => {
          if (activeTab === "All" || activeTab == tab.category) {
            return (
              <div className="w-full" key={tab._id}>
                <Content tab={tab} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ContentTap;
