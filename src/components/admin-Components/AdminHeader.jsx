const AdminHeader = ({ toggleMenu }) => {
  return (
    <header className="header">
      <div className="hamburger-admin" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default AdminHeader;
