import React from 'react';
import './Hero-banner.css';

const HeroBanner = () => {

    return (
        <div className="hero-banner row">
            <div className="col-3 left-banner"></div>
            <div className="text col-6 ">
                <h1>SELAMAT DATANG</h1>
                <h1>DI TOKO LEMARI ES MURAH</h1>              
            </div>
            <div className="col-3 right-banner"></div>
        </div>
    );

}

export default HeroBanner;
