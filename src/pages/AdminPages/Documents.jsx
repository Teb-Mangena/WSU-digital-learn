import { useEffect, useState } from "react";
import "../../styles/users/AdminDashboard.css";
import { useLogout } from "../../hooks/useLogout";
import AdminHeader from "../../components/admin-Components/AdminHeader";
import AdminSidebar from "../../components/admin-Components/AdminSidebar";

const Documents = () => {
  const [documents,setDocuments] = useState([]);
  const [error,setError] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const { logout } = useLogout();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(()=>{
    async function fetchDocuments() {
      setIsLoading(true);

      const response = await fetch('https://wsu-digital-73907ca0e2b2.herokuapp.com/api/documents');
      const data = await response.json();

      if(!response.ok){
        setIsLoading(false);
        setError(data.error);
      } else {
        setIsLoading(false);
        setError(false);
        setDocuments(data);
      }
    }

    fetchDocuments();
  },[])

  return (
    <main className="web-container">
      <h1>Uploaded Documents</h1>
      <div className="dashboard-container">
        <AdminHeader toggleMenu={toggleMenu} />
        <div className="grid-admin-panel">
          <AdminSidebar menuOpen={menuOpen} logout={logout} />
          
          {isLoading && <div className="loading-spinner"></div>}
      {error && <div className="err-mssg">{error}</div>}
      {documents && documents.map((document) => (
        <div key={document._id} className="added-work">
          <h2 className="added-work-title">{document.topic}</h2>
          <img 
            src={document.image} 
            alt={document.topic} 
            className="added-work-img"
          />
          <p className="added-work-description">{document.content}</p>
          <a href={document.link}>{document.link}</a>
        </div>
      ))}
        </div>
      </div>
    </main>
  );
};

export default Documents;
