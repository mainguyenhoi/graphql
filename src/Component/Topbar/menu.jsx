const Menu = () => {
    return (<>
        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        Home
                        {/*{/* <i className="fas fa-angle-down"></i> */}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/tours" className="nav-link">
                        Tours
                        {/* <i className="fas fa-angle-down"></i> */}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/flights" className="nav-link active">
                        Flights
                        {/* <i className="fas fa-angle-down"></i> */}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/hotel" className="nav-link">
                        Hotel
                        {/* <i className="fas fa-angle-down"></i> */}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/visa" className="nav-link">
                        Visa
                        {/* <i className="fas fa-angle-down"></i> */}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link">Contact</a>
                </li>
            </ul>
            <div className="others-options d-flex align-items-center">
                {/* <div className="option-item">
                    <a href="/" className="search-box">
                        <i className="bi bi-search"></i></a>
                </div> */}
                <div className="option-item">
                    <a href="become-vendor.html" className="btn  btn_navber">Become a partner</a>
                </div>
            </div>
        </div>
    </>)
}
export default Menu;