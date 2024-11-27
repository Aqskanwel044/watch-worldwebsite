import { headers } from 'next/headers'
import React from 'react'

const Footer = () => {
  return (
<footer>
    <div className="footer-container">
        <div className="footer-section">

            <h4>About Us</h4>
            <p>Discover our collection of luxury watches. We are dedicated to providing the finest timepieces.</p>
        </div>
        <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                
            </ul>
        </div>




        <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@watchwebsite.com</p>
            <p>Phone: +1 (234) 567-890</p>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 Watch Website. All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer;
 

