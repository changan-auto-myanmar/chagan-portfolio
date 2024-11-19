import { useState } from "react";
import changan from "./../../../assets/images/changan.png";
import kaicene from "./../../../assets/images/kaicene.png";
import deepal from "./../../../assets/images/deepal.png";
import CarCarousel from "./CarCarousel";

// Changan Car Data
// CS75 Plus
import cs75plus from "./../../../assets/CS75Plus/CarMockup/CS75Plus-Mo1.png";
// import cs75plus2 from "./../../../assets/CS75Plus/CarMockup/CS75Plus-Mo2.png";

import cs75gallary from "./../../../assets/CS75Plus/CarGallery/CS75Plus-Ga1.jpg";
import cs75gallary2 from "./../../../assets/CS75Plus/CarGallery/CS75Plus-Ga2.jpg";
import cs75gallary3 from "./../../../assets/CS75Plus/CarGallery/CS75Plus-Ga3.jpg";
import cs75gallary4 from "./../../../assets/CS75Plus/CarGallery/CS75Plus-Ga4.jpg";
import cs75gallary5 from "./../../../assets/CS75Plus/CarGallery/CS75Plus-Ga5.jpg";
import cs75gallary6 from "./../../../assets/CS75Plus/CarGallery/CS75Plus-Ga6.jpg";
import cs75gallary7 from "./../../../assets/CS75Plus/CarGallery/CS75Plus-Ga7.jpg";

import cs75inter from "./../../../assets/CS75Plus/Interior/CS75Plus-In1.jpg";
import cs75inter2 from "./../../../assets/CS75Plus/Interior/CS75Plus-In2.jpg";
import cs75inter3 from "./../../../assets/CS75Plus/Interior/CS75Plus-In3.jpg";
import cs75inter4 from "./../../../assets/CS75Plus/Interior/CS75Plus-In4.jpg";
import cs75inter5 from "./../../../assets/CS75Plus/Interior/CS75Plus-In5.jpg";
import cs75inter6 from "./../../../assets/CS75Plus/Interior/CS75Plus-In6.jpg";
import cs75inter7 from "./../../../assets/CS75Plus/Interior/CS75Plus-In7.jpg";
import cs75inter8 from "./../../../assets/CS75Plus/Interior/CS75Plus-In8.jpg";
import cs75inter9 from "./../../../assets/CS75Plus/Interior/CS75Plus-In9.jpg";
import cs75inter10 from "./../../../assets/CS75Plus/Interior/CS75Plus-In10.jpg";

import cs75ex from "./../../../assets/CS75Plus/Exterior/CS75Plus-Ex1.jpg";
import cs75ex2 from "./../../../assets/CS75Plus/Exterior/CS75Plus-Ex2.jpg";
import cs75ex3 from "./../../../assets/CS75Plus/Exterior/CS75Plus-Ex3.jpg";
import cs75ex4 from "./../../../assets/CS75Plus/Exterior/CS75Plus-Ex4.jpg";
import cs75ex5 from "./../../../assets/CS75Plus/Exterior/CS75Plus-Ex5.jpg";
import cs75ex6 from "./../../../assets/CS75Plus/Exterior/CS75Plus-Ex6.jpg";
import cs75ex7 from "./../../../assets/CS75Plus/Exterior/CS75Plus-Ex7.jpg";

// Alsvin
import alsvin from "./../../../assets/Alsvin/Mockup/alv-mo2.png";

import alvin from "./../../../assets/Alsvin/Interior/alv-in1.jpg";
import alvin2 from "./../../../assets/Alsvin/Interior/alv-in2.jpg";
import alvin3 from "./../../../assets/Alsvin/Interior/alv-in3.jpg";
import alvin4 from "./../../../assets/Alsvin/Interior/alv-in4.jpg";
import alvin5 from "./../../../assets/Alsvin/Interior/alv-in5.jpg";
import alvin6 from "./../../../assets/Alsvin/Interior/alv-in6.jpg";
import alvin7 from "./../../../assets/Alsvin/Interior/alv-in7.png";
import alvin8 from "./../../../assets/Alsvin/Interior/alv-in8.png";

import car2 from "../../../assets/CS75Plus/CarMockup/CS75Plus-Mo1.png";
import car3 from "./../../../assets/images/car2.png";
import { motion } from "framer-motion";

export const carData = [
  {
    id: 0,
    img: cs75plus,
    name: "CS 75",
    gallery: [
      cs75gallary,
      cs75gallary2,
      cs75gallary3,
      cs75gallary4,
      cs75gallary5,
      cs75gallary6,
      cs75gallary7,
    ],
    interier: [
      cs75inter,
      cs75inter2,
      cs75inter3,
      cs75inter4,
      cs75inter5,
      cs75inter6,
      cs75inter7,
      cs75inter8,
      cs75inter9,
      cs75inter10,
    ],
    exterier: [cs75ex, cs75ex2, cs75ex3, cs75ex4, cs75ex5, cs75ex6, cs75ex7],
  },
  {
    id: 1,
    img: alsvin,
    name: "Alsvin",
    interier: [alvin, alvin2, alvin3, alvin4, alvin5, alvin6, alvin7, alvin8],
  },
];

export const tabs = [
  {
    id: "1",
    label: (
      <div className="flex gap-2 items-center">
        <img src={changan} className="w-[50px] h-[50px]" />
        <p className="text-[8px] font-changan font-bold hidden md:block">
          Changan
        </p>
      </div>
    ),
    content: [
      {
        id: "tab1",
        no: "0",
        img: cs75plus,
        name: "CS 75",
      },
      {
        id: "tab2",
        no: "1",
        img: alsvin,
        name: "Alsvin",
      },
    ],
  },
  {
    id: "2",
    label: (
      <div className="flex gap-2 items-center">
        <img src={kaicene} className="w-[50px] h-[50px]" />
        <p className="text-[8px] font-changan font-bold hidden md:block">
          KAICENE
        </p>
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
      <div className="flex items-center">
        <img src={deepal} className="w-[50px] h-[50px]" />
        <p className="text-[8px] font-changan font-bold hidden md:block">
          DEEPAL
        </p>
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
            {/* Wrap CarCarousel in a motion.div */}
            <div
            // Transition duration
            >
              <CarCarousel tab={tab.content} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
