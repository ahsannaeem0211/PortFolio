import React, { useState } from 'react'
import './Style.css';

function Navbar() {
    const sty = {
        "css": {
            "position": "fixed",
            "top": "0px"
        }

    }
    const [oldsticky, newsticky] = useState("sticky-wrapper");
    window.onscroll = () => {
        let top = window.scrollY;
        let temp;
        if (top > 50) {
            temp = "sticky-wrapper is-sticky";
        }
        else {
            temp = "sticky-wrapper";
        }
        return newsticky(temp);
    }
    return (
        <div>
            <div id="sticky-wrapper" className={oldsticky} style={{ height: "93px" }}>
                <nav className="navbar navbar-expand-lg" style={sty.css}>
                    <div className="container">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <a href="index.html" className="navbar-brand mx-auto mx-lg-0">First</a>

                        <div className="d-flex align-items-center d-lg-none">
                            <i className="navbar-icon bi-telephone-plus me-3"></i>
                            <a className="custom-btn btn" href="#section_5">
                                120-240-9600
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-lg-5">
                                <li className="nav-item">
                                    <a className="nav-link click-scroll active" href="#section_1">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link click-scroll inactive" href="#section_2">About</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link click-scroll inactive" href="#section_3">Services</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link click-scroll inactive" href="#section_4">Projects</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link click-scroll inactive" href="#section_5">Contact</a>
                                </li>
                            </ul>

                            <div className="d-lg-flex align-items-center d-none ms-auto">
                                <i className="navbar-icon bi-telephone-plus me-3"></i>
                                <a className="custom-btn btn" href="#section_5">
                                    120-240-9600
                                </a>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar



