import Navbar from "../layouts/Navbar";
import AboutUsDemoComponent from "../components/aboutUsDemoComponent";
import ContactUsComponent from "../components/contactUsComponent";
import Footer from "../layouts/Footer";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <AboutUsDemoComponent />
      <ContactUsComponent />
      <Footer />
    </div>
  );
}
export default AboutUs;
