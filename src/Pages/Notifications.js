import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Notifications extends Component{

          
state = {
     user: []  
};

 componentDidMount(){
  let token = localStorage.getItem('token');
     axios('http://localhost:8000/api/notification',{
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
             user: res.data.parcel
         });
     }).catch(err => {
         console.log(err);
     });
 }

   render(){
       let button;
       if(this.state.user){
         button = (
            <div className="card-body">
            {this.state.user.map(item => {
                return (
                    <h6 key={item.id}>Tracking Number: {item.Reference} <br></br>{item.Status} last updated:  {item.updated_at}</h6>
                )
            })}
          </div>
         )
       }else{
           button = (
               <div className="card-body">
                   <h6>No notifications yet</h6>
               </div>
           )
       }
    return(
        <div className="container">
         <div className="row mt-2">
          <div className="col-md-12">     
         <div className="card">
          <div className="card-header">
             <h6>Notifications</h6> 
             <h6><Link to='/' className='nav-link'>Back To Home</Link></h6>
          </div>
          {button}
         </div>
         </div> 
         </div>
        </div>
    )
  }
}

export default Notifications;