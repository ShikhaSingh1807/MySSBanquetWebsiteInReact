import React from 'react'
import LogoComponent from './LogoComponent'
import "./NavBar.css";


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark navbg">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#">
                        <LogoComponent />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link link_style" href="#">Book Now</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link_style" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link_style" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Search" />
                            <button className="btn btn-warning" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
