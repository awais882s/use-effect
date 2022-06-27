import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../Home/Home";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// pages
import About from '../About/About';
import Contact from '../contact/Contact';
import Login from '../Login/Login';
import Hook from "../Hooks/useState";
import Nopage from '../Login/Nopage';
export default function Routing() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='about' element={<About />} />
                        <Route path='/hooks/useState' element={<Hook />} />
                        <Route path="*" element={<Nopage />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>


        </>
    )
}
