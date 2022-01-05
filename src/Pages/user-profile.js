import React, {Component} from 'react';
import BottomNav from '../Components/Layout/bottom-nav';
import UserInProfile from '../Components/userInProfile';
import UserOutProfile from '../Components/userOutProfile';



import './user-profile.css'


class UserProfile extends Component {


 
 render (){
    let token = localStorage.getItem('token'); 
 return (
    <div>

        {
            (() => {
                if (token) {
                    return (
                        <div>
                            <UserInProfile
                                userName=''
                                address=''
                                defaultLocation=''
                                parcelIntransit=''
                                parcelReceived=''
                                parcelWaiting=''
                            />
                            <BottomNav />
                        </div>
                    );
                }
                else {
                    return(
                        <UserOutProfile/>
                    )
                }
            })()
        }
    </div>
    )
  }
}

export default UserProfile;