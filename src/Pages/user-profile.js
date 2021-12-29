import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./user-profile.css";
import axios from 'axios';

class UserProfile extends Component {

        
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
         this.setState({
             user: res.data
         });
     }).catch(err => {
         console.log(err);
     });
 }

 
 
   
    render(){
       

        let button;
        if(this.state.user){
           
                button = (
                    <div className="container mt-2 text-center">    
                        <div className="card">
                            <div className="card-title">
                              <h5>User Profile Settings</h5>
                            </div>
                            <div className="card-body">
                                <h5>
                                    Name: {this.state.user.user.name}
                                </h5>
                                <h5>
                                    Email: {this.state.user.user.email}
                                </h5>
                                <h5>
                                    Account Created: {this.state.user.user.created_at}
                                </h5>
                                <h5>
                                    LoggedIn: {this.state.user.user.created_at}
                                </h5>
                                <h5>
                                    Parcels available: <span className="badge"></span>{this.state.user.data}
                                </h5>
                                {this.state.user.track.map(num => {
                                        return (
                                         <h5>
                                           Your Tracking Number:  {num.Reference}
                                         </h5>   
                                        )
                                    })}
                                
                                <h6>
                                    <Link to='/' className='nav-link'>Back To Home</Link>
                                </h6>
                                <h6>
                                <Link to="/login" className='nav-link' onClick={() => localStorage.clear()
                                 }> Logout</Link>
                                </h6>
                            </div>
                        </div>   
                    </div>  
                    ) 
        }
    return (
        <div className="container">
            {button}
        </div>    
    )
  }
}

export default UserProfile;