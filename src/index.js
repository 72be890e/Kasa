import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/main.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Housing from "./pages/Housing";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div className='structure-container'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/housing/:housingId' element={<Housing />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </div>
        <Footer />
    </React.StrictMode>
);
