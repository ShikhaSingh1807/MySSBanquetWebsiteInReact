import React from 'react';
import './Ratings.css';

export default function Ratings() {
    return (
        <div className='container-fluid mt-3 rating_style'>
            <div className="height-100 container d-flex justify-content-start align-items-start">
                <div className="card-rt p-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="ratings">
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <h5 class="review-count ">12 Reviews</h5>
                    </div>


                    <div class="mt-5 d-flex justify-content-between align-items-center">
                        <h5 class="review-stat">Cleanliness</h5>
                        <div class="small-ratings">
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star"></i>
                        </div>

                    </div>

                    <div class="mt-1 d-flex justify-content-between align-items-center">
                        <h5 class="review-stat">Amenities</h5>
                        <div class="small-ratings">
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>


                    <div class="mt-1 d-flex justify-content-between align-items-center">
                        <h5 class="review-stat">Facilities</h5>
                        <div class="small-ratings">
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star "></i>
                        </div>
                    </div>


                    <div class="mt-1 d-flex justify-content-between align-items-center">
                        <h5 class="review-stat">Luxury</h5>
                        <div class="small-ratings">
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>

                    <div class="mt-1 d-flex justify-content-between align-items-center">
                        <h5 class="review-stat">Comfort</h5>
                        <div class="small-ratings">
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
