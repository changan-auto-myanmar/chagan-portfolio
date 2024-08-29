import Banner from "../components/Banner";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer";
import ShowroomList from "../components/HomePage/Showroom/Showroomlist";
import contact from "./../assets/images/contactbanner.png";

function ContactUs() {
  const contactus = {
    desc: "Contact Us",
    img: contact,
  };
  return (
    <div>
      <Banner data={contactus} />
      <ContactForm />
      <ShowroomList />
      <Footer />
    </div>
  );
}

export default ContactUs;
