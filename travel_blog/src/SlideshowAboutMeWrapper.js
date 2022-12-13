import AboutMe from "./AboutMe";
import Slideshow from "./Slideshow";

function SlideshowAboutMeWrapper() {
  <div className="columns">
    <Slideshow />
    <AboutMe />
  </div>;
}

export default SlideshowAboutMeWrapper;
