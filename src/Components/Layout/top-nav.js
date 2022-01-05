import { Link } from 'react-router-dom';
import './nav.css';
//Bootstrap CSS
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//ReactStrap JS
import {Container, Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';

class TopNav extends Component {

        
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
         this.setState({
             user: res.data
         });
     }).catch(err => {
         console.log(err);
     });
 }
 
    render(){
       
        let buttons;
        if(this.state.user){
            buttons = (
               <div className="content">
                  <DropdownButton id="dropdown-basic"  title={this.state.user.user.email} >
                    <Dropdown.Item>
                    <Link to='/user-profile' className='nav-link'>User Profile</Link>
                   </Dropdown.Item>
                   <Dropdown.Item>
                   <Link to="/login" className='nav-link' onClick={() => localStorage.clear()
                     }>Logout</Link>
                   </Dropdown.Item>
                </DropdownButton>
               </div>     
            )
        }else{
           buttons = (
            <Link to='/login' className='nav-link'>Login</Link>
            )
        }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <Link to='/' className="navbar-brand"><span className='logo'>Blue</span> Express</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Link to='/' className='nav-link'>Home</Link>
                            <Link to='/about' className='nav-link'>About Us</Link>
                            <Link to='/notifications' className='nav-link'>notifications</Link>
                             {buttons}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
  }
}

export default TopNav;