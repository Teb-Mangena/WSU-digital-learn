import { useState } from "react";
import "../../styles/users/AdminDashboard.css";
import { useLogout } from "../../hooks/useLogout";
import AdminHeader from "../../components/admin-Components/AdminHeader";
import AdminSidebar from "../../components/admin-Components/AdminSidebar";

const Activity = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [pdfDocument, setPdfDocument] = useState(null);

  const { logout } = useLogout();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postDoc = async () => {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('topic', topic);
      formData.append('content', content);
      if (image) {
        formData.append('image', image);
      }
      if (pdfDocument) {
        formData.append('pdf', pdfDocument);
      }

      try {
        const response = await fetch(
          'https://wsu-digital-73907ca0e2b2.herokuapp.com/api/documents',
          {
            method: 'POST',
            body: formData,
          }
        );

        const data = await response.json();

        if (!response.ok) {
          setError(data.error || 'Something went wrong');
          setIsLoading(false);
          setSuccess(false);
        } else {
          setIsLoading(false);
          setError(null);
          setSuccess(data.message || 'Document uploaded successfully');
          setTopic('');
          setContent('');
          setImage(null);
          setPdfDocument(null);
        }
      } catch (err) {
        setError('Failed to upload document');
        setIsLoading(false);
      }
    };

    postDoc();
  };

  return (
    <main className="web-container">
      <h1>Upload Documents</h1>
      <div className="dashboard-container">
        <AdminHeader toggleMenu={toggleMenu} />
        <div className="grid-admin-panel">
          <AdminSidebar menuOpen={menuOpen} logout={logout} />
          <h2>Upload Documents</h2>
          
          <form onSubmit={handleSubmit} className="admin-activity">
            <label>Topic Name:</label>
            <input 
              type="text"
              onChange={(e) => setTopic(e.target.value)}
              value={topic}
            />

            <label>Cover Image:</label>
            <input 
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <label>What is expected to be learned:</label>
            <input 
              type="text"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />

            <label>Upload PDF Document:</label>
            <input 
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdfDocument(e.target.files[0])}
            />

            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Uploading...' : 'Add Document'}
            </button>
            {isLoading && <div className="loading-spinner"></div>}
            {error && <div className="err-mssg">{error}</div>}
            {success && <div className="succ-mssg">{success}</div>}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Activity;
