import React from 'react'
import img from '../images/fondoa.jpg'
import img2 from '../images/fondo2.jpg'

function images() {
    return(
        /*<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={img} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>*/
        <div id="slide1" className="carousel slide" data-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#slide1" data-bs-slide-to="0" className="active" arial-current="true" arial-label="Slider 1"></button>
            <button type="button" data-bs-target="#slide1" data-bs-slide-to="0" arial-label="Slider 2"></button>  
          </div>
            <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img} className="d-block w-100" alt="..." loading="lazy"/>
                      <div className="carousel-caption d-none d-md-block">
                        <div className="row justify-content-end">
                          <div className="col-md-8">
                            <div className="container-color4 pt-3 pb-5">
                                  <div className="mb-3 text-left margin-right-left">
                                  <h1 className="font-color-black font-weight-bold font-size-longer">Retro: Old is New Again</h1>
                                  </div>
                                    <div className="text-left font-size-2 margin-right-left-2">
                                      <p className="font-color-black">Dolor fermentum tristique eget id nisl. Ut vel varius risus. Orci various risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridculus mus.</p>
                                      <a className="float-right font-weight-bold font-color-black" href="#">Discover this trend <i className="bi bi-arrow-right"></i></a>
                                    </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
            <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..." loading="lazy"/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>hghdghddfhf</h5>
                      <p>fddfgdfgdfgrrrr</p>
                    </div>
                </div>
            </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#slide1" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
                <button className="carousel-control-next" type="button" data-bs-target="#slide1" data-slide="prev">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
        </div>
    )
}
export default images