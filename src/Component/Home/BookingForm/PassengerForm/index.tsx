import React from "react";
const PassenferForm = () => {
    return (<>
        <div className="dropdown">
            <button className="dropdown-toggle final-count">
                0 Passenger
            </button>
            <div className="dropdown-menu dropdown_passenger_info"
                aria-labelledby="dropdownMenuButton1">
                <div className="traveller-calulate-persons">
                    <div className="passengers">
                        <h6>Passengers</h6>
                        <div className="passengers-types">
                            <div className="passengers-type">
                                <div className="text"><span
                                    className="count pcount">2</span>
                                    <div className="type-label">
                                        <p>Adult</p>
                                        <span>12+
                                            yrs</span>
                                    </div>
                                </div>
                                <div className="button-set">
                                    <button type="button"
                                        className="btn-add">
                                        <i
                                            className="fas fa-plus"></i>
                                    </button>
                                    <button type="button"
                                        className="btn-subtract">
                                        <i
                                            className="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="passengers-type">
                                <div className="text"><span
                                    className="count ccount">0</span>
                                    <div className="type-label">
                                        <p
                                            className="fz14 mb-xs-0">
                                            Children
                                        </p><span>2
                                            - Less than 12
                                            yrs</span>
                                    </div>
                                </div>
                                <div className="button-set">
                                    <button type="button"
                                        className="btn-add-c">
                                        <i
                                            className="fas fa-plus"></i>
                                    </button>
                                    <button type="button"
                                        className="btn-subtract-c">
                                        <i
                                            className="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="passengers-type">
                                <div className="text"><span
                                    className="count incount">0</span>
                                    <div className="type-label">
                                        <p
                                            className="fz14 mb-xs-0">
                                            Infant
                                        </p><span>Less
                                            than 2
                                            yrs</span>
                                    </div>
                                </div>
                                <div className="button-set">
                                    <button type="button"
                                        className="btn-add-in">
                                        <i
                                            className="fas fa-plus"></i>
                                    </button>
                                    <button type="button"
                                        className="btn-subtract-in">
                                        <i
                                            className="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cabin-selection">
                        <h6>Cabin className</h6>
                        <div className="cabin-list">
                            <button type="button"
                                className="label-select-btn">
                                <span
                                    className="muiButton-label">Economy
                                </span>
                            </button>
                            <button type="button"
                                className="label-select-btn active">
                                <span
                                    className="muiButton-label">
                                    Business
                                </span>
                            </button>
                            <button type="button"
                                className="label-select-btn">
                                <span
                                    className="MuiButton-label">First className</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div></>)
}
export default PassenferForm;