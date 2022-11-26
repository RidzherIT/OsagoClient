import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogOne from "../pages/BlogOne";
import Contacts from "../pages/Contacts";
import Delivery from "../pages/Delivery";
import Error from "../pages/Error";
import Main from "../pages/Main";
import Map from "../pages/Map";
import FullPolis from "../pages/FullPolis";
import Photo from "../pages/Photo";
import Promo from "../pages/Promo";
import Osago from "../pages/Osago";
import OurRecommend from "../components/OurRecommend";
import Dgo from "../pages/Dgo";
import GreenCard from "../pages/GreenCard";
import Tourists from "../pages/Tourists";
import Casco from "../pages/Casco";
import Weapon from "../pages/Weapon";
import Notary from "../pages/Notary";
import Realty from "../pages/Realty";
import Covid from "../pages/Covid";
import Health from "../pages/Health";
import Assistans from "../pages/Assistans";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/photo" element={<Photo />} />
                    <Route path="/promo" element={<Promo />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogOne />} />
                    <Route path="/fullPolis" element={<FullPolis />} />
                    <Route path="/osago" element={<Osago />} />
                    <Route path="/dgo" element={<Dgo />} />
                    <Route path="/greenCard" element={<GreenCard />} />
                    <Route path="/tourists" element={<Tourists />} />
                    <Route path="/casco" element={<Casco />} />
                    <Route path="/weapon" element={<Weapon />} />
                    <Route path="/notary" element={<Notary />} />
                    <Route path="/realty" element={<Realty />} />
                    <Route path="/covid" element={<Covid />} />
                    <Route path="/health" element={<Health />} />
                    <Route path="/assistans" element={<Assistans />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}