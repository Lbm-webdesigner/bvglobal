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

import Grapes from './images/grapes.jpg';
import Apple from './images/apple.jpg';
import Pear from './images/pear.jpg';
import Mandarin from './images/mandarin.jpg';

import GrapeExport from './images/grape-export.jpg';
import Pomegrnte from './images/pome-export.jpg';
import RightImg from './images/mix-img.png';

import Email from './images/email-icon.png';
import User from './images/icon-1.png';
import Security from './images/icon-2.png';

import divder from './images/line.png';

import Iframe from 'react-iframe';


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
                       
                        <a class="read_more my-3"><span>Read More</span><em></em></a>
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
                        <div className='title-section mb-5'>
                            <h2>Product Imported</h2>
                            <h4 className='text-success'>B V Global Trade</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className='product__import'>
                            <div className='product_img'>
                                <img src={Grapes} className="img-fluid"/>
                            </div>
                            <div className='product_detail'>
                               <h2>  Grapes </h2>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <div className='product__import'>
                            <div className='product_img'>
                                <img src={Apple} className="img-fluid"/>
                            </div>
                            <div className='product_detail'>
                               <h2>  Apple </h2>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <div className='product__import'>
                            <div className='product_img'>
                                <img src={Pear} className="img-fluid"/>
                            </div>
                            <div className='product_detail'>
                               <h2>  Pear </h2>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <div className='product__import'>
                            <div className='product_img'>
                                <img src={Mandarin} className="img-fluid"/>
                            </div>
                            <div className='product_detail'>
                               <h2>  Mandarin </h2>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='export__'>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className='title-section mb-5'>
                            <h2 className='text-white'>export</h2>
                            <h4 className='text-success'>Global Trade</h4>
                            <h5 className='text-white' style={{lineHeight:'1.5'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                              <br/>  standard dummy text ever since the 1500s,
                            </h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className='product__import'>
                            <div className='product_img'>
                                <img src={GrapeExport} className="img-fluid w-100"/>
                            </div>
                            <div className='product_detail text-center'>
                            <h2>  Grapes </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='product__import'>
                            <div className='product_img'>
                                <img src={Pomegrnte} className="img-fluid w-100"/>
                            </div>
                            <div className='product_detail text-center'>
                            <h2>  Pomegranate </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={RightImg} className="setInright"/>

            <Container className='my-5 py-5'>
                <Row>
                    <Col sm={6}>
                        <div className='box_layout'>
                                <h4>Contact us by phone</h4>
                                <a href='callto:900085855' className='number_higlight'>+91 990058585</a>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='box_layout'>
                                <h4>Contact us by email</h4>
                                <a href='mailto:info@global.com' className='number_higlight'>
                                    <img src={Email}/>
                                </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <div className='map_why_us'>
            <Row className='no-gutter'>
                <Col sm={6}>
                    <div className='map_'>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233254.1808056031!2d73.73265219442438!3d19.907905468096654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdbf84cd7b7%3A0x6c6add6658638ef8!2sB.V.Global%20(Pvt)%20Ltd!5e0!3m2!1sen!2sin!4v1664364436924!5m2!1sen!2sin" 
                        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                    </div>
                </Col>
                <Col sm={6} className=''>
                    <div className='innerList blue_background'>
                        <header>
                            <h6>B V Global</h6>
                            <h2><span className='text-white'>why</span> choose us </h2>
                            <img src={divder}/>
                        </header>
                        <ul className="why_choose_us">
                            <li>
                                <img src={User}/>
                                <div>
                                    <h4>Our Strengths </h4>
                                    <p>We provides our strategic customers the ability to deal with leading global...</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>Our Strengths </h4>
                                    <p>We provides our strategic customers the ability to deal with leading global...</p>
                                </div>
                                <img src={Security}/>
                            </li>
                            <li>
                                <img src={User}/>
                                <div>
                                    <h4>Our Strengths </h4>
                                    <p>We provides our strategic customers the ability to deal with leading global...</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>Our Strengths </h4>
                                    <p>We provides our strategic customers the ability to deal with leading global...</p>
                                </div>
                                <img src={Security}/>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>

      
       </div>
    )
    
}



export default Home;