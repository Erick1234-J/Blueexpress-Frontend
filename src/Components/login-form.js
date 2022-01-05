import React, { Component } from 'react'
import { Link, Navigate} from 'react-router-dom';
import '../Components/login-form.css';
import axios from 'axios';


 class LoginForm extends Component {

    state = {
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
                   loggedIn: true,
                   email: '',
                   password: ''
               });  
              
           }
             if(res.data.status === 401){
                this.setState({msg: 'whoops! your password is wrong! try again'})
             }   
            
           
       }).catch(err => {
           
           this.setState({ isLoading: false });
           if(err.response.data.message){
               this.setState({message: "email is incorrect! enter your valid email"});
           }
          
       });
   }

   handler = () => {
      this.clear();
   }

   clear = () => {
      this.setState({
          [this.email]: "",
          [this.password]: ""
      });
  }


   render() {
   let err = '';
   let msg = '';
   if(this.state.message){
       err = (
           <div className="alert alert-danger" role="alert">
               {this.state.message}
            </div> 
       )
       
   }else if(this.state.msg){
       msg = (
           <div className="alert alert-danger" role="alert">
               {this.state.msg}
           </div>
       )
      
   }
       
   const isLoading = this.state.isLoading; 
    if(this.state.loggedIn){
        return <Navigate to="/" />
    }
    
       return (
           <div className="d-flex p-2 form-container">  
           <div className='header-text'>
               <Link to='/' className="navbar-brand"><span className='logo'>Blue</span> Express</Link>
               
               <p className='h2'>Sign into your Account</p>
           </div>
          {msg}
          {err} <br></br>
           <form onSubmit={this.handleInput}>
               <div className="mb-3">
                   <label htmlFor="UserEmailOrPhone" className="form-label">Email address</label>
                   <input type="email" className="form-control" name="email" onChange={e => this.email = e.target.value} placeholder='Enter your email or Phone Number' required/>
                   
               </div>
               <div className="mb-3">
                   <label htmlFor="InputPassword" className="form-label">Password</label>
                   <input type="password" className="form-control" name="password" onChange={e => this.password = e.target.value } placeholder='Enter A password'  required/>
               </div>
               
               <button type="submit" className="btn btn-primary" >
                   Submit
                   {isLoading ? (
                     <span  className="spinner-border spinner-border-sm ml-5"
                     role="status"
                     aria-hidden="true"></span>
                   ): (
                       <span></span>
                   )}
                   </button>
                   <button type="reset" className="btn btn-secondary" onClick={this.handler}>
                       Reset
                   </button>
                   
               <br></br><br></br>
               <div className='bottom-div'>
                   <p>Don't have an Account ?<Link to='/signup' className='sign-up-link'>  Sign Up</Link></p>  
               </div>
           </form>
         
       </div>
       )
   }
}

export default LoginForm