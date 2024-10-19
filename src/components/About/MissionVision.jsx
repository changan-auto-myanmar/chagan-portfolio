import sologran from "./../../assets/images/sologran.png";

function MissionVision() {
  return (
    <div className=" mx-auto py-6">
      <img
        src={sologran}
        className="w-full h-[150px] md:h-[400px] object-cover"
      />

      <div className="mt-10 md:px-20">
        <p className="font-changan header-text mb-5">Our Mission</p>
        <p className="body-text">
          Our mission is to deliver high-quality vehicles, exceptional service,
          and comprehensive after-sales support to customers in Myanmar. We
          prioritize customer satisfaction, continuous innovation, and the
          adoption of cutting-edge technology to ensure an unmatched experience.
          By fostering long-term relationships built on trust, we aim to
          contribute to the growth of Myanmar’s automotive industry, uphold
          international standards, and promote environmentally responsible
          practices.
        </p>
      </div>
      <div className="mt-20 md:px-20">
        <p className="font-changan header-text mb-5">Our Vision</p>
        <p className="body-text">
          We strive to go above and beyond for our clients no matter the
          challenge. We aim to deliver our very best work every single day
          across our services.To become the leading automotive destination in
          Myanmar, offering an exceptional customer experience, various vehicle
          options, and cutting-edge technology. We aim to set the standard for
          quality, trust, and innovation, driving the nation’s automotive
          industry toward a modern and sustainable future.
        </p>
      </div>
    </div>
  );
}

export default MissionVision;
