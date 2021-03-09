import React from 'react';
import img from '../images/imagen5.jpg';
import img1 from '../images/imagen7.jpg';
import img2 from '../images/imagen6.jpg';
import img3 from '../images/imagen8.jpg';
import img4 from '../images/imagen3.jpg';
import img5 from '../images/imagen4.jpg';
import img6 from '../images/card2.png';
import './styles/card.css'

function explore(){
    return(
        <section className="container mt-3 pt-5">
            <div className="row">
                <div className="col-md-9 mx-auto px-0">
                <div className="row">
                <div className="col-md-3 container-color4">
                    <div className="font-size-3 font-color-black">
                        <h4 className="card-title text-center font-weight-bold">Discover your true style</h4>
                            <p className="card-text">Penatibus et magnis dis montes, nascetur ridiculus mus.</p>
                            <a className="float-right font-weight-bold font-color-black" href="#">Explore our trends <i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-md-3 container-blue px-1 contenedor">
                    <img src={img} className="mx-auto d-block img-fluid imagen"  width="100%" height="100%" alt="..." loading="lazy"/>
                </div>
                <div className="col-md-3 container-blue px-1 contenedor">
                    <img src={img1} className="mx-auto d-block img-fluid imagen" width="100%" height="100%" alt="..." loading="lazy"/>
                </div>
                <div className="col-md-3 container-blue px-1 contenedor">
                    <img src={img2} className="mx-auto d-block img-fluid imagen"  width="100%" height="100%" alt="..." loading="lazy"/>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-md-3 container-blue px-1 contenedor">
                    <img src={img3} className="mx-auto d-block img-fluid imagen"  width="100%" height="100%" alt="..."/>
                </div>
                <div className="col-md-3 container-blue px-1 contenedor">
                    <img src={img4} className="mx-auto d-block img-fluid imagen"  width="100%" height="100%" alt="..."/>
                </div>
                <div className="col-md-3 container-blue px-1 contenedor">
                    <img src={img5} className="mx-auto d-block img-fluid imagen"  width="100%" height="100%" alt="..."/>
                </div>
                <div className="col-md-3 container-blue px-1 contenedor">
                    <img src={img6} className="mx-auto d-block img-fluid imagen"  width="100%" height="100%" alt="..."/>
                </div>
            </div>
                </div>
            </div>
        </section>
    )
}
export default explore