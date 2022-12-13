import "./parallax.css";

function HomeParallax() {
  return (
    <section id="parallax" class="hero is-medium ">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <h1 className="title is-1 ">Add new places</h1>
              <hr className="content-divider" />
              <h2 className="subtitle">
                Where have you been already? Show me your favorite places and
                propose new spots for me to travel to!
              </h2>
              <a href="#" className="button is-success is-medium is-focused">
                Go ahead!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeParallax;
