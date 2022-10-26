import React from "react";
import image from './img/index'
require('./css/style.css');
require('./css/style.min.css');

const Home = () => {
    return (
        <>
            <div>
                <div className="container-fluid bg-primary py-3 d-none d-md-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                                <div className="d-inline-flex align-items-center">
                                    <a className="text-white pr-3" href="">FAQs</a>
                                    <span className="text-white">|</span>
                                    <a className="text-white px-3" href="">Help</a>
                                    <span className="text-white">|</span>
                                    <a className="text-white pl-3" href="">Support</a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-lg-right">
                                <div className="d-inline-flex align-items-center">
                                    <a className="text-white px-3" href="">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="text-white px-3" href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="text-white px-3" href="">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="text-white px-3" href="">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="text-white pl-3" href="">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid position-relative nav-bar p-0">
                    <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
                        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                            <a href="index.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav ml-auto py-0">
                                    <a href="/" className="nav-item nav-link active">Home</a>
                                    <a href="about" className="nav-item nav-link">About</a>
                                    <a href="product" className="nav-item nav-link">Product</a>
                                </div>
                                <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
                                    <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                                </a>
                                <div className="navbar-nav mr-auto py-0">
                                    <a href="service" className="nav-item nav-link">Service</a>
                                    <a href="gallery" className="nav-item nav-link">Gallery</a>
                                    <a href="contact" className="nav-item nav-link">Contact</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="container-fluid p-0 mb-5 pb-5">
                    <div id="header-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src={image.carousel1} alt="carousel" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: '900px' }}>
                                        <h4 className="text-white text-uppercase mb-md-3">Traditional & Delicious</h4>
                                        <h1 className="display-3 text-white mb-md-4">Traditional Ice Cream Since 1950</h1>
                                        <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src={image.carousel2} alt="carousel" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: '900px' }}>
                                        <h4 className="text-white text-uppercase mb-md-3">Traditional & Delicious</h4>
                                        <h1 className="display-3 text-white mb-md-4">Made From Our Own Organic Milk</h1>
                                        <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                            <div className="btn btn-secondary px-0" style={{ width: '45px', height: '45px' }}>
                                <span className="carousel-control-prev-icon mb-n1"></span>
                            </div>
                        </a>
                        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                            <div className="btn btn-secondary px-0" style={{ width: '45px', height: '45px' }}>
                                <span className="carousel-control-next-icon mb-n1"></span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <h1 className="section-title position-relative text-center mb-5">Traditional & Delicious Ice Cream Since 1950</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 py-5">
                                <h4 className="font-weight-bold mb-3">About Us</h4>
                                <h5 className="text-muted mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
                                <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                                <a href="" className="btn btn-secondary mt-2">Learn More</a>
                            </div>
                            <div className="col-lg-4" style={{ minHeight: '400px' }}>
                                <div className="position-relative h-100 rounded overflow-hidden">
                                    <img className="position-absolute w-100 h-100" src={image.about} style={{ objectFit: 'cover' }} alt='about' />
                                </div>
                            </div>
                            <div className="col-lg-4 py-5">
                                <h4 className="font-weight-bold mb-3">Our Features</h4>
                                <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                                <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
                                <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
                                <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
                                <a href="" className="btn btn-primary mt-2">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid my-5 py-5 px-0">
                    <div className="row bg-primary m-0">
                        <div className="col-md-6 px-0" style={{ minHeight: '500px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src={image.promotion} style={{ objectFit: 'cover' }} />
                                <button type="button" className="btn-play" data-toggle="modal"
                                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                    <span></span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 py-5 py-md-0 px-0">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                                <div className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                                    style={{ width: '100px', height: '100px' }}>
                                    <h3 className="font-weight-bold text-secondary mb-0">$199</h3>
                                </div>
                                <h3 className="font-weight-bold text-white mt-3 mb-4">Chocolate Ice Cream</h3>
                                <p className="text-white mb-4">Lorem justo clita dolor ipsum ut sed eos, ipsum et dolor kasd sit ea
                                    justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                                <a href="" className="btn btn-secondary py-3 px-5 mt-2">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="videoModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="" id="video" allow="autoplay"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="section-title position-relative mb-5">Best Services We Provide For Our Clients</h1>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="owl-carousel service-carousel">
                                    <div className="service-item">
                                        <div className="service-img mx-auto">
                                            <img className="rounded-circle w-100 h-100 bg-light p-3" src={image.service1} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                                            <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Quality Maintain</h5>
                                            <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                            <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <div className="service-img mx-auto">
                                            <img className="rounded-circle w-100 h-100 bg-light p-3" src={image.service2} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                                            <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Individual Approach</h5>
                                            <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                            <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <div className="service-img mx-auto">
                                            <img className="rounded-circle w-100 h-100 bg-light p-3" src={image.service3} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                                            <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Celebration Ice Cream</h5>
                                            <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                            <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <div className="service-img mx-auto">
                                            <img className="rounded-circle w-100 h-100 bg-light p-3" src={image.service4} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                                            <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Delivery To Any Point</h5>
                                            <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                            <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid my-5 py-5 px-0">
                    <div className="row justify-content-center m-0">
                        <div className="col-lg-5">
                            <h1 className="section-title position-relative text-center mb-5">Delicious Ice Cream Made From Our Very Own Organic Milk</h1>
                        </div>
                    </div>
                    <div className="row m-0 portfolio-container">
                        <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={image.portfolio1} alt="" />
                                <a className="portfolio-btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={image.portfolio2} alt="" />
                                <a className="portfolio-btn" href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={image.portfolio3} alt="" />
                                <a className="portfolio-btn" href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={image.portfolio4} alt="" />
                                <a className="portfolio-btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={image.portfolio5} alt="" />
                                <a className="portfolio-btn" href="img/portfolio-5.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={image.portfolio6} alt="" />
                                <a className="portfolio-btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="section-title position-relative mb-5">Best Prices We Offer For Ice Cream Lovers</h1>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="owl-carousel product-carousel">
                                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                                            <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                        </div>
                                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                                            <img className="rounded-circle w-100 h-100" src={image.product1} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                        <a href="" className="btn btn-sm btn-secondary">Order Now</a>
                                    </div>
                                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                                            <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                        </div>
                                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                                            <img className="rounded-circle w-100 h-100" src={image.product2} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                        <a href="" className="btn btn-sm btn-secondary">Order Now</a>
                                    </div>
                                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                                            <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                        </div>
                                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                                            <img className="rounded-circle w-100 h-100" src={image.product3} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                        <a href="" className="btn btn-sm btn-secondary">Order Now</a>
                                    </div>
                                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                                            <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                        </div>
                                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                                            <img className="rounded-circle w-100 h-100" src={image.product4} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                        <a href="" className="btn btn-sm btn-secondary">Order Now</a>
                                    </div>
                                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                                            <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                        </div>
                                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                                            <img className="rounded-circle w-100 h-100" src={image.product5} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                        <a href="" className="btn btn-sm btn-secondary">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="section-title position-relative mb-5">Experienced & Most Famous Ice Cream Chefs</h1>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="owl-carousel team-carousel">
                                    <div className="team-item">
                                        <div className="team-img mx-auto">
                                            <img className="rounded-circle w-100 h-100" src={image.team1} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded px-4 py-5" style={{ marginTop: '-100px' }}>
                                            <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                            <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                            <div className="d-flex justify-content-center pt-1">
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img mx-auto">
                                            <img className="rounded-circle w-100 h-100" src={image.team2} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded px-4 py-5" style={{ marginTop: '-100px' }}>
                                            <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                            <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                            <div className="d-flex justify-content-center pt-1">
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img mx-auto">
                                            <img className="rounded-circle w-100 h-100" src={image.team3} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded px-4 py-5" style={{ marginTop: '-100px' }}>
                                            <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                            <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                            <div className="d-flex justify-content-center pt-1">
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img mx-auto">
                                            <img className="rounded-circle w-100 h-100" src={image.team4} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded px-4 py-5" style={{ marginTop: '-100px' }}>
                                            <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                            <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                            <div className="d-flex justify-content-center pt-1">
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h1 className="section-title position-relative text-center mb-5">Clients Say About Our Famous Ice Cream</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="owl-carousel testimonial-carousel">
                                    <div className="text-center">
                                        <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                        <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                        <img className="img-fluid mx-auto mb-3" src={image.testimonial1} alt="" />
                                        <h5 className="font-weight-bold m-0">Client Name</h5>
                                        <span>Profession</span>
                                    </div>
                                    <div className="text-center">
                                        <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                        <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                        <img className="img-fluid mx-auto mb-3" src={image.testimonial2} alt="" />
                                        <h5 className="font-weight-bold m-0">Client Name</h5>
                                        <span>Profession</span>
                                    </div>
                                    <div className="text-center">
                                        <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                        <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                        <img className="img-fluid mx-auto mb-3" src={image.testimonial3} alt="" />
                                        <h5 className="font-weight-bold m-0">Client Name</h5>
                                        <span>Profession</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid footer bg-light py-5" style={{ marginTop: '90px' }}>
                    <div className="container text-center py-5">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <a href="index.html" className="navbar-brand m-0">
                                    <h1 className="m-0 mt-n2 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                                </a>
                            </div>
                            <div className="col-12 mb-4">
                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-secondary btn-social" href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="col-12 mt-2 mb-4">
                                <div className="row">
                                    <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                                        <h5 className="font-weight-bold mb-2">Get In Touch</h5>
                                        <p className="mb-2">123 Street, New York, USA</p>
                                        <p className="mb-0">+012 345 67890</p>
                                    </div>
                                    <div className="col-sm-6 text-center text-sm-left">
                                        <h5 className="font-weight-bold mb-2">Opening Hours</h5>
                                        <p className="mb-2">Mon – Sat, 8AM – 5PM</p>
                                        <p className="mb-0">Sunday: Closed</p>className
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <p className="m-0">&copy; <a href="#">Domain</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;