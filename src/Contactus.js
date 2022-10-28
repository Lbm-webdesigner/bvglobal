
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AboutImg from './images/about4.jpg';
import AboutImg5 from './images/about5.png';

import { BiCheckShield } from "react-icons/bi";
import { FaBuffer } from "react-icons/fa";



import ProgressBar from 'react-bootstrap/ProgressBar';

function Contactus(){
    return(
        <div className="wraper">
             <div className="innerBanner dark-overlay">
                <Container>
                <div className="bvglobal_subheader-inner">
                    <div className="bvglobal_subheader-text">
                    <h1>About Us</h1>
                    </div>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="btn-link" href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                    </nav>
                </div>
                </Container>
            </div>

            <section className="section_">
            <Container>
                <Row className="align-items-center">
                   <Col lg={6} className="mb-lg-30">
                    <div className="section-title mb-0 text-left">
                        <p className="subtitle"> <span></span> About us <span></span> </p>
                        <h4 className="title">B V Global &amp; LOGISTICS COMPANY</h4>
                    </div>

                    <div className="bvglobal_counter style-2">
                        <b className="counter">05</b>
                        <div className="bvglobal_counter-content">
                        <span>years</span>
                        <span>Working</span>
                        <span>Experience</span>
                        </div>
                    </div>

                    <p>
                        Over the years, a wide range of developments and innovations in the global IT arena have led to many new IT-enabled devices and services being produced. Moreover, there is need for IT today, not just in urban areas but rural regions as well.
                    </p>

                    <Row>
                    <Col lg={6}>
                    <div className="bvglobal_icon-block icon-block-3 d-block">
                        <div className="icon-wrapper mb-4">
                            <span><BiCheckShield/></span>
                        </div>
                        <div className="bvglobal_icon-block-content">
                        <h5> AIR FREIGHT </h5>
                        <p>A cargo ship or freighter is a merchant ship that carries cargo, goods.</p>
                        </div>
                    </div>
                    </Col>
                    <Col lg={6}>
                        <div className="bvglobal_icon-block icon-block-3 d-block">
                            <div className="icon-wrapper mb-4">
                                <span><FaBuffer/></span>
                            </div>
                            <div className="bvglobal_icon-block-content">
                            <h5> SEA FREIGHT </h5>
                            <p>A cargo ship or freighter is a merchant ship that carries cargo, goods.</p>
                            </div>
                        </div>
                    </Col>
                    </Row> 

                </Col> 

                <div className="col-lg-6">
                <div className="mr-lg-30">
                    <div className="bvglobal_dots-wrapper">
                    <img src={AboutImg}/>
                    <div className="bvglobal_dots dots-2"></div>
                    </div>
                </div>
                </div>

            </Row>
        </Container>
        </section>

        <div className="section light-bg py-5">
            <Container>
             <Row className="align-items-center py-2">
                 <Col lg="6">
                    <div className="bvglobal_dots-wrapper">
                        <div className="bvglobal_dots dots-2"></div>
                        <img src={AboutImg5}/>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="mr-lg-30">
                        <div className="section-title mb-0 text-left">
                            <p className="subtitle"> <span></span> Our Strategy <span></span> </p>
                            <h4 className="title">The Highest Quality Services 24 Hours.</h4>
                         </div>
                         <p>
                            A good example of road cargo is food, as supermarkets require deliveries daily to replenish their shelves with goods. Retailers and manufacturers of all kinds rely upon delivery trucks, be they full size semi trucks or smaller delivery vans. These smaller road haulage companies constantly strive for the best routes and prices to ship out their products.
                    </p>
                    <div className="bvglobal_progress active">
                        <div className='progress_bar my-3'>
                            <label>CARGO STORAGE</label><label className='values_bar'>71</label>
                            <ProgressBar variant="warning" now={71} />
                        </div>
                        <div className='progress_bar my-3'>
                            <label>WORLDWIDE</label>
                            <label className='values_bar'>85</label>
                            <ProgressBar variant="warning" now={85} />
                        </div>
                        <div className='progress_bar my-3'>
                            <label>AIR CARGO</label><label className='values_bar'>55</label>
                            <ProgressBar variant="warning" now={55} />
                        </div>
                    </div>
                    </div>
                </Col>
             </Row>
            </Container>
        </div>
        
        <section className='section-padding pattern-building-3 position-relative'>
            <Container>
                <div className="section-title text-center">
                    <h6 className="subtitle"> <span></span> Working Process <span></span> </h6>
                    <h4 className="title">Inspired Features</h4>
                </div>
                <Row>
                    <Col lg={3}>
                    <div className="bvaglobl_icon-block text-center icon-block-7">
                        <div className="icon-wrapper">
                        <span className="stroke-text stroke-text-dark">01</span>
                        </div>
                        <div className="bvaglobl_icon-block-content">
                        <h5> Cargo Storage </h5>
                        <p>A cargo ship or freighter is a merchant ship that carries cargo.</p>
                        </div>
                    </div>
                    </Col>
                    <Col lg={3}>
                    <div class="bvaglobl_icon-block text-center icon-block-7">
                        <div class="icon-wrapper">
                        <span class="stroke-text stroke-text-dark">02</span>
                        </div>
                        <div class="bvaglobl_icon-block-content">
                        <h5> Ground </h5>
                        <p>A cargo ship or freighter is a merchant ship that carries cargo.</p>
                        </div>
                    </div>
                    </Col>
                    <Col lg={3}>
                    <div class="bvaglobl_icon-block text-center icon-block-7">
                        <div class="icon-wrapper">
                        <span class="stroke-text stroke-text-dark">03</span>
                        </div>
                        <div class="bvaglobl_icon-block-content">
                        <h5> Worldwide </h5>
                        <p>A cargo ship or freighter is a merchant ship that carries cargo.</p>
                        </div>
                    </div>
                    </Col>
                    <Col lg={3}>
                        <div class="bvaglobl_icon-block text-center icon-block-7">
                            <div class="icon-wrapper">
                            <span class="stroke-text stroke-text-dark">04</span>
                            </div>
                            <div class="bvaglobl_icon-block-content">
                            <h5> Air Cargo </h5>
                            <p>A cargo ship or freighter is a merchant ship that carries cargo.</p>
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </section>
        

    </div>
    )
}

export default Contactus;