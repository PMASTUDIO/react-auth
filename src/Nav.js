import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ auth }) => {

    const { isAuthenticated, login, logout } = auth;
    
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                {isAuthenticated() ? <li><Link to="/profile">Profile</Link></li> : null}
                <li>
                    <Link to="/public">Public</Link>
                </li>
                {isAuthenticated() ? <li><Link to="/private">Private</Link></li> : null}
                <li>
                    <button onClick={isAuthenticated() ? logout : login}>{isAuthenticated() ? "Log Out" : "Log In" }</button>
                </li>
            </ul>    
        </nav>
    );
};

export default Nav;