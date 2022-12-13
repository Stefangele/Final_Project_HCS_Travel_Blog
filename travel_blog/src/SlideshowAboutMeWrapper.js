import AboutMe from "./AboutMe";
import Slideshow from "./Slideshow";

function SlideshowAboutMeWrapper() {
  return (
    <div className="columns">
      <Slideshow />
      <AboutMe />
    </div>
  );
}

export default SlideshowAboutMeWrapper;
