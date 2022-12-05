function TravelCard() {
  return (
    <div className="tile is-parent box is-6">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="/pictures_travellocations/image13.JPG" alt="Main Image" />
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
            Here is some intro text displayed to give some additional
            information
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
