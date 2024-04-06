import { Link } from "react-router-dom";
//import "./Pocetna.scss";
import { toast } from "react-hot-toast";
import CarouselPocetna from "./Carousel";
import GrupaProizvoda from "./GrupaProizvoda";

function Pocetna() {
  return (
    <>
      <CarouselPocetna />
      <h2>Preporuke beletristika</h2>
      <GrupaProizvoda />
      <h2>Posebna ponuda</h2>
      <div class="row featurette py-2 my-2">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">
            First featurette heading.{" "}
            <span class="text-body-secondary">It’ll blow your mind.</span>
          </h2>
          <p class="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="400"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-bg)"
            ></rect>
            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>
      <h2>Preporuke publicistika</h2>
      <GrupaProizvoda />

      {/** 
      <main>
        <Link to="/products" title="AKCIJSKI POPUSTI 50%">
          <div className="div-banner">
            <div className="div-text-banner">AKCIJSKI POPUSTI 50%</div>
          </div>
        </Link>

        <section className="sect2">
          <div>
            <Link to="/products" id="link-u-naslovu">
              <h2>BEST SELLING BOOKS</h2>
            </Link>
          </div>
          <div id="div-kategorija-žene" title="">
            <button onClick={() => toast.success("Hello world")}>TOAST</button>
            <Link to="/products">
              <div className="ime-kategorije">KUHARICE</div>
            </Link>
          </div>
          <div id="div-kategorija-modni-dodaci" title="">
            <Link to="/products">
              <div className="ime-kategorije">SELF-HELP</div>
            </Link>
          </div>
          <div id="div-kategorija-muškarci" title="">
            <Link to="/products">
              <div className="ime-kategorije">TRILERI</div>
            </Link>
          </div>
        </section>

        <section className="sect3">
          <div>
            <Link to="/products" id="link-u-naslovu">
              <h2>MOST POPULAR</h2>
            </Link>
          </div>
          <div id="div-haljine" title="">
            <Link to="/products">
              <div className="ime-kategorije">FANTASY</div>
            </Link>
          </div>

          <div id="div-bluze" title="">
            <Link to="/products">
              <div className="ime-kategorije">BIOGRAFIJE</div>
            </Link>
          </div>
          <div id="div-kaputi" title="">
            <Link to="/products">
              <div className="ime-kategorije">STRIPOVI</div>
            </Link>
          </div>
          <div id="div-trenerke" title="">
            <Link to="/products">
              <div className="ime-kategorije">STRUČNA</div>
            </Link>
          </div>
        </section>
      </main>
      */}
    </>
  );
}

export { Pocetna };
