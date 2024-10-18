import React from "react";
import changan from "./../../assets/images/brandoverview/changanoverview.png";
import deepal from "./../../assets/images/brandoverview/DSC00970.png";
import kaicheng from "./../../assets/images/brandoverview/IMG_9898.png";

const datas = [
  {
    id: 1,
    name: "CHANGAN",
    image: changan,
    desc: "CHANGAN Automobile, a leading enterprise and one of the four major automotive groups in China, boasting 40 years of experience in the automotive industry with a global presence that includes 12 manufacturing bases and 22 factories worldwide.",
    body: "Recognized as an iconic representative of Chinese automotive brands, CHANGAN Automobile harnesses the skills of over 17,000 engineering and technical professionals hailing from more than 30 countries.",
    footer: `These experts are strategically stationed in "Six Countries and Ten Places", including Chongqing (China), Beijing (China), Shanghai (China), Dingzhou (China), Hefei (China), Turin (Italy), Yokohama (Japan), Birmingham (United Kingdom), Detroit (United States), and Munich (Germany). This strategic placement forms a comprehensive global collaborative research and development framework with distinct regional focuses`,
  },
  {
    id: 2,
    name: "DEEPAL",
    image: deepal,
    desc: "Establish A World-Class Electric Vehicle Brand And Explore More Enticing Green Mobility.",
    body: `At this crucial moment when the automotive industry is transitioning to a new track, we witness the convergence of technology and manufacturing, bringing software-defined cars to reality, and the advent of "automotive robots". DEEPAL is firmly convinced that China is poised to deliver globally recognized Chinese brands.`,
    footer:
      "With an unwavering commitment to overcoming challenges, DEEPAL will explore digital technology and energy technology. DEEPAL aims to become a world-class electric vehicle brand in rapidly growing mainstream markets, providing more enticing green mobility experiences. Our goal is to introduce more people to the captivating experience of BEV driving, leading the way into the future.",
  },
  {
    id: 3,
    name: "KAICHENG",
    image: kaicheng,
    desc: "Kaicene Star Truck is a small commercial vehicle that's powered by an efficient 4-cylinder gasoline engine that measures at 1.2 L in displacement and is Euro 4 compliant.",
    body: "Kaicene Star is a series of trucks and microvans built and sold by Changan Automobile under the Changan brand since 1999. The Changan Star series was later repositioned under the Kaicene sub-brand of Changan Automobile.",
  },
];

function BrandOverview({ id }) {
  return (
    <div className="p-5 md:p-10">
      <p className="header-text font-changan mb-5 ">
        Brand Overview for {datas[id].name}
      </p>
      <p className="body-text">{datas[id].desc}</p>
      <div className="mt-5">
        <img src={datas[id].image} className="mx-auto" />
      </div>
      <p className="body-text my-5">{datas[id].body}</p>
      {datas[id].footer ? (
        <p className="body-text">{datas[id].footer}</p>
      ) : null}
    </div>
  );
}

export default BrandOverview;
