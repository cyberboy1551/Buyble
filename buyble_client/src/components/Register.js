import React, { Component } from 'react';
import Client from '../client.js';

export class Register extends Component {
    
    render() {
        return(
            <div className="Register">
                <p>Register!</p> 
                <input type="email" id="emailRegister" placeholder="Email..." /><br /> 
                <input type="text" id="storeNameRegister" placeholder="Store Name..." /><br />
                <input type="password" id="passwordRegister" placeholder="Password..." /><br />
                <input type="password" id="repeatPasswordRegister" placeholder="Repeat Password..." /><br />
                <button onClick={this.onClickRegister}>Register</button><br />
                <p id="notTxt"></p>
            </div>
        )
    }
   
}
