import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/logo.png';
import Main from './header.css';


import App from "../App";

const Header = () =>{
    return(
     <>
     <nav className="navbar navbar-expand-lg">
        <div className='container'>
        <a className="navbar-brand" href="/">
            <img src={Logo} className="logo" style={{width:'230px'}}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">
            <ul className="navbar-nav nav_bar_custome">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Aboutus">About</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Import">Import</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Export">Export</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Quality">Quality</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link btn-contact" to="/Contactus">Contact</Link> 
            </li>
            </ul>
        </div>
        </div>
     </nav>
     </>
    );
}

export default Header;