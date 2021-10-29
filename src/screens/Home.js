import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import Timer from '../components/Timer'
import QRCode from "react-qr-code";
const Home = () => {
    return (
        <div>
            <header id="header" class="fixed-top ">
<BottomNavBar/> 
  </header>
  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1><Timer/></h1>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <QRCode class="img-fluid animated" value="https://www.google.com"/>
         
        </div>
      </div>
    </div>

  </section>


        </div>
    )
}

export default Home
