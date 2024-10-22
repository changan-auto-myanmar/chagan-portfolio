import { useState } from "react";

import content1 from "./../../../assets/images/content.png";
import content2 from "./../../../assets/images/content2.png";
import content3 from "./../../../assets/images/content3.png";
import content4 from "./../../../assets/images/content1.png";
import Content from "./Content";

export const tabs = [
  {
    id: "1",
    label: "News",
    image: content1,
    desc: "“The Vast Ocean “ : First batch of DEEPLE handover in  Thailand",
  },
  {
    id: "2",
    label: "News",
    image: content2,
    desc: "“The Vast Ocean “ : First batch of DEEPLE handover in  Thailand",
  },
  {
    id: "3",
    label: "Events",
    image: content3,
    desc: "“The Vast Ocean “ : First batch of DEEPLE handover in  Thailand",
  },
  {
    id: "4",
    label: "Events",
    image: content4,
    desc: "“The Vast Ocean “ : First batch of DEEPLE handover in  Thailand",
  },
];

const ContentTap = ({ data }) => {
  const [activeTab, setActiveTab] = useState("All");
  const tabLabels = ["All", "News", "Events", "Promotions"];
  const [content, setContent] = useState(tabs);

  console.log(content);

  return (
    <div className="w-full mx-auto flex flex-col items-center ">
      {data && (
        <div className="my-10 w-full px-10 lg:w-[500px] flex justify-between items-center">
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
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {content.map((tab) => {
          return (
            <div className="" key={tab.id}>
              <Content tab={tab} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentTap;
