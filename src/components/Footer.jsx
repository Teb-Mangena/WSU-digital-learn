import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info.butterworth@wsu.ac.za</p>
          <p>Phone: <a href="tel:+27474016254">047 401 6254</a></p>
          <p>Address: Private Bag X3182, Butterworth, 4960 Eastern Cape, South Africa</p>
        </div>
        <div className="footer-section">
          <h3>Funded by</h3>
          <img className='bankseta-image' src="/images/companies/BANKSETA.jpg" alt="BANKSETA" />
        </div>
      </div>
      <p className="copyright">&copy; 2025 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
