import Navbar from "../layouts/Navbar";
import ServicesDemoComponent from "../components/servicesDemoComponent";
import TipsComponent from "../components/tipsComponent";
import ContactUsComponent from "../components/contactUsComponent";
import Footer from "../layouts/Footer";
function OurServices() {
  return (
    <div>
      <Navbar />
      <ServicesDemoComponent />
      <TipsComponent />
      <ContactUsComponent />
      <Footer />
    </div>
  );
}
export default OurServices;
