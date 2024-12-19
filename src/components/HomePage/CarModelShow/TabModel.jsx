import { useState } from "react";
import changan from "./../../../assets/images/changan.png";
import kaicene from "./../../../assets/images/kaicene.png";
import deepal from "./../../../assets/images/deepal.png";
import CarCarousel from "./CarCarousel";
// import { motion } from "framer-motion";

export const carData = [
  {
    id: 0,
    img: "https://i.postimg.cc/15SgRtJ4/CS75-Plus-Ga1.jpg",
    name: "CS 75 Plus",
    gallery: [
      "https://i.postimg.cc/15SgRtJ4/CS75-Plus-Ga1.jpg",
      "https://i.postimg.cc/y6cgz9hw/CS75-Plus-Ga2.jpg",
      "https://i.postimg.cc/fycJjnTw/CS75-Plus-Ga3.jpg",
      "https://i.postimg.cc/t4S7zzyV/CS75-Plus-Ga4.jpg",
      "https://i.postimg.cc/Gp4tgshg/CS75-Plus-Ga5.jpg",
      "https://i.postimg.cc/T3Ypms86/CS75-Plus-Ga6.jpg",
    ],
    interier: [
      "https://i.postimg.cc/sXZLJGvM/CS75-Plus-In1.jpg",
      "https://i.postimg.cc/FHDwFQMH/CS75-Plus-In2.jpg",
      "https://i.postimg.cc/hGYwx1PF/CS75-Plus-In3.jpg",
      "https://i.postimg.cc/vmTkcNyL/CS75-Plus-In4.jpg",
      "https://i.postimg.cc/7ZxpyLQR/CS75-Plus-In5.jpg",
      "https://i.postimg.cc/1RFxG2qv/CS75-Plus-In6.jpg",
      "https://i.postimg.cc/FsXMDpbN/CS75-Plus-In8.jpg",
      "https://i.postimg.cc/tCbchTyg/CS75-Plus-In12.png",
    ],
    exterier: [
      "https://i.postimg.cc/GhgZrKP0/CS75-Plus-Ex1.jpg",
      "https://i.postimg.cc/BQnddkKc/CS75-Plus-Ex2.jpg",
      "https://i.postimg.cc/Qjt3P9gG/CS75-Plus-Ex3.jpg",
      "https://i.postimg.cc/9Q4sf91D/CS75-Plus-Ex4.jpg",
      "https://i.postimg.cc/BvHyTGrs/CS75-Plus-Ex5.jpg",
      "https://i.postimg.cc/hjnYM5nm/CS75-Plus-Ex6.jpg",
      "https://i.postimg.cc/pTB6SJV6/CS75-Plus-Ex7.jpg",
    ],
  },
  {
    id: 1,
    img: "https://i.postimg.cc/7PQZtps0/alv-in1.jpg",
    name: "Alsvin",
    interier: [
      "https://i.postimg.cc/7PQZtps0/alv-in1.jpg",
      "https://i.postimg.cc/7hcPC2Gm/alv-in2.jpg",
      "https://i.postimg.cc/CLBL3mXt/alv-in3.jpg",
      "https://i.postimg.cc/L93qDQF3/alv-in4.jpg",
      "https://i.postimg.cc/0Nf8Y3K6/alv-in5.jpg",
      "https://i.postimg.cc/VN1fb1vQ/alv-in6.jpg",
      "https://i.postimg.cc/T3n2whRJ/alv-in7.png",
      "https://i.postimg.cc/28s8rnf5/alv-in8.png",
    ],
  },
  {
    id: 2,
    img: "https://i.postimg.cc/Y07HVBGf/banni-Gallary1.jpg",
    name: "Alsvin",
    gallery: [
      "https://i.postimg.cc/Y07HVBGf/banni-Gallary1.jpg",
      "https://i.postimg.cc/PtFqfLnY/banni-Gallary2.jpg",
      "https://i.postimg.cc/BbC0f72W/banni-Gallary3.jpg",
      "https://i.postimg.cc/jjGKH7R1/banni-Gallary4.jpg",
      "https://i.postimg.cc/kXnCv9d7/banni-Gallary5.jpg",
      "https://i.postimg.cc/XYP0WCBv/banni-Gallary6.jpg",
      "https://i.postimg.cc/CLmgvtFk/banni-Gallary7.jpg",
      "https://i.postimg.cc/cLCNPmHj/banni-Gallary8.jpg",
    ],
  },
  {
    id: 3,
    img: "https://i.postimg.cc/J0v4HFhy/D201-1-min.jpg",
    name: "Single Truck Car",
    exterier: [
      "https://i.postimg.cc/DfbK6Q66/57024af7f281d.jpg",
      "https://i.postimg.cc/MWDZfY3j/57024afd5ba17.jpg",
      "https://i.postimg.cc/6qRJQwqg/57024b03a5762.jpg",
      "https://i.postimg.cc/13KS69BZ/57024b066ef87.jpg",
      "https://i.postimg.cc/MGP8PdgP/57024b09e3ddd.jpg",
    ],
    gallery: [
      "https://i.postimg.cc/KzmKmCKx/KAICENE-BROUCHER-Eidt.jpg",
      "https://i.postimg.cc/xdDJ4Xnk/truck-banner.jpg",
      "https://i.postimg.cc/J0v4HFhy/D201-1-min.jpg",
    ],
    interier: [
      "https://i.postimg.cc/6QyjY166/single-In1.jpg",
      "https://i.postimg.cc/QdNnWdRT/single-In2.jpg",
      "https://i.postimg.cc/rp3hbCz1/single-In3.jpg",
      "https://i.postimg.cc/vZP27dsS/single-In4.jpg",
    ],
  },
  {
    id: 4,
    img: "https://s.alicdn.com/@sc04/kf/H94693179dbdd4334b035094420034cb7j.jpg_720x720q50.jpg",
    name: "Double Truck",
    exterier: [
      "https://i.postimg.cc/nr7sGmPc/CHANGAN-MS-201-PICK-UP-DC-AC-CD-34-DELANTERO-IZQUIERDO-1070x680px.jpg",
      "https://i.postimg.cc/Kz134w7T/CHANGAN-MS-201-PICK-UP-DC-AC-CD-34-TRASERO-DERECHO-1070x680px.jpg",
      "https://i.postimg.cc/NMZ9XDbz/CHANGAN-MS-201-PICK-UP-DC-AC-CD-COSTADO-DERECHO-1070x680px.jpg",
      "https://i.postimg.cc/G3ssR0mw/doble-cabina.jpg",
    ],
    gallery: ["https://i.postimg.cc/j5NT241c/IMG-9898-min.jpg"],
    interier: [
      "https://i.postimg.cc/6QyjY166/single-In1.jpg",
      "https://i.postimg.cc/QdNnWdRT/single-In2.jpg",
      "https://i.postimg.cc/rp3hbCz1/single-In3.jpg",
      "https://i.postimg.cc/vZP27dsS/single-In4.jpg",
    ],
  },
  {
    id: 5,
    img: "https://i.postimg.cc/NFXWc6sD/XMJ-1101-min.jpg",
    name: "Deepal SL03",
    color: [
      {
        id: 1,
        image: "https://i.postimg.cc/05mHFz17/Eclipse-Black-min.png",
        color: "#000000",
        name: "Eclipse Black",
      },
      {
        id: 2,
        image: "https://i.postimg.cc/4dyBW3bH/Lunar-Grey-min.png",
        color: "#A09E9A",
        name: "Lunar Grey",
      },
      {
        id: 3,
        image: "https://i.postimg.cc/4dYjmP00/Nebula-Green-min.png",
        color: "#009b77",
        name: "Nebula Green",
        scale: "120",
      },
      {
        id: 4,
        image: "https://i.postimg.cc/Dyvd60vv/Comet-White-min-1.png",
        color: "#fff",
        name: "Comet White",
        scale: "105",
      },
    ],
    exterier: [
      "https://i.postimg.cc/WN2xWZMs/JXY-0331-L-min.jpg",
      "https://i.postimg.cc/NMMJg14T/JXY-0646-L-min.jpg",
      "https://i.postimg.cc/kGRTSqLg/JXY-1440-L4-min.jpg",
      "https://i.postimg.cc/2jqYGvDV/JXY-1516-L-min.jpg",
      "https://i.postimg.cc/pVr4xtG7/Wechat-IMG524-L5-min.jpg",
    ],
    interier: [
      "https://i.postimg.cc/DwGKhKZF/min.jpg",
      "https://i.postimg.cc/pV0vYZ4N/731-min.jpg",
      "https://i.postimg.cc/vHcsPnw4/min.jpg",
      "https://i.postimg.cc/kXzdL57f/min.jpg",
      "https://i.postimg.cc/LsMF60YP/min.jpg",
      "https://i.postimg.cc/1zchgcwj/731-min.jpg",
      "https://i.postimg.cc/xCtw5fsG/81gai-min.jpg",
      "https://i.postimg.cc/FrVN1mxH/8-1gai-min.jpg",
      "https://i.postimg.cc/8cYq8ygj/min.jpg",
      "https://i.postimg.cc/CM6yfKnS/728-min.jpg",
      "https://i.postimg.cc/YS7TwGZf/gai-min.jpg",
      "https://i.postimg.cc/28PP2Xxt/min.jpg",
      "https://i.postimg.cc/k5yzMMdr/731-min.jpg",
      "https://i.postimg.cc/1t5T8x98/1-min.jpg",
    ],
    gallery: [
      "https://i.postimg.cc/NFXWc6sD/XMJ-1101-min.jpg",
      "https://i.postimg.cc/KYqXrcpP/1-JEH0947-L4-min.jpg",
      "https://i.postimg.cc/xdTDzN5j/1-JEH9897-L5-min.jpg",
      "https://i.postimg.cc/1t2L2CQ4/JXY-1999-L5-min.jpg",
      "https://i.postimg.cc/j5Lp8VBG/XMJ-0760-min.jpg",
      "https://i.postimg.cc/RCnrKB7t/ZFL-0472-2-min.jpg",
      "https://i.postimg.cc/zXmskc7c/ZFL-0488-2-min.jpg",
      "https://i.postimg.cc/SNWw1ftN/0706-HDR-min.jpg",
    ],
  },
  {
    id: 6,
    img: "https://i.postimg.cc/zG0WBL2v/PENG4977-min.jpg",
    name: "Deepal S7",
    color: [
      {
        id: 1,
        image: "https://i.postimg.cc/8CS2cpMq/Sunset-Orange-min-min.png",
        color: "#FD5E53",
        name: "Sunset Orange",
      },
      {
        id: 2,
        image: "https://i.postimg.cc/zvQBYbbm/Lunar-Gray-min-min.png",
        color: "#A09E9A",
        name: "Lunar Grey",
      },
      {
        id: 4,
        image: "https://i.postimg.cc/jxW1TnpL/Comet-White-min-min.png",
        color: "#fff",
        name: "Comet White",
        scale: "105",
      },
      {
        id: 4,
        image: "https://i.postimg.cc/Vvv6hBNB/Eclipse-Black-min-min.png",
        color: "#000000",
        name: "Eclipse Black",
      },
    ],
    exterier: [
      "https://i.postimg.cc/nhcj6FVJ/1-min.jpg",
      "https://i.postimg.cc/CK9RBbGh/10-min.jpg",
      "https://i.postimg.cc/T37LxzhW/2-min.jpg",
      "https://i.postimg.cc/J4QH6DLx/4-min.jpg",
      "https://i.postimg.cc/xTQb3GWq/5-min.jpg",
      "https://i.postimg.cc/Twmprh0r/7-min.jpg",
      "https://i.postimg.cc/Twmprh0r/7-min.jpg",
      "https://i.postimg.cc/q7Ntv1CD/8-min.jpg",
      "https://i.postimg.cc/0jsrZxXh/9-min.jpg",
      "https://i.postimg.cc/G3F4t8HR/S24-588-min.jpg",
      "https://i.postimg.cc/4frcmRP6/viber-image-2024-03-21-16-13-29-725-min.jpg",
      "https://i.postimg.cc/J4RGkrkk/SL6730050-1oka-1.jpg",
    ],
    interier: [
      "https://i.postimg.cc/MpFTN1r7/2-min.jpg",
      "https://i.postimg.cc/fbSLNk66/3-min.jpg",
      "https://i.postimg.cc/rFgzGB1Y/DSCF57400-min.jpg",
      "https://i.postimg.cc/vZBT00X8/min.jpg",
      "https://i.postimg.cc/cHQLv21h/min.jpg",
      "https://i.postimg.cc/T1fYg0p6/min.jpg",
      "https://i.postimg.cc/DZVzynhm/2-min.jpg",
      "https://i.postimg.cc/XqLN85Cy/min.jpg",
      "https://i.postimg.cc/ryNpcBPF/min.jpg",
      "https://i.postimg.cc/hP4tG2k8/min.jpg",
      "https://i.postimg.cc/JzG7NG4G/min.jpg",
    ],
    gallery: [
      "https://i.postimg.cc/c4Gf5G8x/01-min.jpg",
      "https://i.postimg.cc/T2Dr931N/2023062602205989-min.jpg",
      "https://i.postimg.cc/m23CvpQQ/DSCF5795-min.jpg",
      "https://i.postimg.cc/W12gTmnx/JIE-6995-min.jpg",
      "https://i.postimg.cc/zG0WBL2v/PENG4977-min.jpg",
      "https://i.postimg.cc/XqSBh9qH/min.jpg",
      "https://i.postimg.cc/yxm3zWSV/45-1-min.jpg",
      "https://i.postimg.cc/c1wn3kkV/02.jpg",
      "https://i.postimg.cc/BvbF1qRg/03.jpg",
      "https://i.postimg.cc/j5JJZMxn/kv-min.jpg",
    ],
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
