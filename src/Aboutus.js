import { Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutImg from './images/about4.jpg';

import { BsTwitter } from "react-icons/bs";

function Aboutus(){
    return(
        <div>
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
                            <span>{BsTwitter}</span>
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
                                <span>{BsTwitter}</span>
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

        <div className="section light-bg">
            <div className="container">

            <div className="row align-items-center">

                <div className="col-lg-6">
                <div className="bvglobal_dots-wrapper">
                    {/* <img src="assets/img/about5.png" alt="about"> */}
                    <div className="bvglobal_dots dots-2"></div>
                </div>
                </div>

                <div className="col-lg-6">
                <div className="mr-lg-30">
                    <div className="section-title mb-0 text-left">
                    <p className="subtitle"> <span></span> Our Strategy <span></span> </p>
                    <h4 className="title">The Highest Quality Services 24 Hours.</h4>
                    </div>

                    <p>
                    A good example of road cargo is food, as supermarkets require deliveries daily to replenish their shelves with goods. Retailers and manufacturers of all kinds rely upon delivery trucks, be they full size semi trucks or smaller delivery vans. These smaller road haulage companies constantly strive for the best routes and prices to ship out their products.
                    </p>

                    <div className="bvglobal_progress active">
                    <h6>CARGO STORAGE</h6>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;">
                        <span></span>
                        </div>
                    </div>
                    <div className="bvglobal_progress-count" style="left: 70%;">
                        <span>70%</span>
                    </div>
                    </div>

                    <div className="bvglobal_progress active">
                    <h6>WORLDWIDE</h6>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
                        <span></span>
                        </div>
                    </div>
                    <div className="bvglobal_progress-count" style="left: 85%;">
                        <span>85%</span>
                    </div>
                    </div>

                    <div className="bvglobal_progress active">
                    <h6>AIR CARGO</h6>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style="width: 55%;">
                        <span></span>
                        </div>
                    </div>
                    <div className="bvglobal_progress-count" style="left: 55%;">
                        <span>55%</span>
                    </div>
                    </div>

                </div>
                </div>

            </div>

            </div>
        </div>
    </div>


        
    )
}

export default Aboutus;