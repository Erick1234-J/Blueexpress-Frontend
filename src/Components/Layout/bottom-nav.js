import { Link } from 'react-router-dom';

function BottomNav() {
    return (
        <div>
            <ul className="footer-icons pt-2 fixed-bottom">
                <li><Link to='/'><i className="fa fa-home"></i> </Link></li>
                <li><Link to="/"><i className="fa fa-truck"></i> </Link></li>
                <li><Link to="/notifications"><i className="fa fa-bell"></i> </Link></li>
                <li><Link to="/user-profile"><i className="fa fa-user"></i> </Link></li>
            </ul>
        </div>
    )
}


export default BottomNav;