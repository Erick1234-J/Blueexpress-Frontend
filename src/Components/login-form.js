import React, { Component } from 'react'
import { Link, Navigate} from 'react-router-dom';
import '../Components/login-form.css';
import axios from 'axios';


 class LoginForm extends Component {

     state = {
         msg: '',
         isLoading: '',
         loggedIn: false
        
         
     }

    handleInput = e =>{
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        }
       this.setState({ isLoading: true });
        let token = localStorage.getItem('token');
        axios.post('http://localhost:8000/api/login',data,{
            'Authorization': `Bearer ${token}`
        })
        .then(res => {
            this.setState({ isLoading: false });
            if(res.data.status === 200){
                
                localStorage.setItem('token', res.data.token);
                this.setState({ 
                    msg: res.data.message,
                    loggedIn: true,
                    email: '',
                    password: ''
                });  
               
            }
             if(res.data.status === 401){
                 this.setState({msg: 'whoops! wrong credentials! try again'})
             }   
             
            
        }).catch(err => {
            
            console.log(err.message);
        });
    }

   
    render() {
        
        const isLoading = this.state.isLoading;
        const message = this.state.msg;
       
     if(this.state.loggedIn){
         return <Navigate to="/" />
     }
        return (
            <div className="d-flex p-2 form-container">  
            <div className='header-text'>
                <Link to='/' className="navbar-brand"><span className='logo'>Blue</span> Express</Link>
                
                <p className='h2'>Sign into your Account</p>
            </div>
            <form onSubmit={this.handleInput}>
                <div className="mb-3">
                    <label htmlFor="UserEmailOrPhone" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={e => this.email = e.target.value} placeholder='Enter your email or Phone Number' required/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={e => this.password = e.target.value } placeholder='Enter A password' required/>
                </div>
                
                <button type="submit" className="btn btn-primary">
                    Submit
                    {isLoading ? (
                      <span  className="spinner-border spinner-border-sm ml-5"
                      role="status"
                      aria-hidden="true"></span>
                    ): (
                        <span></span>
                    )}
                    </button>
                <br />
                 <span>{message}</span>
                <div className='bottom-div'>
                    <p>Don't have an Account ?<Link to='/signup' className='sign-up-link'>  Sign Up</Link></p>
                </div>
            </form>
          
        </div>
        )
    }
}

export default LoginForm
