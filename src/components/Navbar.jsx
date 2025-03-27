import { useState } from 'react';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const {user} = useAuthContext();
  const {logout} = useLogout();

  const handleLogout = () => {
    logout();
  }

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
            {!user && (
              <div className="login-div">
                <ul className='login-nav'>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                </ul>
              </div>
            )}

            {user && (
              <div className="logout-div">
                <span className="userName">{user.name}</span>
                  <button className='btn-logout' onClick={handleLogout}>
                    Logout
                  </button>
                </div>
            )}
          </div>

          <div className={`if-logged-out ${menuOpen ? 'show' : 'hide'}`}>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              {user && (
                <li>
                  <a href="/student-dashboard">Student dashboard</a>
                </li>
              )}
              {/* {user.role === "admin" && (
                <li>
                  <a href="/admin-dashboard">Admin Dashboard</a>
                </li>
              )} */}
              <li>
                <a href="/learner-guide">Learner guide</a>
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
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
