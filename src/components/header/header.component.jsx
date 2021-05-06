import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { auth } from '../../firebase/firebase.utils'; 

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'; 

const Header = ({ userLoggedIn }) => (
    <div className="header">
        <Link to="/">  
            <Logo className="logo" /> 
        </Link>

        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                userLoggedIn ?  
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    : 
                    <Link className="option" to="/sign-in-and-sign-up">SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header; 