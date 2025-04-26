import { Link } from "react-router-dom";
import "../../styles/users/MyAssignments.css";
import "../../styles/shared/StudentInnerDash.css";
import { useEffect, useState } from "react";

const MyAssignments = () => {
  const [documents,setDocuments] = useState([]);
  const [error,setError] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

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
      <div className="students-inner-header">
        <div className="gobackIcon">
          <Link to="/student-dashboard">
            <p>Go back</p>
          </Link>
        </div>
        <div className="studentsD">
          <h2>My Assignments</h2>
        </div>
      </div>

      <h2>Study Materials</h2>

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

    </main>
  );
};

export default MyAssignments;
