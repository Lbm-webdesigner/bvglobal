import Carousel from 'react-bootstrap/Carousel';
import SliderImage from './images/slider-1.jpg';
import SliderImage2 from './images/slider-2.jpg';
function Home(){
    return(
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={SliderImage}
            alt="B V Global LLP"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={SliderImage2}
            alt="B V Global LLP"
            />
            <Carousel.Caption>
            <h3>Second slide label 25</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
       </Carousel>       
    )
}

export default Home;