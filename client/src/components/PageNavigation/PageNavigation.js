import React from 'react';
import { NavLink } from 'react-router-dom';

function PageNavigation() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/friends">Znajomi</NavLink></li>
                <li><NavLink to="/history">Historia</NavLink></li>
                <li><NavLink to="/profile">Edytuj profil</NavLink></li>                
            </ul>
        </nav>
    );
}

export default PageNavigation;