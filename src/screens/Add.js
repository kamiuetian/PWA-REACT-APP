import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Add = () => {
    return (
        <div className="text-center">
            
            <h3>Enter your secret to access your page</h3>
            <form class="form-signin">
      <input type="text" class="form-control" placeholder="Secret" required autofocus/>
    </form>   
            <BottomNavBar name='add' />
        </div>
    )
}

export default Add
