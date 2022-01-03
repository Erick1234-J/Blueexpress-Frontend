import React, { Component } from 'react';
import { Navigate} from 'react-router-dom';
//Parcel Tracker CSS
import './parcel-tracker.css'
//React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class ParcelTracker extends Component {
    state = { 
       isLoading: ''
    };

    search = e => {
        e.preventDefault();

        const data = {
            Reference: this.Reference
        }
        this.setState({isLoading: true});
        let token = localStorage.getItem('token');
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/track_number',
            data: data,
            headers: {
             'Authorization': `Bearer ${token}`,
             'Accept': 'application/json',
             'Content-Type': 'application/json'
            }
        }).then(res => {
            this.setState({isLoading:false});
            this.setState({msg: res.data.track});
            this.setState({msgStatus: res.data.data.data.name});
            this.setState({msgTime: res.data.data.updated_at});
             console.log(res);
        }).catch(err => {
            this.setState({isLoading: false});
            if(err.response.data.message){
                this.setState({error: err.response.data.message});
              
            }});
        
    
}
 
  render() {
      if(this.state.error){
         return <Navigate to="/login" />
      }
    
    let button = (
        <div className="heading container-fluid mt-2 bg-light pt-4 pb-4 aos-item">
            <h5>Tracking Number: </h5>
            {this.state.msg}
        <div className="card">  
            <div className="card-body mt-2">
                    <div className='container'>
                           <h5>{this.state.msgTime}</h5>
                           <h6>{this.state.msgStatus}</h6>
                    </div>
            </div>
        </div>
       </div>
    )
   const isLoading = this.state.isLoading; 
    

   
    return (
        <div className='container-fluid'>         
        <div className="heading container-fluid mt-2 bg-light pt-4 pb-4 aos-item ">
            <div className="row">
                <div className="col">
                    <div className="btn btn-lg">
                        <i className="fa fa-map-marker icon"></i> Locations
                    </div>
                </div>

                <div className="col">
                    <div className="btn btn-lg">
                        <i className="fa fa-qrcode icon"></i> Sign Parcel
                    </div>
                </div>

                <div className="col">
                    <div className="btn btn-primary">
                        <i className="fa fa-rocket"></i> Ship Now
                    </div>
                </div>
            </div>
        </div>
        
        <div className="tracking_form container-fluid mt-2 pt-4 bg-light pb-4 aos-item ">
            <h4>Track your parcel</h4>
            <form className=" d-flex track mt-2 " onSubmit={this.search} >
                
               <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                <input className="form-control input-box" type="text" onChange={e => this.Reference = e.target.value } placeholder="Enter tracking number"
                    aria-label="Search" />
                <button className="btn btn-outline-success btn-primary" id='track-btn' type="submit">
                    Track
                    {isLoading ? (
                      <span  className="spinner-border spinner-border-sm ml-5"
                      role="status"
                      aria-hidden="true"></span>
                    ): (
                        <span></span>
                    )}
                    </button>
            </form><br/>
            
        </div>
        {button}
        
    </div>  
    )
  }
}

export default ParcelTracker;


