import "./styles/hero.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TravelLocationsOverviewAndWorldMap from "./components/TravelLocationsOverviewAndWorldMap";
import Footer from "./components/Footer";
import ColorBlock from "./components/ColorBlock";
import TravelCardDetailPage from "./components/TravelCardDetailPage";
import { Route, Switch } from "wouter";
import Contact from "./components/Contact";
import SlideshowAboutMeWrapper from "./components/SlideshowAboutMeWrapper";
import HomeParallax from "./components/HomeParallax";
import URLNotFoundPage from "./components/URLNotFoundPage";
import NewPostPage from "./components/NewPostPage";

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
        <Route parth="/new" component={NewPostPage} />
        <Route>
          <URLNotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
