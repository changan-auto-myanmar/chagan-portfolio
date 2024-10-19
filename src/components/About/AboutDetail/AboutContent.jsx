import abtimg from "./../../../assets/images/aboutdetail1.png";
import abtimg2 from "./../../../assets/images/aboutdetail2.png";
import AboutDetail from "./AboutDetail";
const AboutContent = () => {
  const showrooms = [
    {
      description: ` 
As one of the top four automobile groups in China and the top selling domestic Chinese automotive brand, Changan Automobile boasts an industrial history stretching back 157 years. With 35 years of experience in building and selling passenger vehicles, Changan is an early leader in the Chinese auto industry.`,
      image: abtimg,
    },
    {
      description: `“The Changan group dates back to the Westernization Movement that took place at the end of Qing Dynasty (1636-1912). In November 1862, Li Hongzhang (1823-1901), a Chinese politician, general, and diplomat, founded China's first western style engineering firm, and the beginnings of what has become Changan Automobile.”`,
      image: abtimg2,
    },
  ];
  return (
    <div className="container mx-auto mt-10 p-6">
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
