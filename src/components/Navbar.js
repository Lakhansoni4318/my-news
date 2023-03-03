import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Country News
                                    </Link>
                                    <ul className="dropdown-menu" style={{ height: 'auto', maxHeight: '300px', overflowX: 'hidden' }}>
                                        <li><Link className="dropdown-item" to="/China">China</Link></li>
                                        <li><Link className="dropdown-item" to="/Canada">Canada</Link></li>
                                        <li><Link className="dropdown-item" to="/Czech Republic">Czech Republic</Link></li>
                                        <li><Link className="dropdown-item" to="/Germany">Germany</Link></li>
                                        <li><Link className="dropdown-item" to="/Egypt">Egypt</Link></li>
                                        <li><Link className="dropdown-item" to="/France">France</Link></li>
                                        <li><Link className="dropdown-item" to="/United Kingdom">United Kingdom</Link></li>
                                        <li><Link className="dropdown-item" to="/Hong Kong">Hong Kong</Link></li>
                                        <li><Link className="dropdown-item" to="/Hungary">Hungary</Link></li>
                                        <li><Link className="dropdown-item" to="/Indonesia">Indonesia</Link></li>
                                        <li><Link className="dropdown-item" to="/Ireland">Ireland</Link></li>
                                        <li><Link className="dropdown-item" to="/India">India</Link></li>
                                        <li><Link className="dropdown-item" to="/Italy">Italy</Link></li>
                                        <li><Link className="dropdown-item" to="/Japan">Japan</Link></li>
                                        <li><Link className="dropdown-item" to="/South Korea">South Korea</Link></li>
                                        <li><Link className="dropdown-item" to="/Lithuania">Lithuania</Link></li>
                                        <li><Link className="dropdown-item" to="/Latvia">Latvia</Link></li>
                                        <li><Link className="dropdown-item" to="/Mexico">Mexico</Link></li>
                                        <li><Link className="dropdown-item" to="/Malaysia">Malaysia</Link></li>
                                        <li><Link className="dropdown-item" to="/Nigeria">Nigeria</Link></li>
                                        <li><Link className="dropdown-item" to="/Netherlands">Netherlands</Link></li>
                                        <li><Link className="dropdown-item" to="/Norway">Norway</Link></li>
                                        <li><Link className="dropdown-item" to="/New Zealand">New Zealand</Link></li>
                                        <li><Link className="dropdown-item" to="/Philippines">Philippines</Link></li>
                                        <li><Link className="dropdown-item" to="/Poland">Poland</Link></li>
                                        <li><Link className="dropdown-item" to="/Portugal">Portugal</Link></li>
                                        <li><Link className="dropdown-item" to="/Romania">Romania</Link></li>
                                        <li><Link className="dropdown-item" to="/Serbia">Serbia</Link></li>
                                        <li><Link className="dropdown-item" to="/Russia">Russia</Link></li>
                                        <li><Link className="dropdown-item" to="/Saudi Arabia">Saudi Arabia</Link></li>
                                        <li><Link className="dropdown-item" to="/Sweden">Sweden</Link></li>
                                        <li><Link className="dropdown-item" to="/Singapore">Singapore</Link></li>
                                        <li><Link className="dropdown-item" to="/Thailand">Thailand</Link></li>
                                        <li><Link className="dropdown-item" to="/Turkey">Turkey</Link></li>
                                        <li><Link className="dropdown-item" to="/Taiwan">Taiwan</Link></li>
                                        <li><Link className="dropdown-item" to="/Ukraine">Ukraine</Link></li>
                                        <li><Link className="dropdown-item" to="/United States">United States</Link></li>
                                        <li><Link className="dropdown-item" to="/Uzbekistan">Uzbekistan</Link></li>
                                        <li><Link className="dropdown-item" to="/Venezuela">Venezuela</Link></li>
                                        <li><Link className="dropdown-item" to="/South Africa">South Africa</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }