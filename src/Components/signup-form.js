import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Components/login-form.css';
import axios from 'axios';

export class SignUpForm extends Component {

    state = {
        isLoading: "",
        msg: ""
    }
    

    handleInput = e => {
        e.preventDefault();

        const data = {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.confirm_password
        };
       
        this.setState({ isLoading: true });

        axios.post('http://localhost:8000/api/register', data)
        .then(res => {
            this.setState({ isLoading: false});
            if(res.data.status === 200){
                this.setState({
                  msg: res.data.message,
                  name: '',
                  email: '',
                  password: '',
                  password_confirmation: ''
                });
                setTimeout(() => {
                   this.setState({ msg: '' });
                }, 4000);
            } 
        }).catch(err => {
            this.setState({ isLoading: false});
            if(err.response.data.errors){
                this.setState({error: err.response.data.errors.password_confirmation,
                               errorTwo: err.response.data.errors.email
                });
            }
        });

    }

    handler = () => {
        this.clear();
     }
  
     clear = () => {
        this.setState({
            [this.email]: "",
            [this.password]: "",
            [this.password]: "",
            [this.confirm_password]: ""
        });
    }
    render() {
        const isLoading = this.state.isLoading;
        let message = '';
        let error = '';
        let errorTwo = '';
        if(this.state.msg){
           message = (
            <div className="alert alert-success" role="alert">
               {this.state.msg}
            </div> 
           )
        }else if(this.state.error){
           error = (
            <div className="alert alert-danger" role="alert">
              {this.state.error}
            </div> 
           )
        }else if(this.state.errorTwo){
              errorTwo = (
                <div className="alert alert-danger" role="alert">
                   {this.state.errorTwo}
                </div>
              )
        }
        return (
            <div className="d-flex p-2 form-container">
            <div className='header-text'>
                <Link to='/' class="navbar-brand"><span className='logo'>Blue</span> Express</Link>
                
                <p className='h2'>Create an Account</p>
            </div>
            {message}
            {error}
            {errorTwo}
            <form onSubmit={this.handleInput}>
            <div className="mb-3">
                    <label htmlFor="Username" className="form-label">User name: </label>
                    <input type="text" className="form-control"  placeholder='Enter your full name or username' onChange={e => this.name = e.target.value }  required/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="UserEmailOrPhone" className="form-label">Email or Phone Number: </label>
                    <input type="text" className="form-control"  placeholder='Enter an Email or Phone Number' onChange={e => this.email = e.target.value }  required/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control"  placeholder='Enter A Password' onChange={e => this.password = e.target.value } required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" placeholder='Confirm Your Password'onChange={e => this.confirm_password = e.target.value }  required/>
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
                    <button type="reset" className="btn btn-secondary" onClick={this.handler}>
                       Reset
                   </button>
             <br></br>        
                <div class='bottom-div'>
                    <p>Already Have an Account ?<Link to='/login'>  Login</Link></p>
                </div>
            </form>
        </div>
        )
    }
}

export default SignUpForm
