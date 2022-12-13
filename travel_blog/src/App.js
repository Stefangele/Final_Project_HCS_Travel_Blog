import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "bulma/css/bulma.min.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TravelLocationsOverviewAndWorldMap from "./TravelLocationsOverviewAndWorldMap";
import Footer from "./Footer";
import ColorBlock from "./ColorBlock";
import TravelCardDetailPage from "./TravelCardDetailPage";
import { Route, Switch } from "wouter";
import Contact from "./Contact";
import SlideshowAboutMeWrapper from "./SlideshowAboutMeWrapper";
import HomeParallax from "./HomeParallax";
import URLNotFoundPage from "./URLNotFoundPage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/">
          <>
            <Hero />
            <ColorBlock />
            <TravelLocationsOverviewAndWorldMap />
            <HomeParallax />
            <SlideshowAboutMeWrapper />
          </>
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/cities/:id">
          {(params) => <TravelCardDetailPage id={params.id} />}
        </Route>
        <Route>
          <URLNotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
