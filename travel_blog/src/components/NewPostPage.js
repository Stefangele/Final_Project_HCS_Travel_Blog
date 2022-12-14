import NewPostForm from "./NewPostForm";
import NewPostMap from "./NewPostMap";

function NewPostPage() {
  return (
    <div className="columns m-5">
      <div className="column">
        <div className="block">
          <h2 className="title is-2 has-text-centered pt-4">
            Show me new places!
          </h2>
          <div>
            <NewPostForm />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="block">
          <h2 className="title is-2 has-text-centered pt-4">
            Your suggestions!
          </h2>
        </div>
        <div className="tile is-ancestor is-flex-wrap-wrap">
          <>
            <div className="tile is-parent box is-6">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3 pt-1">
                    <NewPostMap />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">London</p>
                      <p className="subtitle is-6">United Kingdom</p>
                    </div>
                  </div>
                  <div className="content">
                    Description: Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet.
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;
