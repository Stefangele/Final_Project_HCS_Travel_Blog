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
          </>
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/cities/:id">
          {(params) => <TravelCardDetailPage id={params.id} />}
        </Route>
        <Route>404 page</Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
