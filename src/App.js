import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Coursefor from "./components/Coursefor";
import Programm from "./components/Programm";
import Regardless from "./components/Regardless";
import Tariff from "./components/Tariff";
import Walk from "./components/Walk";
import Rewievs from "./components/Rewievs";
import Video from "./components/Video";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App max-w-[1440px] mx-auto font-red-hat overflow-hidden">
      <Navbar/>
      <Hero/>
      <Coursefor/>
      <Programm/>
      <Regardless/>
      <Tariff/>
      <Walk/>
      <Rewievs/>
      <Video/>
      <Bottom/>
      <Footer/>
    </div>
  );
}

export default App;
