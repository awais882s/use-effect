import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../Home/Home";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// pages
import About from '../About/About';
import Contact from '../contact/Contact';
import Login from '../Login/Login';
export default function Routing() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <ma in>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='about' element={<About />} />


                    </Routes>
                </ma>
                <Footer />
            </BrowserRouter>


        </>
    )
}
