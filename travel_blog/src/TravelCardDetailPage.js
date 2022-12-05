function TravelCardDetailPage() {
  return (
    <div>
      <section class="hero is-fullheight is-primary is-bold ">
        <img
          alt="The Nature Blog"
          className="hero-background"
          src="/pictures_travellocations/image13.JPG"
        />
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-1">Titel of Blog Post goes here</h1>
            <h2 class="subtitle">visiting date goes here</h2>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">Second Headline</h2>
          <h3 class="subtitle">
            Here is a lot of lore ipsum text to be
            written.........................................................................................................................................
          </h3>
        </div>
      </section>

      <section class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">City</p>
            <p class="title is-size-4">Hamburg</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Country</p>
            <p class="title is-size-4">Germany</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Highlight</p>
            <p class="title is-size-4">Alster</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Author</p>
            <p class="title is-size-4">Stefan Angele</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TravelCardDetailPage;
