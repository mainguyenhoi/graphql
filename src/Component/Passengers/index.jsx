const Passengers = () => {
    return (<>
        <div className="container">
            <div class="booking_tour_form">
                <h3 class="heading_theme">Passenger information</h3>
                <div class="tour_booking_form_box">
                    <form action="!#" id="tour_bookking_form_item">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control bg_input"
                                        placeholder="First name*" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control bg_input"
                                        placeholder="Last name*" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control bg_input"
                                        placeholder="Email address (Optional)" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control bg_input"
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