function AboutMe() {
  return (
    <div className="column m-5 is-flex is-flex-direction-column is-align-items-center ">
      <h2 className="title is-2 has-text-centered">About me!</h2>
      <p className="m-5">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </p>
      <figure className="mt-6">
        <img
          src="/author_image_cropped.png"
          alt="Author"
          style={{
            transform: "rotate(15deg)",
            width: "350px",
            boxShadow: "14px 15px 22px 1px rgba(72,199,142,0.52)",
          }}
        />
      </figure>
    </div>
  );
}

export default AboutMe;
