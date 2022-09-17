import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SliderImage from './images/slider-1.jpg';
import SliderImage2 from './images/slider-2.jpg';
import Welcome from './images/welcome.png';
import Fruits from './images/fruits.jpg';
import Pulse from './images/pulse.jpg';
import Wood from './images/wood.jpg';


import './style.css';

function Home(){
    return(
        <div className="App1">
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={SliderImage}
            alt="B V Global LLP"
            />
            <Carousel.Caption>
            <h3 className="text-success we_are">We are active</h3>
            <h2 className='text-white slider-title'>To ship your product trusted</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
been the industry's standard dummy text ever since the 1500s.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={SliderImage2}
            alt="B V Global LLP"
            />
            <Carousel.Caption>
            <h3 className="text-primary we_are">We are active</h3>
            <h2 className='text-dark slider-title'>To ship your product trusted</h2>
            <p className='text-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
been the industry's standard dummy text ever since the 1500s.</p>
            </Carousel.Caption>
        </Carousel.Item>
       </Carousel> 

     <section className='welcome_section py-5'>
        <div className='shape_bg'></div>
       <Container>
           <Row>
            <Col sm={12}>
                <div className='title-section'>
                    <h2>Welcome</h2>
                    <h4>About B V Global</h4>
                </div>
            </Col>
           </Row>
            <Row className='my-5'>
                <Col md={6}>
                    <div className='content_'>
                        <h1>Think Local, Sell Global</h1>
                        <h2>Supports custom </h2>
                        <h2>-Made hydraulic valves</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. 
                        </p>
                        <a href='#' className='read_more my-3'>Read More <span className='line_'></span></a>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={Welcome} className="img-fluid"/>
                </Col>
            </Row>
        </Container>
        </section> 

        <section className='category_'>
            <Container>
                <Row>
                    <Col lg={3} md="6">
                        <div className='cont_cate m--2'>
                           <div className='img_section position-relative'>
                             <span className='no_de'>01</span>
                                <img src={Fruits}/>
                            </div>      
                            <div className='informail_'>
                                <h2>Fruits</h2>    
                                <p>Lorem Ipsum is simply dummy text of the printing and typeset...</p>
                            </div>                           
                        </div>
                    </Col>

                    <Col lg={3} md="6">
                        <div className='cont_cate mt-20'>
                           <div className='img_section position-relative'>
                             <span className='no_de'>02</span>
                                <img src={Pulse}/>
                            </div>      
                            <div className='informail_'>
                                <h2>Pulse</h2>    
                                <p>Lorem Ipsum is simply dummy text of the printing and typeset...</p>
                            </div>                           
                        </div>
                    </Col>

                    <Col lg={3} md="6">
                        <div className='cont_cate mt-50'>
                           <div className='img_section position-relative'>
                             <span className='no_de'>03</span>
                                <img src={Wood}/>
                            </div>      
                            <div className='informail_'>
                                <h2>Wood</h2>    
                                <p>Lorem Ipsum is simply dummy text of the printing and typeset...</p>
                            </div>                           
                        </div>
                    </Col>

                    <Col lg={3} md={6} className="align-self-center">
                        <div className='descup_cat'>
                            <div className='cat_title'>PRODUCTS WE DEAL IN</div>
                            <h2>Traditng information</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s,
                            </p>
                        </div> 
                    </Col>

                </Row>
            </Container>
        </section>

        <section className='import_product'>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className='title-section'>
                            <h2>Product Imported</h2>
                            <h4 className='text-success'>B V Global Trade</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

       </div>
    )
    
}

export default Home;