import React from 'react'
import '../Styles/footer.css'
const Footer = () => {
  return (
    
<footer>
  <div className="footer-content">
    <div className="footer-section">
      <img src="dummy-logo.png" alt="Company Logo" className="footer-logo" />
      <h3>About Us</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className="footer-section">
      <h3>Company</h3>
      <ul>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Connect</h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Explore</h3>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2023 Your Company. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer