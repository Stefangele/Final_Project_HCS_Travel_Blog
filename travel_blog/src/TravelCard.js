function TravelCard() {
  return (
    <div className="tile is-parent box is-6">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Main Image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src="/author_image_cropped.png" alt="Author Image" />
                <p className="is-size-7">By Stefan Angele</p>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Hamburg</p>
              <p className="subtitle is-6">Visited: May 2022</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
