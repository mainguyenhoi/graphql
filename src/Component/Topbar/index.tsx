import React from "react";
import Images from "../../assets/img";
import Menu from "./menu";
require('../../assets/css/navber.css');
require('../../assets/css/bootstrap.min.css');
require('../../assets/css/animate.min.css');
require('../../assets/css/fontawesome.all.min.css');
require('../../assets/css/meanmenu.css');
require('../../assets/css/owl.carousel.min.css');
require('../../assets/css/style.css');
require('../../assets/css/nouislider.css');
require('../../assets/css/owl.theme.default.min.css');
require('../../assets/css/responsive.css');


const TopBar = () => {

    return (<>
        <header className="main_header_arae">
            {/* <!-- Top Bar --> */}
            <div className="topbar-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <ul className="topbar-list">
                                <li>
                                    <a href="#!"><i className="fab fa-facebook"></i></a>
                                    <a href="#!"><i className="fab fa-twitter-square"></i></a>
                                    <a href="#!"><i className="fab fa-instagram"></i></a>
                                    <a href="#!"><i className="fab fa-linkedin"></i></a>
                                </li>
                                <li><a href="#!"><span>+011 234 567 89</span></a></li>
                                <li><a href="#!"><span>contact@domain.com</span></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ul className="topbar-others-options">
                                <li><a href="login.html">Login</a></li>
                                <li><a href="register.html">Sign up</a></li>
                                <li>
                                    <div className="dropdown language-option">
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <span className="lang-name"></span>
                                        </button>
                                        <div className="dropdown-menu language-dropdown-menu">
                                            <a className="dropdown-item" href="#">English</a>
                                            <a className="dropdown-item" href="#">Arabic</a>
                                            <a className="dropdown-item" href="#">French</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown language-option">
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <span className="lang-name"></span>
                                        </button>
                                        <div className="dropdown-menu language-dropdown-menu">
                                            <a className="dropdown-item" href="#">USD</a>
                                            <a className="dropdown-item" href="#">BD</a>
                                            <a className="dropdown-item" href="#">URO</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Navbar Bar --> */}
            <div className="navbar-area">
                <div className="main-responsive-nav">
                    <div className="container">
                        <div className="main-responsive-menu">
                            <div className="logo">
                                <a href="/">
                                    <img src={Images.logo} alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-navbar" style={{
                    position: 'sticky',
                    top: '0'
                }}>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="/">
                                <img src={Images.logo} alt="logo" />
                            </a>
                            <Menu />
                        </nav>
                    </div>
                </div>
                <div className="others-option-for-responsive">
                    <div className="container">
                        <div className="dot-menu">
                            <div className="inner">
                                <div className="circle circle-one"></div>
                                <div className="circle circle-two"></div>
                                <div className="circle circle-three"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="option-inner">
                                <div className="others-options d-flex align-items-center">
                                    <div className="option-item">
                                        <a href="#" className="search-box"><i className="fas fa-search"></i></a>
                                    </div>
                                    <div className="option-item">
                                        <a href="contact.html" className="btn  btn_navber">Get free quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- search --> */}
        <div className="search-overlay">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="search-overlay-layer"></div>
                    <div className="search-overlay-layer"></div>
                    <div className="search-overlay-layer"></div>
                    <div className="search-overlay-close">
                        <span className="search-overlay-close-line"></span>
                        <span className="search-overlay-close-line"></span>
                    </div>
                    <div className="search-overlay-form">
                        <form>
                            <input type="text" className="input-search" placeholder="Search here..." />
                            <button type="button"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Common Banner Area --> */}
        <section id="common_banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="common_bannner_text">
                            <h2>Flight search result</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><span><i className="fas fa-circle"></i></span> Flight search result</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default TopBar;