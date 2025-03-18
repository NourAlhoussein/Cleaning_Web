import Navbar from "../layouts/Navbar";
import ContactUsDemoComponent from "../components/contactUsDemoComponent";
import ContactUsComponent from "../components/contactUsComponent";
import Footer from "../layouts/Footer";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <ContactUsDemoComponent />
      <ContactUsComponent />
      <Footer />
    </div>
  );
}
export default ContactUs;
