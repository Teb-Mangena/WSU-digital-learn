import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="site-title">
            <a href="/">
              <img className="wsu-logo" src="/images/companies/WSU.jpg" alt="Walter-Sisulu-University" />
            </a>
            <p className="slogan">In pursuit of excellence</p>
          </div>

          {/* <!-- Navigation Links --> */}
          <div className="loggs-container">
            <div className="login-div">
              <ul className='login-nav'>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>

            <div className="logout-div">
              <button className='btn-logout'>
                Logout
              </button>
            </div>
          </div>

          <div className={`if-logged-out ${menuOpen ? 'show' : 'hide'}`}>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/learner-guide">Learner guide</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>

          {/* <!-- Hamburger Icon for Mobile --> */}
          <div className="hamburger" onClick={toggleMenu}>☰</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
