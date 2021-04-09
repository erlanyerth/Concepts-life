import React from 'react'
import logoimg from '../images/concepts.png'
import './styles/header.css'
import { Link } from 'react-router-dom'

const Nav = () => (
    <nav className="navbar-expand-lg background-color">
      <div className="row">
        <div className="col-md-8 background-blue-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="margin-left">
                  <a  href="#">
                    <img src={logoimg} alt="" height="50"/>
                  </a>
                </div>
                  <ul className="menu-aligh font-size-3 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Trends</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Collections</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Tips & guides</a>
                      </li>
                  </ul>
              </div>
            </div>
          </div>
        <div className="col-md-4 background-pink">
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="menu-aligh font-size-3 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Find a store</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact us</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="bi bi-search"></i></a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </nav>
)
export default Nav