import React from 'react'
import GridSub1Component from './GridSub1Component'
import GridSub2Component from './GridSub2Component'
import GridSub3Component from './GridSub3Component'
import './GridMainComponent.css';

export default function GridMainComponent() {
    return (
        <div className="card_section">
            <div className='container d-flex justify-content-center'>
                <div className="row">
                    <div class="col-md-4 ">
                        <GridSub1Component />
                    </div>


                    <div class="col-md-4 ">
                        <GridSub2Component />
                    </div>


                    <div class="col-md-4 ">
                        <GridSub3Component />
                    </div>


                </div>
            </div>
        </div>
    )
}
