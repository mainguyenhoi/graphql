import Images from "../../assets/img";
const AddOnType = () => {
    return (<>
        <div className="flight_search_item_wrappper">
            <div className="flight_search_items">
                <div className="multi_city_flight_lists">
                    <div className="flight_multis_area_wrapper">
                        <div className="flight_search_left">
                            <div className="flight_logo">
                                <img src={Images.biman_bangla} alt="img" />
                            </div>
                            <div className="flight_search_destination">
                                <h3>Chọn chỗ ngồi yêu thích</h3>
                                <h6>Hãy chọn chỗ ngồi yêu thích của bạn</h6>
                                <h4>Nguyễn Văn A - A1</h4>
                                <h4>Nguyễn Văn B - B1</h4>
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
                    <h6 data-bs-toggle="collapse" data-bs-target="#collapseExample2"
                        aria-expanded="false" aria-controls="collapseExample2">Show more <i
                            className="fas fa-chevron-down"></i></h6>
                </div>
            </div>
        </div>
    </>)
}
export default AddOnType;