import { Link } from "react-router-dom";
import "./Pocetna.scss";
import { toast } from "react-hot-toast";
import CarouselPocetna from "./Carousel";
import GrupaProizvoda from "./GrupaProizvoda";
import { Slideshow } from "./Slideshow.jsx";
//import { Carousel2 } from "./Carousel2.jsx";

function Pocetna() {
  return (
    <>
      <CarouselPocetna />
      <h2>Preporuke beletristika</h2>
      <GrupaProizvoda />
      <h2>Posebna ponuda</h2>
      <div className="row featurette py-2 my-2 mx-4 px-3 bg-light ">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            Nova hit kuharica -{" "}
            <span className="text-body-secondary">dr. Stuarta Farrimonda</span>
          </h2>
          <p className="lead">
            Ljubitelji začina, pustolovi i znatiželjni kuhari, otkrijte kako se
            okusi stapaju i pokrenite revoluciju u kuhanju. Podignite svoju
            strast prema začinima na novu razinu zahvaljujući zanimljivim
            istraživanjima dr. Stuarta Farrimonda, znanstvenika o prehrani i
            uspješnog autora.
          </p>
        </div>
        <div className="col-md-5">
          <Link path to={`/product/${19}`}>
            <img
              src="\carousel-img/znanost začina.jpg"
              alt="Hit naslov: Znanost začina"
              title="Klik za detaljnije"
              className="image-posebna-ponuda"
            />
          </Link>
        </div>
      </div>
      <h2>Hit naslovi</h2>
      <Slideshow />
    </>
  );
}

export { Pocetna };
