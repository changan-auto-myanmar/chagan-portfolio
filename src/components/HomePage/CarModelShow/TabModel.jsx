import { useState } from "react";
import changan from "./../../../assets/images/changan.png";
import kaicene from "./../../../assets/images/kaicene.png";
import deepal from "./../../../assets/images/deepal.png";
import CarCarousel from "./CarCarousel";
import { useQuery } from "@tanstack/react-query";
import getCarDetail from "../../../api/home/getCarDetails";

export const tabs = [
  {
    id: "1",
    name: "CHANGAN",
    label: (
      <div className="flex gap-2 items-center">
        <img src={changan} className="w-[64px] h-[64px] object-cover" />
        <p className="text-[24px] md:text-[18px] font-changan font-bold hidden md:block">
          CHANGAN
        </p>
      </div>
    ),
    content: [
      {
        id: "tab1",
        no: "0",
        img: "https://i.postimg.cc/NfNx5fjS/cs75.jpg",
        name: "CS 75 Plus",
      },
      {
        id: "tab2",
        no: "1",
        img: "https://i.postimg.cc/B6r2xXKQ/alv-mo2.png",
        name: "Alsvin",
      },
      {
        id: "tab3",
        no: "2",
        img: "https://i.postimg.cc/VNbPkkXW/banni.png",
        name: "Banni E Star",
      },
    ],
  },
  {
    id: "2",
    name: "KAICENG",
    label: (
      <div className="flex gap-2 items-center">
        <img src={kaicene} className="w-[64px] h-[64px] object-cover" />
        <p className="md:text-[18px] lg:text-[24px] font-changan font-bold hidden md:block">
          KAICENE
        </p>
      </div>
    ),
    content: [
      {
        id: "tab1",
        no: "3",
        img: "https://i.postimg.cc/G2JX2BbV/Changan-Startruck-Plus-2-jpg.webp",
        name: "Single Truck",
      },
      {
        id: "tab2",
        no: "4",
        img: "https://i.postimg.cc/HxJK301M/double.png",
        name: "Double Truck",
      },
    ],
  },
  {
    id: "3",
    name: "DEEPAL",
    label: (
      <div className="flex items-center">
        <img src={deepal} className="w-[64px] h-[64px] object-cover" />
        <p className="md:text-[18px] lg:text-[24px] font-changan font-bold hidden md:block">
          DEEPAL
        </p>
      </div>
    ),
    content: [
      {
        id: "tab1",
        no: "5",
        img: "https://i.postimg.cc/NQ8cdBW7/0727-03-copy-min.png",
        name: "Deepal SL03",
      },
      {
        id: "tab2",
        no: "6",
        img: "https://i.postimg.cc/8CS2cpMq/Sunset-Orange-min-min.png",
        name: "Deepal S7",
      },
    ],
  },
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { data, refetch } = useQuery({
    queryKey: ["carDetail", activeTab],
    queryFn: () => getCarDetail(tabs[activeTab].name), // Modify to accept a parameter
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10, // Cache for 10 minutes
    refetchOnWindowFocus: false,
  });

  return (
    <div className=" mx-auto flex flex-col items-center pb-[64px]">
      <div className="tabs w-full px-10 flex justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${
              activeTab === index ? "bg-white" : ""
            } py-2 px-4 w-[300px] flex justify-center focus:outline-none relative`}
            onClick={() => {
              setActiveTab(index);
              refetch();
            }}
          >
            {tab.label}
            {activeTab === index && (
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-primary"></span>
            )}
          </button>
        ))}
      </div>

      <div className="tab-content">{data && <CarCarousel tab={data} />}</div>
    </div>
  );
};

export default TabComponent;
