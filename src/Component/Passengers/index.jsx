const Passengers = () => {
    return (<>
        <div className="container">
            <div className="booking_tour_form">
                <h3 className="heading_theme">Passenger information</h3>
                <div className="tour_booking_form_box">
                    <form action="!#" id="tour_bookking_form_item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control bg_input"
                                        placeholder="First name*" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control bg_input"
                                        placeholder="Last name*" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control bg_input"
                                        placeholder="Email address (Optional)" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control bg_input"
                                        placeholder="Mobile number*" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>);
}
export default Passengers;