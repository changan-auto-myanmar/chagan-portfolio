import abtimg from "./../../../assets/images/about/aboutUs1.png";
import abtimg2 from "./../../../assets/images/about/aboutUs2.png";
import AboutDetail from "./AboutDetail";
const AboutContent = () => {
  const showrooms = [
    {
      description: `
Myanmar Arr Thit Man Motor Company Limited is a key investment in Myanmar’s Motor industry and production sector, approved by the Myanmar Investment Commission on June 26, 2020.
Aligned with market dynamics, we adopt a market-oriented approach across production layout, management systems, operations, and talent acquisition with the total investment of 1.3 million US Dollars.`,
      image: abtimg,
    },
    {
      description: `Positioned strategically, we’re prepared by the assembly, production and distribution of both ICEs and EVs using the SKD production system. We looked forward to transitioning to CKD system, enhancing our production capabilities to meet evolving market demands.`,
      image: abtimg2,
    },
  ];
  return (
    <div className="container mx-auto mt-10 px-5 pb-[64px] lg:w-[1000px] mx-auto">
      <p className="header-text font-changan font-bold">About Us</p>
      <div className="flex flex-col gap-12">
        {showrooms.map((showroom, index) => (
          <AboutDetail key={index} showroom={showroom} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
