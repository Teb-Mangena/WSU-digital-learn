import { useState, useEffect } from "react";
import "../../styles/users/AdminDashboard.css";
import { useLogout } from "../../hooks/useLogout";
import AdminHeader from "../../components/admin-Components/AdminHeader";
import AdminSidebar from "../../components/admin-Components/AdminSidebar";

const SubmittedQuiz = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedResult, setSelectedResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { logout } = useLogout();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fetch quiz results from backend
  useEffect(() => {
    const fetchResults = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://wsu-dl-server.onrender.com/api/quizz/results");
        
        if (!response.ok) {
          throw new Error('Failed to fetch quiz results');
        }
        
        const data = await response.json();
        setResults(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, []);

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle view answers button click
  const handleViewAnswers = (result) => {
    setSelectedResult(result);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedResult(null);
  };

  return (
    <main className="web-container">
      <h1>Track Learners Progress</h1>
      <div className="dashboard-container">
        <AdminHeader toggleMenu={toggleMenu} />
        <div className="grid-admin-panel">
          <AdminSidebar menuOpen={menuOpen} logout={logout} />
          
          <div className="admin-content">
            <h2>Learners Quiz Results</h2>
            
            {/* Loading state */}
            {isLoading && (
              <div className="admin-loading">
                <div className="loading-spinner"></div>
                <p>Loading quiz results...</p>
              </div>
            )}
            
            {/* Error message */}
            {error && <div className="error">{error}</div>}
            
            {/* Results table */}
            {!isLoading && !error && (
              <div className="quiz-results-container">
                <table className="quiz-results-table">
                  <thead>
                    <tr>
                      <th>Learner</th>
                      <th>Score</th>
                      <th>Percentage</th>
                      <th>Date Submitted</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((result) => (
                      <tr key={result._id}>
                        <td>
                          {result.name} {result.surname}
                          <div className="user-id">ID: {result.userId}</div>
                        </td>
                        <td>
                          <span className="score-display">
                            {result.score}/{result.total}
                          </span>
                        </td>
                        <td>
                          <div className="percentage-bar">
                            <div 
                              className="percentage-fill"
                              style={{ width: `${result.score/result.total * 100}%` }}
                            ></div>
                            <span className="percentage-text">
                              {Math.round(result.score/result.total * 100)}%
                            </span>
                          </div>
                        </td>
                        <td>{formatDate(result.createdAt)}</td>
                        <td>
                          <button 
                            className="view-details-btn"
                            onClick={() => handleViewAnswers(result)}
                          >
                            View Answers
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {/* Empty state */}
                {results.length === 0 && (
                  <div className="empty-state">
                    <p>No quiz results available yet</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Answer Details Modal */}
      {showModal && selectedResult && (
        <div className="modal-backdrop">
          <div className="answers-modal">
            <div className="modal-header">
              <h3>
                {selectedResult.name} {selectedResult.surname}'s Answers
                <span className="modal-score">
                  Score: {selectedResult.score}/{selectedResult.total}
                  ({Math.round(selectedResult.score/selectedResult.total * 100)}%)
                </span>
              </h3>
              <button className="close-modal" onClick={closeModal}>
                &times;
              </button>
            </div>
            
            <div className="modal-body">
              <div className="quiz-meta">
                <p>Submitted on: {formatDate(selectedResult.createdAt)}</p>
                <p>User ID: {selectedResult.userId}</p>
              </div>
              
              <div className="answers-list">
                {selectedResult.answers.map((answer, index) => (
                  <div 
                    key={answer._id} 
                    className={`answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}
                  >
                    <div className="question-header">
                      <strong>Question {index + 1}:</strong>
                      <span className="answer-status">
                        {answer.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                      </span>
                    </div>
                    
                    <div className="answer-detail">
                      <p><strong>User's Answer:</strong> {answer.userAnswer}</p>
                      {!answer.isCorrect && (
                        <p><strong>Correct Answer:</strong> {answer.correctAnswer}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="close-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default SubmittedQuiz;