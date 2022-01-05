import {Link} from 'react-router-dom'
import React, {Component} from 'react';
import axios from 'axios';

class UserInProfile extends Component {

            
constructor(props) {
    super(props)

   this.state = {

   }
  
}


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
        let buttons;
        if(this.state.user){
          buttons = (
            <div>
            <div id="top-div">

            </div>


            <div className="row container">
                <h1>Profile</h1>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xm-6">
                    <div id="profile-div">
                        <p> <span className="text"> Name:  </span><span >{this.state.user.user.name} </span><Link to='/'>Edit</Link></p>
                        <p><span className="text"> Email Address:</span>  <span >{this.state.user.user.email} </span><Link to='/'>Edit</Link></p>
                        <p><span className="text">Parcel Tracking Numbers: </span> <span >{this.state.user.track.map(num => {
                                        return (
                                         <p>{num.Reference}</p>   
                                        )
                                    })}</span><Link to='/'>Edit</Link></p>

                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 col-xm-5">
                    <div id="notif-div">
                    <span className="text">Parcels shipped:</span> <span>{this.state.user.shipped}</span>
                        <br /><br />
                        <span className="text">Parcels in transit:</span> <span>{this.state.user.transit}</span>
                        <br /><br />
                        <span className="text">Parcels Received: </span> <span  >{this.state.user.received}</span>
                        <br></br><br></br>
                        <span className ="text">Waiting Collection: </span> <span >{this.state.user.collection}</span>
                    </div>


                </div>
                
                <Link to="/login" id="logout-btn" className='nav-link' onClick={() => localStorage.clear()
                }> Logout</Link>
              </div>
            </div>
          )
        }
    return (
        <div>
           {buttons} 
        </div>
            
    )
    }
}


export default UserInProfile