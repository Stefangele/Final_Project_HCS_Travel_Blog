import MapContactPage from "./MapContactPage";

function Contact() {
  return (
    <section className="pt-20">
      <div className="section">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-6">
              <div className="has-mw-lg">
                <h2 className="title is-2">Stefan Angele</h2>
                <p className="has-text-grey-dark mb-1">
                  This project is the final part of the curriculum of the
                  Full-Stack Web Development program 2022-3 at Hamburg Coding
                  School. Goal was to transfer the main idea from your last
                  project "The Travel Blog", made with pure Javascript, HTML and
                  CSS into a React App. The whole project description can be
                  found in this{" "}
                  <a href="https://github.com/hamburgcodingschool/fullstack-2022-3_react/blob/main/project.md">
                    Github-Repo
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="column is-4 ml-auto">
              <h3 className="title is-4 mb-1">Address</h3>
              <p className="has-text-grey-dark mb-1">
                Dorotheenstraße 104, 22301 Hamburg
              </p>
              <h3 className="title is-4 mb-1">Mail</h3>
              <p className="has-text-grey-dark mb-1">angelestf@aol.com</p>
              <h3 className="title is-4 mb-1">Phone</h3>
              <p className="has-text-grey-dark mb-1">0162/96 40 88 7</p>
            </div>
          </div>
          <MapContactPage />
        </div>
      </div>
    </section>
  );
}

export default Contact;
