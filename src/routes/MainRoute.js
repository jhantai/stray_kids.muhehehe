import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MenuPage from "../pages/MenuPage/MenuPage";
import AboutPage from "../pages/AboutPage/AboutPage";

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/'  element={<HomePage />} />
            <Route path='/about'  element={<AboutPage />} />
            <Route path='/foodlist'  element={<MenuPage />} />
        </Routes>
    );
};

export default MainRoute;