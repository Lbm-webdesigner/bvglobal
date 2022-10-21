import Main from './header.css';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


import {
    Routes,
    Route,
  } from "react-router-dom";


const Footer = () =>{
    return(
     <>
     <footer>
       <Container>
        <Row>
            <Col md={7}>
                <div className='footer_link'>
                    <div className='link_'>
                        <ul>
                        <li className="">
                            <Link className="nav-link" to="/">Home</Link> 
                        </li>
                        <li className="">
                            <Link className="nav-link" to="/Aboutus">About</Link> 
                        </li>
                        <li className="">
                            <Link className="nav-link" to="/Import">Import</Link> 
                        </li>
                        <li className="">
                            <Link className="nav-link" to="/Export">Export</Link> 
                        </li>
                        <li className="">
                            <Link className="nav-link" to="/Quality">Quality</Link> 
                        </li>
                        <li className="">
                            <Link className="nav-link" to="/Contactus">Contact</Link> 
                        </li>
                        </ul>
                    </div>
                    <div className='copy_right'>
                        <h5>B V Global Trading LLP | All Right Reserved.</h5>
                        <h6 className='mt-3'>Design by <a href='www.lbminfotech.com' className='text-success'>LBM Infotech</a></h6>
                    </div>
                </div>
            </Col>
            <Col md={5}>
                <div className='social_media text-md-right'>
                    <h4>Follow us on</h4>
                     <ul>
                        <li><a href='#'>  <BsFacebook /> </a></li>
                        <li><a href='#'>  <BsInstagram /> </a></li>
                        <li><a href='#'>  <BsTwitter /> </a></li>
                    </ul>                           
                </div>
            </Col>
        </Row>
       </Container>
     </footer>
        
     </>
     )
}

export default Footer;