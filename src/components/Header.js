import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
        <nav>
            <p>Logo</p>
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to =''>Services</Link></li>
                <li><Link to ='/reviews'>Reviews</Link></li>
                
            </ul>
        </nav>
    </>
  )
}

export default Header