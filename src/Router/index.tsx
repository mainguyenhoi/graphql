import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { HomeContainer } from "../Container/HomeContainer";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeContainer />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;