import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-section">
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
        <div class="footer-section">
          <h3>Contact</h3>
          <p>Email: example@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123, Modern Street, City</p>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          {/* <a href="#">Facebook</a><br /><br />
          <a href="#">Twitter</a><br /><br />
          <a href="#">Instagram</a> */}
        </div>
      </div>
      <p class="copyright">&copy; 2025 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
