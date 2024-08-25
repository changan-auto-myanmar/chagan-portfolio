import logo from "./../assets/images/navbar-logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo and Slogan Section */}
        <div className="mb-8 md:mb-0 md:flex-2 w-[350px]">
          <img src={logo} alt="Changan Auto Logo" />

          <p className="mt-4 text-[24px] font-semibold">
            Smart, <br />
            Your Future
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:flex-2 px-[100px]">
          <div>
            <h3 className="text-lg font-semibold mb-4">Vehicles</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Changan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  DEPILE
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  KACHAN
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  After Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Auto Repair
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Exclusive Service With Genuine Parts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Changan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News & Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us on</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  X (Former Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
