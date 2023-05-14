
import { Carousel } from 'react-bootstrap';
import img1 from '../immagini/fabioraft.jpg';
import img2 from '../immagini/canoaprova.jpg';
import img3 from '../immagini/canyoningtris.jpg';
import img4 from '../immagini/trast.jpg';
import img5 from '../immagini/trekking2.png';
import img6 from '../immagini/survival2.jpg';




function MyCarousel() {

  function handleClick(activity) {
    if (activity === "Rafting") {
      window.location.href = "/RaftingPage";
      
    } else if (activity === "Canoa") {
      window.location.href = "/canoa";
    } else if (activity === "Canyoning") {
      window.location.href = "/canyoning";
    } else if (activity === "Climbing") {
      window.location.href = "/climbing";
    } else if (activity === "Trekking") {
      window.location.href = "/trekking";
    } else if (activity === "Survival") {
      window.location.href = "/survival";
    }

    
  }

  return (
    <div className='sfondo-carosello'>
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="d-flex justify-content-center mt-5">
          <Carousel pauseOnHover={true} indicators={false} slideToShow={2} slideToScroll={1}>
            <Carousel.Item>
              <img className="d-block carousel-image" src={img1} alt="First slide"  />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill fw-bold" onClick={() => handleClick("Rafting")}>Rafting</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block carousel-image " src={img2} alt="Second slide" />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill fw-bold" onClick={() => handleClick("Canoa")}>Canoa</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block carousel-image" src={img3} alt="Third slide" />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill fw-bold" onClick={() => handleClick("Canyoning")}>Canyoning</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block carousel-image" src={img4} alt="Fourth slide" />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill fw-bold" onClick={() => handleClick("Climbing")}>Climbing</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block carousel-image" src={img5} alt="Fifth slide" />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill fw-bold" onClick={() => handleClick("Trekking")}>Trekking</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block carousel-image" src={img6} alt="Sixth slide" />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill fw-bold" onClick={() => handleClick("Survival")}>Survival</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  )
}

export default MyCarousel;