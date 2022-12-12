import travelCardData from "./travellocations.json";

function TravelCardDetailPage({ id = "Default" }) {
  return travelCardData.map((travelCard) => (
    <div>
      <section class="hero is-fullheight is-primary is-bold ">
        <img
          alt={travelCard.city}
          className="hero-background"
          src={travelCard.image}
        />
        <div class="hero-body">
          <button class="button is-danger is-focused is-align-self-flex-start">
            Go Back
          </button>
          <div class="container">
            <h1 class="title is-size-1">{travelCard.blogposttitel}</h1>
            <h2 class="subtitle">{travelCard.city}</h2>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">{travelCard.city}</h2>
          <h3 class="subtitle">{travelCard.blogtext}</h3>
        </div>
      </section>

      <section class="level is-mobile pb-6">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Traveldate</p>
            <p class="title is-size-5">{travelCard.traveldate}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Country</p>
            <p class="title is-size-5">{travelCard.country}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Continent</p>
            <p class="title is-size-5">{travelCard.continent}</p>
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
  ));
}
export default TravelCardDetailPage;
