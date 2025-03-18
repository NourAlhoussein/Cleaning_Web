import Navbar from "../layouts/Navbar";
import HomeDemoComponent from "../components/homeDemoComponent";
import HomeServicesComponent from "../components/homeServicesComponent";
import HomeAboutUsComponent from "../components/homeAboutUsComponent";
import ClientsComponent from "../components/clientsComponent";
import TipsComponent from "../components/tipsComponent";
import ContactUsComponent from "../components/contactUsComponent";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeDemoComponent />
      <HomeServicesComponent />
      <HomeAboutUsComponent />
      <ClientsComponent />
      <TipsComponent />
      <ContactUsComponent />
      <Footer />
    </div>
  );
}
export default Home;
