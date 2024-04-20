import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
//import "./Pocetna.scss";

function CarouselPocetna() {
  return (
    <>
      <Container>
        <Carousel data-bs-theme="dark" className="carousel-wrapper">
          <Carousel.Item className="carousel-item">
            <img
              className="d-block img-fluid"
              src="carousel-img\naslovi na sniženju.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5></h5>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block img-fluid"
              src="\carousel-img\Banner_1250x326px_135. kolo.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5></h5>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block img-fluid"
              src="\carousel-img\Tajna-kucne-pomocnice_banner_1250x326.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5></h5>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block img-fluid"
              src="\carousel-img\posljednje-uporiste-1250-326.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h5></h5>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block img-fluid"
              src="carousel-img\Znanje-banner-Babysitter.jpg"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h5></h5>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block img-fluid"
              src="\carousel-img\sutra-bit-ce-bolje-1250-326.jpg"
              alt="Sixth slide"
            />
            <Carousel.Caption>
              <h5></h5>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container>
        <div className="my-2">
          <div className="p-4 text-center bg-body-tertiary">
            <div className="container py-1">
              <h2 className="text-body-emphasis">Knjižara Booki</h2>
              <p className="col-lg-10 mx-auto lead">
                Knjižara Booki nudi širok izbor svjetskih bestsellera, knjiga za
                mlade i stručnih naslova iz publicistike. Iz naše ponude
                izdvajamo najpopularnije hitove koji su osvojili svijet.
                Pogledajte preporuke i odaberite naslove po vašim potrebama i
                željama.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CarouselPocetna;
