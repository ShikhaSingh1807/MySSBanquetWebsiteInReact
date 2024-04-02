import React from 'react';
import recep1 from './Reception1.jpg';
import recep2 from './Reception2.jpg';
import recep3 from './Reception3.jpg';
import './GridMainComponent.css';

export default function GridSub3Component() {
    return (
        <div className="card bg-warning  card_style">
            <div class="card-body">
                <h5 class="card-title msg bg-primary text-center">Reception</h5>
                <h6 class="card-subtitle mb-2 text-center">Calm and Comfortable</h6>

                {/* <!-- images of Bedroom rendered using corousel starts --> */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={recep1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={recep2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={recep3} className="d-block w-100" alt="..." />
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
