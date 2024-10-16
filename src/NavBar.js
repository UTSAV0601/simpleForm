import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn }) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                {isLoggedIn && <li><Link to="/fetch-data">Fetch Data</Link></li>}
            </ul>
        </nav>
    );
};

export default NavBar;
