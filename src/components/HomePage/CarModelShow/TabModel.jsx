import { useState } from "react";
import changan from "./../../../assets/images/changan.png";
import kaicene from "./../../../assets/images/kaicene.png";
import deepal from "./../../../assets/images/deepal.png";
import CarCarousel from "./CarCarousel";
import car1 from "./../../../assets/images/正侧 fn.png";
import car2 from "./../../../assets/images/car.png";
import car3 from "./../../../assets/images/car2.png";

export const tabs = [
  {
    id: "1",
    label: (
      <div className="flex gap-2 items-center">
        <img src={changan} className="w-[35px] h-[35px]" />
        <p className="text-[14px] font-changan font-bold">CHANGAN</p>
      </div>
    ),
    content: [
      {
        id: "tab1",
        img: car1,
        name: "CS 75",
      },
      {
        id: "tab2",
        img: car1,
        name: "CS 75 Plus",
      },
    ],
  },
  {
    id: "2",
    label: (
      <div className="flex gap-2 items-center">
        <img src={kaicene} className="w-[35px] h-[35px]" />
        <p className="text-[14px] font-changan font-bold">KAICENE</p>
      </div>
    ),
    content: [
      {
        id: "tab1",
        img: car2,
        name: "CS 95",
      },
      {
        id: "tab2",
        img: car2,
        name: "CS 95 Plus",
      },
    ],
  },
  {
    id: "3",
    label: (
      <div className="flex gap-2 items-center">
        <img src={deepal} className="w-[35px] h-[35px]" />
        <p className="text-[14px] font-changan font-bold">DEEPAL</p>
      </div>
    ),
    content: [
      {
        id: "tab1",
        img: car3,
        name: "CS 45",
      },
      {
        id: "tab2",
        img: car3,
        name: "CS 45 Plus",
      },
    ],
  },
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="container mx-auto flex flex-col items-center pb-10">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${
              activeTab === tab.id ? "bg-white text-blue-500" : ""
            } py-2 px-4 focus:outline-none relative`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500"></span>
            )}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "" : "hidden"}`}
          >
            <CarCarousel tab={tab.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
