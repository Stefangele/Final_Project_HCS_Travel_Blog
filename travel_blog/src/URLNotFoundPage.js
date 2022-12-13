import { Link } from "wouter";

function URLNotFoundPage() {
  return (
    <section class="hero is-danger is-halfheight">
      <div class="hero-body">
        <div class="">
          <p class="title">Ooopsy daisy - 404</p>
          <p class="subtitle">This page was not found - sorry...</p>
          <Link href="/">
            <button class="button is-success is-medium is-focused">
              Better Go Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default URLNotFoundPage;
