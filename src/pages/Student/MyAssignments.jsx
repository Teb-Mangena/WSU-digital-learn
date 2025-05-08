import { Link } from "react-router-dom";
import "../../styles/users/MyAssignments.css";
import "../../styles/shared/StudentInnerDash.css";
import { useEffect, useState } from "react";

const MyAssignments = () => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://wsu-dl-server.onrender.com/api/documents');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setDocuments(data || []); 
        console.log(data);
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
      <div className="students-inner-header">
        <div className="gobackIcon">
          <Link to="/student-dashboard" className="back-link">
            <p>Go back</p>
          </Link>
        </div>
        <div className="studentsD">
          <h2>My Assignments</h2>
        </div>
      </div>

      <h2 className="section-title">Study Materials</h2>

      {isLoading && (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
          <p>Loading assignments...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>Error loading documents: {error}</p>
          <button 
            className="retry-button"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && !error && documents.length === 0 && (
        <div className="no-documents">
          <p>No assignments available at the moment</p>
        </div>
      )}

      <div className="documents-grid">
        {documents.map((document) => (
          <div key={document._id} className="document-card">
            {document.image?.url && (
              <img 
                src={document.image.url} 
                alt={`Cover for ${document.topic}`}
                className="document-image"
              />
            )}
            <h3 className="document-title">{document.topic}</h3>
            <p className="document-content">{document.content}</p>
            
            {document.pdf?.url && (
              <div className="document-actions">
                <a
                  href={document.pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdf-link"
                >
                  View PDF
                </a>
                <a
                  href={`${document.pdf.url}?dl=${document.pdf.fileName || 'document'}.pdf`}
                  download
                  className="download-button"
                >
                  Download
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default MyAssignments;