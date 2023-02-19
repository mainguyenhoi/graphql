import React, { useState } from "react";
import { FlightDetail } from "../FlightDetail";
const SearchResult = () => {
    return (<>
        {/* <!-- Flight Search Areas --> */}

        <section id="explore_area" className="section_padding">
            <div className="container">
                {/* <!-- Section Heading --> */}
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="section_heading_center">
                            <h2>42 tours found</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9" style={{ width: '100%' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="flight_search_result_wrapper">
                                    <div className="flight_search_item_wrappper">
                                        <FlightDetail />
                                    </div>
                                </div>
                                <div className="load_more_flight">
                                    <button className="btn btn_md"><i className="fas fa-spinner"></i> Load more..</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default SearchResult;