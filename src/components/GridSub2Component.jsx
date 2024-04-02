import React from 'react';
import wash1 from "./Washroom1.jpg";
import wash2 from "./Washroom2.jpg";



export default function GridSub2Component() {
    return (
        <div className="card bg-warning  card_style">
            <div class="card-body">
                <h5 class="card-title msg bg-primary text-center">Washrooms</h5>
                <h6 class="card-subtitle mb-2 text-center">Simple and Clean</h6>

                {/* <!-- images of Bedroom rendered using corousel starts --> */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={wash1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={wash2} className="d-block w-100" alt="..." />
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
