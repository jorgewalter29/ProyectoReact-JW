
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '/public/banner1.jpg';
import banner2 from '/public/banner2.png';
import banner3 from '/public/banner3.jpg';

function Carousell() {

    const isHomePage = window.location.pathname === '/';


    return (

        <div>
            {isHomePage && (
                <Carousel>
                    <Carousel.Item>
                        <img className='w-full h-full object-contain' src={banner1} alt="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='w-full h-full object-contain' src={banner2} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='w-full h-full object-contain' src={banner3} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            )}
        </div>

    );
}

export default Carousell;
