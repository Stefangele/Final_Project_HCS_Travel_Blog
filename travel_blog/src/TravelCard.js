import travelCardData from "./travellocations.json";

function TravelCard() {
  return travelCardData.map((travelCard) => (
    <>
      <div className="tile is-parent box is-6">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={travelCard.image} alt={travelCard.city} />
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
                <p className="title is-4">{travelCard.city}</p>
                <p className="subtitle is-6">{travelCard.traveldate}</p>
              </div>
            </div>
            <div className="content">{travelCard.description}</div>
          </div>
        </div>
      </div>
    </>
  ));
}

export default TravelCard;
