import travelCardData from "./travellocations.json";
import { Link } from "wouter";

function TravelCardDetailPage({ id }) {
  return (
    <div>
      <section class="hero is-fullheight is-primary is-bold ">
        <img
          alt={travelCardData[id]?.city}
          className="hero-background"
          src={travelCardData[id]?.image}
        />
        <div class="hero-body">
          <Link href="/">
            <button class="button is-danger is-focused is-align-self-flex-start">
              Go Back
            </button>
          </Link>
          <div class="container">
            <h1 class="title is-size-1">{travelCardData[id]?.blogposttitel}</h1>
            <h2 class="subtitle">{travelCardData[id]?.city}</h2>
            <figure class="image is-128x128">
              <img
                alt={travelCardData[id]?.country}
                className="is-rounded"
                src={travelCardData[id]?.flag}
              />
            </figure>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">{travelCardData[id]?.city}</h2>
          <h3 class="subtitle">{travelCardData[id]?.blogtext}</h3>
        </div>
      </section>
      <section class="level is-mobile pb-6">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Traveldate</p>
            <p class="title is-size-5">{travelCardData[id]?.traveldate}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Country</p>
            <p class="title is-size-5">{travelCardData[id]?.country}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Continent</p>
            <p class="title is-size-5">{travelCardData[id]?.continent}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Author</p>
            <p class="title is-size-5">Stefan Angele</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TravelCardDetailPage;
