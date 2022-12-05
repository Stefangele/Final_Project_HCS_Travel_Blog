import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.min.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TravelLocationsOverviewAndWorldMap from "./TravelLocationsOverviewAndWorldMap";
import Footer from "./Footer";
import ColorBlock from "./ColorBlock";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ColorBlock />
      <TravelLocationsOverviewAndWorldMap />
      <Footer />
    </>
  );
}

export default App;
