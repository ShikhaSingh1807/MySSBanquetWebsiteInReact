import React from 'react';
import './GridMainComponent.css';
import bed1 from "./Bedroom1.jpg";
import bed2 from "./Bedroom2.jpg";
import bed3 from "./Bedroom3.jpg";

export default function GridSub1Component() {
    return (
        <div className="card bg-warning  card_style">
            <div class="card-body">
                <h5 className="card-title msg bg-primary text-center">Bedroom</h5>
                <h6 className="card-subtitle mb-2 text-center">Elegant and Spacious</h6>

                {/* <!-- images of Bedroom rendered using corousel starts --> */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bed1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={bed2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={bed3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* <!-- bedroom corousel ends --> */}

            </div>
        </div>
    )
}
