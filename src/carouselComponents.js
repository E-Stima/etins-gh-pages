import Carousel from "react-bootstrap/carousel"
import Stn from "./Images/alex.jpg"
import tea from "./Images/drums.jpg"
import fit from "./Images/speaker.jpg"

const CarouselComponent = () => {
    return ( 
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Stn}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>This is My.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tea}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fit}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     );
}
 
export default CarouselComponent;