import React from 'react';
import img1 from '../images/card1.png'

function Cards_info(props) {
    return(
        <div className="col-md-4 px-1">
            <div className="card">
                <img src={img1} className="card-img-top" alt="..." loading="lazy"/>
                <div className="card-body font-color-black font-size-3 container-color2">
                    <h5 className="card-title text-center font-weight-bold">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a className="float-right font-weight-bold font-color-black">Read more <i className="bi bi-arrow-right"></i></a>
                 </div>
            </div>
        </div>
    )
}
export default Cards_info