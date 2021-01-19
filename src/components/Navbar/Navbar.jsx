import React from "react";
import {Link} from 'react-router-dom';
import {useState} from 'react';
import './navbar.sass';

export default function Navbar() {
    const [search, setSearch] = useState('');
    return(
        <div className='navbar'>
            <Link className = 'logo' to='/'>
               <h1>Covid Tracker</h1>
            </Link>
            <input id='search' type="text" placeholder="Search..." onChange={event =>{setSearch(event.target.value)}}/>

        </div>
    );
}