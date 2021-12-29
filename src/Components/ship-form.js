import React, { Component } from 'react';
import axios from 'axios';

class ShipmentForm extends Component {

    state = {
       user: '',
       isLoading: ''
    };
    saveParcel = (e) => {
        e.preventDefault();

        const data = {
            From: this.From,
            To: this.To,
            ShipDetails: this.ShipDetails,
            Weight: this.Weight,
            Phone: this.Phone,
            Email: this.Email,
            FirstName: this.FirstName,
            LastName: this.LastName
        }

        this.setState({isLoading: true});
        let token = localStorage.getItem('token');
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/submit_parcels',
            data: data,
            headers: {
             'Authorization': `Bearer ${token}`,
             'Accept': 'application/json',
             'Content-Type': 'application/json'
            }
        }).then(res => {
                console.log(res.data);
                this.setState({isLoading: false});
                this.setState({
                   user: res.data.message
                });
                
            }).catch(err => {
                console.log(err);
            });
      
    }

    render() {

       const isLoading = this.state.isLoading;
        const message = this.state.user;
        return (
        <div>
                  <h4 className="heading container-fluid mt-4 mb-2 aos-item " >Fill the form to
                ship</h4>

            <div className="shipping container-fluid bg-light mt-4 pb-4 aos-item " >
                <form onSubmit={this.saveParcel} className="row g-3">

                    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">From</label>
                        <input type="text" className="form-control" name="From" onChange={e => this.From = e.target.value} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">To</label>
                        <input type="text" className="form-control" name="To"  onChange={e => this.To = e.target.value} />
                    </div>
                    <div className="col-6">
                        <label for="inputAddress" className="form-label">What are you shipping?</label>
                        <input type="text" className="form-control" name="ShipDetails"  onChange={e => this.ShipDetails = e.target.value} placeholder=""/>
                    </div>
                    <div className="col-6">
                        <label for="inputAddress" className="form-label">Weight(KG)</label>
                        <input type="number" className="form-control"  name="Weight" onChange={e => this.Weight = e.target.value}  placeholder=""/>
                    </div>
                    <div className="col-6">
                        <label for="inputAddress" className="form-label">Phone</label>
                        <input type="number" className="form-control"  name="Phone" onChange={e => this.Phone = e.target.value} placeholder=""/>
                    </div>
                    <div className="col-6">
                        <label for="inputAddress" className="form-label">Email</label>
                        <input type="email" className="form-control"  name="Email" onChange={e => this.Email = e.target.value} placeholder=""/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">First Name</label>
                        <input type="text" className="form-control"  name="FirstName" onChange={e => this.FirstName = e.target.value}  />
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">Last Name</label>
                        <input type="text" className="form-control"  name="LastName" onChange={e => this.LastName = e.target.value}  />
                    </div>
                    
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg">
                            Submit
                            {isLoading ? (
                      <span  className="spinner-border spinner-border-sm ml-5"
                      role="status"
                      aria-hidden="true"></span>
                    ): (
                        <span></span>
                    )}
                            </button>
                    </div>
                </form>
            </div>
            <span>{message}</span>
        </div>
        )
    }
}


export default ShipmentForm;