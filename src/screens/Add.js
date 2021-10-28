import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import { useState } from 'react'
import axios from 'axios'

const Add = () => {
    const [email,setEmail]= useState('')
    const fetchAccount=()=>{
        axios.post('/login', {
            email: this.email
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }
    return (
        <div className="main-content">
            <div className="row">
            <div className="form-container text-center">
           <h3>Enter Email to access your page</h3>
            <form class="form-signin">
      <input type="email" value={email} class="form-control" onInput={e=>setEmail(e.target.value)} placeholder="Secret" required autofocus/>
      <button className="btn btn-primary go" onClick="fetchAccount">Go</button>
    </form> 
    </div>  
    </div>
            <BottomNavBar name='add' />
        
        </div>
    )
}

export default Add
