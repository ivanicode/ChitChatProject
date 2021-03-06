import React from 'react';
import { NavLink } from 'react-router-dom';

export function PageNavigation() {
    return (
        <nav>
            <ul className="mainNavigation">
                <li><NavLink className="navLink" activeClassName="activNavLink" to="/home">Home</NavLink></li>
                <li><NavLink className="navLink" activeClassName="activNavLink" to="/friends">Znajomi</NavLink></li>
                <li><NavLink className="navLink" activeClassName="activNavLink" to="/history">Historia</NavLink></li>
                <li><NavLink className="navLink" activeClassName="activNavLink" to="/profile/edit">Edytuj profil</NavLink></li>                
            </ul>
        </nav>
    );
}

export default PageNavigation;