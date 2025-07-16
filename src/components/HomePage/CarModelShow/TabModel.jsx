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
  },
  {
    id: "2",
    name: "KAICHENG",
    label: (
      <div className="flex gap-2 items-center">
        <img src={kaicene} className="w-[64px] h-[64px] object-cover" />
        <p className="md:text-[18px] lg:text-[24px] font-changan font-bold hidden md:block">
          KAICENE
        </p>
      </div>
    ),
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
