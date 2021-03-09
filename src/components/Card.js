import React from 'react';
import img from '../images/imagen2.jpg';
import './styles/card.css'

function card() {
    return(
        <section className="container mt-3 pt-5">
            <div className="row">
                <div className="col-md-9 mx-auto  px-0">
                    <div className="card mb-3 max_width">
                            <div className="row g-0">
                                <div className="col-md-8 container-color">
                                    <img src={img} alt="..." width="100%" height="100%" loading="lazy"/>
                                </div>
                                    <div className="col-md-4 container-color pb-2">
                                        <div className="font-color-black mt-2 font-size-3">
                                            <h3 className="card-title text-center font-weight-bold">Shop anything and everything</h3>
                                            <p className="card-text">Dolor fermentum tristique eget id nisl. Ut vel varius risus. Orci various risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridculus mus.</p>
                                            <a className="float-right font-color-black font-weight-bold" href="#">Browse our collections <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}
export default card