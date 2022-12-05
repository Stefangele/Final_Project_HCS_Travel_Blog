import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.min.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TravelLocationsOverviewAndWorldMap from "./TravelLocationsOverviewAndWorldMap";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TravelLocationsOverviewAndWorldMap />
    </>
  );
}

export default App;
