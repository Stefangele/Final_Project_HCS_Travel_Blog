import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "bulma/css/bulma.min.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TravelLocationsOverviewAndWorldMap from "./TravelLocationsOverviewAndWorldMap";
import Footer from "./Footer";
import ColorBlock from "./ColorBlock";
import TravelCardDetailPage from "./TravelCardDetailPage";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ColorBlock />
      <TravelLocationsOverviewAndWorldMap />
      <Footer />
      <TravelCardDetailPage />
    </>
  );
}

export default App;
