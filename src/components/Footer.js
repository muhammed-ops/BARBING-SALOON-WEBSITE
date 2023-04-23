import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="contact">
            <p>Contact</p>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Phone number</li>
            </ul>
        </div>
        <div className="address">
                <p>address</p>
        </div>
        <div className="copyright">
            <p>copyright</p>
        </div>
    </div>
  )
}

export default Footer