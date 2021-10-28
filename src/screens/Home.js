import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import Timer from '../components/Timer'
import QRCode from "react-qr-code";
const Home = () => {
    return (
        <div className="main-content">
        <div className="row">
        
            <div className="qr-container">
            <h6>Text1</h6>
        <QRCode value="https://google.com" size="250"/>
        </div>
        </div>
        <div className="row">
        <div className="time-container">
            <h6>Text2</h6> 
            </div> 
</div>
<div className="row">
        <div className="time-container">
            <h6>Text3</h6> 
            </div> 
</div>
<div className="row">
        <div className="time-container">
            <h6>Text4</h6> 
            </div> 
</div>
<div className="row">
        <div className="time-container">
            <h6>Text5</h6> 
            </div> 
</div>
        <div className="row">
        <div className="time-container">
            <Timer/> 
            </div> 
</div>

            
            <BottomNavBar name='home' />
            
        </div>
    )
}

export default Home
