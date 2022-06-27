import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../Home/Home";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
export default function Routing() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Home />


                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>


        </>
    )
}
