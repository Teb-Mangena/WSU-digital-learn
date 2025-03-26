import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="site-title">
            <a href="/">
              <img className="wsu-logo" src="" alt="Walter-Sisulu-University" />
            </a>
            <p className="slogan">In pursuit of excellence</p>
          </div>

          {/* <!-- Navigation Links --> */}
          <div className="if-logged-out">
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/learner-guide">Learner guide</a>
              </li>
            </ul>
          </div>

          {/* <!-- Hamburger Icon for Mobile --> */}
          <div className="hamburger">☰</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
