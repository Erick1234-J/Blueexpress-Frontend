import React, { Component } from "react";
import LoginForm from "../Components/login-form";
import axios from 'axios';

class Login extends Component{

            
state = {
     
};

 componentDidMount(){
  let token = localStorage.getItem('token');
     axios('http://localhost:8000/api/user',{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
     })
     .then(res => {
         console.log(res.data);
        this.setUser(res.data.user.user);
     }).catch(err => {
         console.log(err);
     });
 }

    setUser = user => {
        this.setState({
            user: user
        });
    } 
 

   render(){ 
    return(
        <div>
            <LoginForm setUser= {this.setUser} />
        </div>
    )
   }
}

export default Login;