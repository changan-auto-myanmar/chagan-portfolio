import { useState } from "react";

import content1 from "./../../../assets/images/news/depelNew.jpg";
import content3 from "./../../../assets/images/news/newsow.jpg";
import Content from "./Content";

export const tabs = [
  {
    id: "1",
    label: "News",
    image: content1,
    date: "01/10/2024",
    title: "The 'Vast Ocean': First Batch of the DEEPAL Handover in Thailand",
    desc: `The first horn of the new year remains vivid in memory, marking the commencement of the first user delivery event in Thailand.On January 10th, CHANGAN Automotive hosted the first DEEPAL L07 and DEEPAL S07 owner delivery ceremony at Asiatique the Riverfront in Bangkok under the theme "Touch The Future: Drive With DEEPAL", with more than 50 owner representatives present at the delivery site. From this day forward, CHANGAN Automotive officially initiates comprehensive deliveries in the Thai market.Reflecting on CHANGAN Automotive's entry into Thailand, the journey started in August 2023 with the official establishment of three entities in the country. CHANGAN's significant milestones included the groundbreaking ceremony at the Loyong factory on November 8th, the brand launch press conference on November 27th, and the successful market debut of DEEPAL twin stars at the Thailand International Auto Expo on November 29th. Fast forward to January 10, 2024, when the products were delivered to Thai users, CHANGAN Thailand has been moving forward diligently, determined to live up to the expectations of Thai users for both CHANGAN Automotive and DEEPAL.At the delivery site, Shen Xinghua, General Manager of CHANGAN SEA Business Unit, CHANGAN Auto Sales (Thailand) Co., Ltd. conveyed the message of "Delivery is a commitment." this is not only an indication of gratitude to users for choosing and trusting CHANGAN but also a commitment from CHANGAN Thailand to provide excellent service to the vast number of Thai users. The delivery event not only featured thoughtful "surprises" for the first batch of car owners but also aimed to use the ceremonial setting to establish the product as a means of communication between CHANGAN Automotive and its users. CHANGAN promises to continue actively listening to users' feedback and, together with the broader Thai user community, embrace quality, innovation, and collectively embark on a new chapter of a splendid life!.CHANGAN Thailand is currently accelerating its channel development in the country, striving to provide Thai users with upscale and comfortable experiential spaces. While showcasing the futuristic DEEPAL technology, the company is committed to ensuring professional service support, guaranteeing an exceptional car ownership experience that exceeds every user's expectations. CHANGAN's sales and service network in Thailand already spans key provinces such as Bangkok, Chiang Mai, Chonburi, and Chiang Rai. The plan for 2024 includes expanding this network to 80-100 sales and service outlets, maintaining a user-centric approach and delivering efficient, prompt service experiences.CHANGAN Automobile will continue its mission to "Lead the Auto Culture for A Better Life", further deepening its global strategy through The Vast Ocean Plan. The company aims to share its high-quality products and services with users worldwide, collaboratively creating a better future with a global community of users!
`,
  },
  {
    id: "2",
    label: "Events",
    image: content3,
    date: "04/7/2024",
    title: "Deepal Brand Launching အခမ်းအနားမှ ပုံရိပ်များ",
    desc: `ဇွန်လ (၃၀) ရက်နေ့ Novotel Hotel မှာ ကျင်းပပြုလုပ်ခဲ့တဲ့ Deepal Brand Launching Event မှ ပုံရိပ်များကို တင်ဆက်ပေးလိုက်ပါတယ်။ အဆိုပါပွဲမှာ မြန်မာ့ EV လောကကို နောက်တစ်ဆင့်မြှင့်တင်ပေးသွားမဲ့ Luxury EV Brand သစ် Deepal ရဲ့ Next Generation EV တွေဖြစ်တဲ့ Sedan type SL03 နဲ့ mid-size SUV type S7 product များကို မိတ်ဆက်သွားခဲ့ပြီး အဆိုတော် အောင်ထက်နှင့် နီနီခင်ဇော်တို့မှ တေးသီချင်းများစွာဖြင့် သီဆိုဖျော်ဖြေခဲ့ကြပါတယ်။
Deepal ဟာ Giant Company ကြီးတွေဖြစ်ကြတဲ့ ကားကုမ္ပဏီ Changan , Huawei နဲ့ Battery ကုမ္ပဏီကြီး CATL တို့ရဲ့ ပေါင်းစပ်မှုလက်ရာဖြစ်ပြီး Sedan type SL03 အနေနဲ့ max range 705 km CLTC ၊ SUV S7 အနေနဲ့ max range 620 km CLTC အထိ မောင်းနှင်နိုင်မှာပဲဖြစ်ပါတယ်။ 
အထူးအားသာ‌ချက်တွေအနေနဲ့ Smart card နဲ့ unlock လုပ်နိုင်တဲ့ Keyless Entry၊ Frameless door ၊ Electric door handle ၊ ရှေ့ဘက်မှာ ပစ္စည်းထည့်နိုင်တဲ့ Front cargo space ‌ပါရှိလာခြင်းနဲ့အတူ AR-HUD စနစ်တွေ ပါရှိလာမှာပဲဖြစ်ပါတယ်။`,
  },
];

const ContentTap = ({ data }) => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tabs.map((tab) => {
          if (activeTab === "All" || activeTab === tab.label) {
            return (
              <div className="" key={tab.id}>
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
