
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AboutImg from './images/about4.jpg';
import AboutImg5 from './images/about5.png';

import { BiCheckShield } from "react-icons/bi";
import { FaBuffer } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";



import ProgressBar from 'react-bootstrap/ProgressBar';

function Contact(){
    return(
        <div className="wraper">
             <div className="innerBanner dark-overlay">
                <Container>
                <div className="bvglobal_subheader-inner">
                    <div className="bvglobal_subheader-text">
                    <h1>Contact Us</h1>
                    </div>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="btn-link" href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                    </nav>
                </div>
                </Container>
            </div>

            <section className='contact_details'>
                <div className="container">
                <div className="globel_box pb-0 m-0">
                    <div className="row">

                    <div className="col-md-4">
                        <div className="globel_icon-block icon-block-3">
                        <div className="icon-wrapper">
                            <BiCheckShield/>
                        </div>
                        <div className="globel_icon-block-content">
                            <h5> Cargo &amp; Shipping </h5>
                            <p>A cargo ship or freighter is a merchant ship that carries cargo, goods. Nulla porttitor accumsan tincidunt.</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="globel_icon-block icon-block-3">
                        <div className="icon-wrapper">
                            <FaBuffer/>
                        </div>
                        <div className="globel_icon-block-content">
                            <h5> Air Freight </h5>
                            <p>A cargo ship or freighter is a merchant ship that carries cargo, goods. Nulla porttitor accumsan tincidunt.</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="globel_icon-block icon-block-3">
                        <div className="icon-wrapper">
                            <BiCheckShield/>
                        </div>
                        <div className="globel_icon-block-content">
                            <h5> Sea Freight </h5>
                            <p>A cargo ship or freighter is a merchant ship that carries cargo, goods. Nulla porttitor accumsan tincidunt.</p>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </section>

            <section className="contact_form">
                <Container>
                    <Row>
                        <Col md="12" className='mx-auto'>
                        <div className="section pt-0">
                            <div className="container">

                            <div className="section-title text-center">
                                <p className="subtitle"> <span></span> Get a Quote <span></span> </p>
                                <h4 className="title">Free Cargo &amp; Shipping Consultancy</h4>
                            </div>

                            <div className="row">
                                <div className="offset-lg-1 col-lg-10">
                                <form className="mf_form_validate ajax_submit" action="sendmail.php" method="post" enctype="multipart/form-data" novalidate="novalidate">
                                    <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <BsPerson/>
                                            <input type="text" placeholder="Full Name" className="form-control" name="fullname"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                        <BsEnvelope/>
                                        <input type="email" placeholder="Email Address" className="form-control" name="email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                        <BsFillTelephoneFill/>
                                        <input type="text" placeholder="Phone" className="form-control" name="subject"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <textarea name="message" placeholder="Enter Message" cols="45" rows="5" className="form-control" style={{height:'auto'}}/>
                                    </div>
                                    <div className="text-center">
                                    <button type="submit" className="btn btn-lg btn-success" name="button" style={{borderRadius:'2px'}}>SUBMIT NOW </button>
                                    <div className="server_response w-100"></div>
                                    </div>
                                </form>
                                </div>
                            </div>

                            </div>
                        </div>     
                        </Col>
                    </Row>
                </Container>
            </section>
    </div>
    )
}

export default Contact;