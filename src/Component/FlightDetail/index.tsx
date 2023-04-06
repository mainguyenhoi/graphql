//import TicketDeTail from "../TicketDetail";
import Images from "../../assets/img";
import useStyle from "../SearchResult/style";
import { isMobile } from "react-device-detect";
import TicketDeTail from "../TicketDetail";
import { useState } from "react";

export const FlightDetail = () => {
    const [showFlightDetail, setShowFlightDetail] = useState(false);

    const classes = useStyle();
    return (<>
        <div className="row">
            <div className="col-lg-3">
                <div className="left_side_search_area">
                    <div className="left_side_search_boxed">
                        <div className="left_side_search_heading">
                            <h5>Filter by price</h5>
                        </div>
                        <div className="filter-price">
                            <div id="price-slider"></div>
                        </div>
                        <button className="apply" type="button">Apply</button>
                    </div>
                    <div className="left_side_search_boxed">
                        <div className="left_side_search_heading">
                            <h5>Number of stops</h5>
                        </div>
                        <div className="tour_search_type">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultf1" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>1 stop</span>
                                        <span>20</span>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultf2" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>2 stop</span>
                                        <span>16</span>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultf3" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>3 stop</span>
                                        <span>30</span>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultf4" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>Non-stop</span>
                                        <span>22</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="left_side_search_boxed">
                        <div className="left_side_search_heading">
                            <h5>Flight className</h5>
                        </div>
                        <div className="tour_search_type">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultt1" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>Economy</span>
                                        <span>20</span>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultt2" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>Business</span>
                                        <span>26</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="left_side_search_boxed">
                        <div className="left_side_search_heading">
                            <h5>Airlines</h5>
                        </div>
                        <div className="tour_search_type">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaults1" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>Quatar Airways</span>
                                        <span>17</span>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaults2" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>Fly Amirates </span>
                                        <span>14</span>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaults3" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>Novo Air </span>
                                        <span>62</span>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaults4" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>Air Asia </span>
                                        <span>08</span>
                                    </span>
                                </label>
                            </div>
                            {/* <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaults5"/>
                                    <label className="form-check-label" for="flexCheckDefaults5"/>
                                        <span className="area_flex_one">
                                            <span>Singapore Airlines </span>
                                            <span>12</span>
                                        </span>
                                    </label>
                            </div> */}
                        </div>
                    </div>
                    <div className="left_side_search_boxed">
                        <div className="left_side_search_heading">
                            <h5>Refundable</h5>
                        </div>
                        <div className="tour_search_type">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultp1" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>Yes</span>
                                        <span>17</span>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultp2" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>No</span>
                                        <span>14</span>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultp3" />
                                <label className="form-check-label" >
                                    <span className="area_flex_one">
                                        <span>As per rules</span>
                                        <span>62</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="flight_search_result_wrapper">
                            <div className="flight_search_item_wrappper">
                                <div className="flight_search_items">
                                    <div className="multi_city_flight_lists">
                                        <div className="flight_multis_area_wrapper">
                                            <div className="flight_search_left">
                                                <div className="flight_logo">
                                                    <img src={Images.biman_bangla} alt="img" />
                                                </div>
                                                <div className="flight_search_destination">
                                                    <p>From</p>
                                                    <h3>New York</h3>
                                                    <h6>JFK - John F. Kennedy International...</h6>
                                                </div>
                                            </div>
                                            <div className="flight_search_middel">
                                                <div className="flight_right_arrow">
                                                    <img src={Images.right_arrow} alt="icon" />
                                                    <h6>Non-stop</h6>
                                                    <p>01h 05minute </p>
                                                </div>
                                                <div className="flight_search_destination">
                                                    <p>To</p>
                                                    <h3>London </h3>
                                                    <h6>LCY, London city airport </h6>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flight_search_right">
                                        <h5><del>$9,560</del></h5>
                                        <h2>$7,560<sup>*20% OFF</sup></h2>
                                        <a href="flight-booking-submission.html" className="btn btn_theme btn_sm">Book
                                            now</a>
                                        <p>*Discount applicable on some conditions</p>
                                        <h6 data-bs-toggle="collapse" data-bs-target="#collapseExample"
                                            aria-expanded="false" aria-controls="collapseExample"
                                            onClick={() => setShowFlightDetail(prev => !prev)}>Show more <i
                                                className="fas fa-chevron-down"></i></h6>
                                    </div>
                                </div>
                                <TicketDeTail collapse={showFlightDetail} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
