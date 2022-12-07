import { useEffect, useState } from "react";

function TravelCard() {
  const [travelDestination, setTravelDestination] = useState({});

  useEffect(() => {
    const endpoint = "/travellocations.json";
    fetch(endpoint)
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        console.log(result);
        const travelcardObject = {
          continent: result?.continent,
          country: result?.country,
          city: result?.city,
          imagesrc: result?.image,
          traveldate: result?.traveldate,
          description: result?.description,
        };
        setTravelDestination(travelcardObject);
        console.log(travelDestination);
      })
      .catch(function (error) {
        console.error("Something went wrong", error);
      });
  }, []);

  return (
    <div className="tile is-parent box is-6">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={travelDestination?.imagesrc}
              alt={travelDestination?.city}
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
              <p className="title is-4">{travelDestination?.city}</p>
              <p className="subtitle is-6">{travelDestination?.traveldate}</p>
            </div>
          </div>

          <div className="content">{travelDestination?.description}</div>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
