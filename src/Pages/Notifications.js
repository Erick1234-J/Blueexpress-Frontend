import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from 'react-router-dom';
import BottomNav from '../Components/Layout/bottom-nav';
import axios from 'axios';
class Notifications extends Component{

          
state = {
     user: [],
     created_at: '',
     updated_at: '' 
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
             user: res.data.parcel,
             updated_at: res.data.parcel.updated_at
         });
     }).catch(err => {
         if(err.response.data.message){
             this.setState({error: err.response.data.message});
         }
         console.log(err.response.data.message);
     });
 }

   render(){
       
    
      
       let button;
       if(this.state.error){
        return <Navigate to="/login" />
     }else if(this.state.user){
         button = (
            <div className="card-body">
            {this.state.user.map(item => {
                return (
                    <h6 key={item.id}>Tracking Number: {item.Reference} <br></br>{item.Status} {item.updated_at} </h6>
                )
            })}
          </div>
         )
       }
    return(
        <div className="heading container-fluid mt-2 bg-light pt-4 pb-4 aos-item">
         <div className="row mt-2">
          <div className="col-md-12">     
         <div className="card">
          <div className="card-header">
             <h6>Notifications</h6> 
            
          </div>
          {button}
         </div>
         </div> 
         </div>
         <BottomNav />
        </div>
    )
  }
}

export default Notifications;