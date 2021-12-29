//Boostrap Js
import { Carousel } from 'react-bootstrap';
//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//Slider Photos
import pic1 from "../Images/b1.jpg";
//Slider CSS
import './slider.css'

function Slider() {
    return (
        <div className='container-fluid'>
            <br />
            <div className='container'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}


export default Slider;