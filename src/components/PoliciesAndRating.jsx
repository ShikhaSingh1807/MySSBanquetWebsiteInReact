import React from 'react'
import Ratings from './Ratings'
import Policies from './Policies'

export default function PoliciesAndRating() {
    return (
        <div className="container">
            <div class="row">
                <div class="col-md-6">
                    <Ratings />
                </div>
                <div className="col-md-6">
                    <Policies />
                </div>
            </div>
        </div>
    )
}
