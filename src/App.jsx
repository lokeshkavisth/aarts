import Awards from "./components/Awards";
import Blogs from "./components/Blogs";
import Button from "./components/Button";
import Clientele from "./components/Clientele";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Legal from "./components/Legal";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Service from "./components/Service";
import Slider from "./components/Slider";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <header className="bg-[#e34234] text-white px-[3%] pb-[171px]">
        <Navbar />
        <Hero />
      </header>
      <Slider />
      <Service />
      <Work />
      <Reviews />
      <Clientele />
      <Awards />
      <Blogs />
      <Cta />
      <Footer />
      <Legal />

      <div>
        <Button
          className={
            "z-10 fixed bottom-[16px] font-bold left-auto right-[16px] bg-[#e34234]"
          }
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default App;
