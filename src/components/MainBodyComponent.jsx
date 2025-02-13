import React from 'react';
import banq1 from './Banquet1.jpg';
import banq2 from './Banquet2.jpg';
import banq3 from './Banquet3.jpeg';
import banq4 from './Banquet4.jpg';
import "./MainBodyComponent.css";
import DisclaimerMsg from "../components/DisclaimerMsg";
import GridMainComponent from './GridMainComponent';
import AmenitiesComponent from './AmenitiesComponent';
import PoliciesAndRating from './PoliciesAndRating';

export default function MainBodyComponent() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide container-fluid" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banq1} className="d-block w-100 corousel_img " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banq2} className="d-block w-100 corousel_img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banq3} className="d-block w-100 corousel_img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banq4} className="d-block w-100 corousel_img" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <DisclaimerMsg />
            <GridMainComponent />
            <AmenitiesComponent />
            <PoliciesAndRating />
        </div>
    )
}
