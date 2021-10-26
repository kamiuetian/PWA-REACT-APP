import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import Timer from '../components/Timer'
const Home = () => {
    return (
        <div>
            <Timer/>
            <BottomNavBar name='home' />
        </div>
    )
}

export default Home
