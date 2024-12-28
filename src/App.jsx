import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec">
      <div className="fixed top-0 -z-10 h-full w-full ">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
       bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
       rgba(255,255,255,0))]"
        ></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <div id="home">
          <Hero />
        </div>

        <div id="About">
          <About />
        </div>

        <Technologies />

        <div id="Experience">
          <Experience />
        </div>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
