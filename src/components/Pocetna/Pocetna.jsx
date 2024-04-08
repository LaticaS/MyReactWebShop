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
      <div class="row featurette py-2 my-2 px-3">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">
            Znanost začina, nova hit kuharica -{" "}
            <span class="text-body-secondary">dr. Stuarta Farrimonda</span>
          </h2>
          <p class="lead">
            Ljubitelji začina, pustolovi i znatiželjni kuhari, otkrijte kako se
            okusi stapaju i pokrenite revoluciju u kuhanju. Podignite svoju
            strast prema začinima na novu razinu zahvaljujući zanimljivim
            istraživanjima dr. Stuarta Farrimonda, znanstvenika o prehrani i
            uspješnog autora.
          </p>
        </div>
        <div class="col-md-5">
          <img src="\carousel-img/znanost začina.jpg" alt="" width={300} />
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
