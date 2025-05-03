import { useEffect, useState } from "react";
import "../../styles/users/AdminDashboard.css";
import { useLogout } from "../../hooks/useLogout";
import AdminHeader from "../../components/admin-Components/AdminHeader";
import AdminSidebar from "../../components/admin-Components/AdminSidebar";

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useLogout();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch('https://wsu-digital-73907ca0e2b2.herokuapp.com/api/documents');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch documents: ${response.statusText}`);
        }

        const data = await response.json();
        setDocuments(data || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <main className="web-container">
      <div className="dashboard-container">
        <AdminHeader toggleMenu={toggleMenu} />
        <div className={`grid-admin-panel ${menuOpen ? 'menu-open' : ''}`}>
          <AdminSidebar menuOpen={menuOpen} logout={logout} />
          
          <div className="admin-content">
            <h1 className="admin-title">Uploaded Documents</h1>

            {isLoading ? (
              <div className="admin-loading">
                <div className="loading-spinner"></div>
                <p>Loading documents...</p>
              </div>
            ) : error ? (
              <div className="admin-error">
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
              </div>
            ) : documents.length === 0 ? (
              <div className="admin-empty">
                <p>No documents found</p>
              </div>
            ) : (
              <div className="documents-grid">
                {documents.map((document) => (
                  <div key={document._id} className="document-card">
                    {document.image?.url && (
                      <img 
                        src={document.image.url} 
                        alt={document.topic}
                        className="document-image"
                      />
                    )}
                    <div className="document-content">
                      <h2 className="document-title">{document.topic}</h2>
                      <p className="document-description">{document.content}</p>
                      {document.pdf?.url && (
                        <div className="document-actions">
                          <a
                            href={document.pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-view"
                          >
                            View PDF
                          </a>
                          <a
                            href={`${document.pdf.url}?dl=${document.pdf.fileName || 'document'}.pdf`}
                            download
                            className="btn-download"
                          >
                            Download
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Documents;