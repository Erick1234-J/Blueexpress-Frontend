import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

function UserOutProfile(){
    let navigate = useNavigate();//For Redirecting
    useEffect(()=>{
        navigate('/login')
    })
    return(
        <div>
            {
                alert('Log into your Account To view Your Profile Details')
            }
        </div>
    )


    
}
export default UserOutProfile