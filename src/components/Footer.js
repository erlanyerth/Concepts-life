import React from 'react'
import logoimg from '../images/concepts2.png'
import './styles/footer.css'

function footer(){
    return( 
    <div className="container-footer">
        <div className="row">
            <div className="col-md-8 mt-3">
                <div className="footer-content">
                <div className="row">
                        <div className="col-md-12 align">
                            <div className="">
                                <ul className="menu-footer">
                                    <li><a href="#">Trends</a></li>
                                    <li><a href="#">Collections</a></li>
                                    <li><a href="#">Tips & guides</a></li>
                                    <li><a href="#">finda a store</a></li>
                                    <li><a href="#">careers</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-md-6 align5 mt-2">
                                <div className="footer-end">
                                    <p>tel: +(507) 314-7709</p>
                                    <p>fax: +(507) 314-7709</p>
                                    <span><a href="#">info@tiendaconceptslife.com</a></span>
                                </div>
                            </div>
                            <div className="col-md-6 align2 mt-2">
                                <div className="footer-end">
                                    <p>Av. República de Brasil 303</p>
                                    <p>Panamá</p>
                                    <p>Panamá</p>
                                </div>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="footer-logo align3">
                                        <a href="#"><img src={logoimg} height="55"></img></a>
                                    </div>
                                        <div className="footer-end align5">
                                            <p>All rights reserved 2017 © Tienda concepts Life</p>
                                        </div>
                                </div>
                                </div>
                </div>
            </div>
            <div className="col-md-4 container-footer2">
                             <div className="row mt-4 top-1">
                                    <div className="col-md-3">
                                        <div className="footer-end align6">
                                            <p>Follow us</p>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="social-link">
                                            <a href="#"><i className="bi bi-twitter"></i></a>
                                            <a href="#"><i className="bi bi-facebook"></i></a>
                                            <a href="#"><i className="bi bi-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <div className="footer-end align6">
                                            <p>Created by erlanyerth@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
            </div>
    </div>
    </div>
    )
}
export default footer;