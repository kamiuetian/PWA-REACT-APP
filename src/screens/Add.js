import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import { useState } from 'react'
//import axios from 'axios'

const Add = () => {
    const [email,setEmail]= useState('')
   /* const fetchAccount=()=>{
        axios.post('/getAccount', {
            email: this.email
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }*/
    return (
      <div>
        <section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row">
      <form class="php-email-form">
              <div class="row">
               <div class="form-group">
                  <input type="email" value={email} class="form-control" onInput={e=>setEmail(e.target.value)} name="email" id="email" required=""/>
                </div>
              </div>
              <div><button type="submit" className="btn btn-lg btn-primary go">Get Page</button></div>
            </form>
            </div>
        </div>
        </section>
            <BottomNavBar name='add' />
        
        </div>
    )
}

export default Add
