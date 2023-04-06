import Images from "../../assets/img";

const BookingHistory = () => {
    return (<>
        {/* <!-- Dashboard Area --> */}
        <section id="dashboard_main_arae" className="section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="dashboard_sidebar">
                            <div className="dashboard_sidebar_user">
                                <img src={Images.dashboardUser} alt="img" />
                                <h3>Sherlyn Chopra</h3>
                                <p><a href="tel:+00-123-456-789">+00 123 456 789</a></p>
                                <p><a href="mailto:sherlyn@domain.com">sherlyn@domain.com</a></p>
                            </div>
                            <div className="dashboard_menu_area">
                                <ul>
                                    <li><a href="dashboard.html" className="active"><i
                                        className="fas fa-tachometer-alt"></i>Dashboard</a></li>
                                    <li className="dashboard_dropdown_button" id="dashboard_dropdowns"><i
                                        className="fas fa-address-card"></i>My bookings
                                        <span> <i className="fas fa-angle-down"></i></span>
                                        <div className="booing_sidebar_dashboard" id="show_dropdown_item"
                                            style={{ display: "none" }}>
                                            <ul>
                                                <li><a href="hotel-booking.html"><i className="fas fa-hotel"></i>Hotel
                                                    booking</a></li>
                                                <li><a href="flight-booking.html"><i className="fas fa-paper-plane"></i>Flight
                                                    booking</a></li>
                                                <li>
                                                    <a href="tour-booking.html">
                                                        <i className="fas fa-map"></i>Tour booking
                                                    </a>
                                                </li>
                                                <li><a href="booking-history.html">
                                                    <i className="fas fa-history"></i>Booking history</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="my-profile.html"><i className="fas fa-user-circle"></i>My profile</a></li>
                                    <li><a href="wallet.html"><i className="fas fa-wallet"></i>Wallet</a></li>
                                    <li><a href="notification.html"><i className="fas fa-bell"></i>Notifications</a></li>
                                    <li>
                                        <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fas fa-sign-out-alt"></i>Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="dashboard_main_top">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="dashboard_top_boxed">
                                        <div className="dashboard_top_icon">
                                            <i className="fas fa-shopping-bag"></i>
                                        </div>
                                        <div className="dashboard_top_text">
                                            <h3>Total bookings</h3>
                                            <h1>231</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="dashboard_top_boxed">
                                        <div className="dashboard_top_icon">
                                            <i className="fas fa-sync"></i>
                                        </div>
                                        <div className="dashboard_top_text">
                                            <h3>Pending bookings</h3>
                                            <h1>23</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard_common_table">
                            <h3>My bookings</h3>
                            <div className="table-responsive-lg table_common_area">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Sl no.</th>
                                            <th>Booking ID</th>
                                            <th>Booking type</th>
                                            <th>Booking amount</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01.</td>
                                            <td>#JK589V80</td>
                                            <td>Hotel</td>
                                            <td>$754.00</td>
                                            <td className="complete">Completed</td>
                                            <td><i className="fas fa-eye"></i></td>
                                        </tr>
                                        <tr>
                                            <td>02.</td>
                                            <td>#JK589V80</td>
                                            <td>Hotel</td>
                                            <td>$754.00</td>
                                            <td className="complete">Completed</td>
                                            <td><i className="fas fa-eye"></i></td>
                                        </tr>
                                        <tr>
                                            <td>03.</td>
                                            <td>#JK589V80</td>
                                            <td>Hotel</td>
                                            <td>$754.00</td>
                                            <td className="complete">Completed</td>
                                            <td><i className="fas fa-eye"></i></td>
                                        </tr>
                                        <tr>
                                            <td>04.</td>
                                            <td>#JK589V80</td>
                                            <td>Hotel</td>
                                            <td>$754.00</td>
                                            <td className="complete">Completed</td>
                                            <td><i className="fas fa-eye"></i></td>
                                        </tr>
                                        <tr>
                                            <td>05.</td>
                                            <td>#JK589V80</td>
                                            <td>Hotel</td>
                                            <td>$754.00</td>
                                            <td className="cancele">Canceled</td>
                                            <td><i className="fas fa-eye"></i></td>
                                        </tr>
                                        <tr>
                                            <td>06.</td>
                                            <td>#JK589V80</td>
                                            <td>Hotel</td>
                                            <td>$754.00</td>
                                            <td className="complete">Completed</td>
                                            <td><i className="fas fa-eye"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="pagination_area">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default BookingHistory;