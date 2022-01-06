import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./core/home";
import Signup from './user/signup';
const Mainrouter = () => (
    <div>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/signup" element={<Signup/>} />
        </Routes>
    </div>
);

export default Mainrouter;