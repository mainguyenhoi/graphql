import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HotelBooking from "../Component/HotelBooking";
import Header from "../Component/Topbar";
import { HomeContainer } from "../Container/HomeContainer";
import Travel from "../Component/Travel";
import HotDeal from "../Component/HotDeal";
import ErrorPage from "../Component/Error";
import BookingSubmission from "../Component/BookingSubmission";
import BookingHistory from "../Component/BookingHistory";
import Login from "../Component/Login";
import Register from "../Component/Register";
import AddOn from "../Component/AddOn";
import Passengers from "../Component/Passengers";
import BookingSummary from "../Component/BookingSummary";
import BookingConfirmation from "../Component/BookingConfirmation";
const Router = () => {
    return (
        <>
            <div style={{
                //position: 'sticky', 
                top: '0',
                zIndex: 999,
                background: 'white'
            }}>
                <Header />
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeContainer />} />
                    <Route path='/hotel' element={<HotelBooking />} />
                    <Route path='/travel' element={<Travel />} />
                    <Route path='/hot-deal' element={<HotDeal />} />
                    <Route path='/not-found' element={<ErrorPage />} />
                    <Route path='/booking-submission' element={<BookingSubmission />} />
                    <Route path='/booking-history' element={<BookingHistory />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/add-on' element={<AddOn />} />
                    <Route path='/passengers' element={<Passengers />} />
                    <Route path='/booking-summary' element={<BookingSummary />} />
                    <Route path='/booking-confirmation' element={<BookingConfirmation />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Router;