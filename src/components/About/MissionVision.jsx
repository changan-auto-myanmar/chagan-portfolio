import sologran from "./../../assets/images/sologran.png";

function MissionVision() {
  return (
    <div className=" mx-auto py-6">
      <img
        src={sologran}
        className="w-full h-[150px] md:h-[400px] object-cover"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-6">
        <div className="mt-10 text-center md:px-20">
          <p className="font-changan header-text">Our Mission</p>
          <p className="body-text">
            Build the best product that creates the most value for our
            customers, use business to inspire and implement environmentally
            friendly solutions.
          </p>
        </div>
        <div className="mt-20 text-center md:px-20">
          <p className="font-changan header-text">Our Vision</p>
          <p className="body-text">
            We strive to go above and beyond for our clients no matter the
            challenge. We aim to deliver our very best work every single day
            across our services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
