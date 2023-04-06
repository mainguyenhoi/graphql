const BookingSubmission = () => {
    return (<>
        {/* <!-- Tour Booking Submission Areas --> */}
        <section id="tour_booking_submission" className="section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="tour_detail_right_sidebar">
                            <div className="tour_details_right_boxed">
                                <div className="tour_details_right_box_heading">
                                    <h3>Coupon code</h3>
                                </div>
                                <div className="coupon_code_area_booking">
                                    <form action="#!">
                                        <div className="form-group">
                                            <input type="text" className="form-control bg_input"
                                                placeholder="Enter coupon code" />
                                        </div>
                                        <div className="coupon_code_submit">
                                            <button className="btn btn_theme btn_md">Apply voucher</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>

                        <div className="tou_booking_form_Wrapper">
                            <div className="booking_tour_form">
                                <h3 className="heading_theme">Payment method</h3>
                                <div className="tour_booking_form_box">
                                    <div className="booking_payment_boxed">
                                        <form action="!#" id="payment_checked">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault1" value="red" />
                                                <label className="form-check-label" >
                                                    Payment by card
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault2" value="green" />
                                                <label className="form-check-label" >
                                                    Paypal
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault3" value="black" />
                                                <label className="form-check-label" >
                                                    Payoneer
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault4" value="white" />
                                                <label className="form-check-label" >
                                                    Cash on delivery
                                                </label>
                                            </div>
                                            <div className="payment_filed_wrapper">
                                                <div className="payment_card payment_toggle red">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control bg_input"
                                                                    placeholder="Card number" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control bg_input"
                                                                    placeholder="Cardholder name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control bg_input"
                                                                    placeholder="Date of expiry" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control bg_input"
                                                                    placeholder="Security code" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="paypal_payment payment_toggle green">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control bg_input"
                                                                    placeholder="Email Address" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="payoneer_payment payment_toggle black">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control bg_input"
                                                                    placeholder="Email Address" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="booking_tour_form_submit">
                                <div className="form-check write_spical_check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultf1" />
                                    <label className="form-check-label" >
                                        I read and accept all <a href="terms-service.html">Terms and conditios</a>

                                    </label>
                                </div>
                                <a href="booking-confirmation.html" className="btn btn_theme btn_md">Pay now</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    </>)
}
export default BookingSubmission;