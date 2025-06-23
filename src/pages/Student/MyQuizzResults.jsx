import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import '../../styles/shared/StudentInnerDash.css';

const MyProfile = () => {
  const { user } = useAuthContext();
  const [quizResults, setQuizResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizResults = async () => {
      try {
        if (!user || !user.token) return;
        
        const response = await fetch('https://wsu-dl-server.onrender.com/api/quizz/user-results', {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch quiz results');
        }

        const data = await response.json();
        setQuizResults(data);
      } catch (err) {
        setError(err.message);
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizResults();
  }, [user]);

  // Calculate overall statistics
  const totalQuizzes = quizResults.length;
  const totalScore = quizResults.reduce((sum, quiz) => sum + quiz.score, 0);
  const totalPossible = quizResults.reduce((sum, quiz) => sum + quiz.total, 0);
  const averageScore = totalQuizzes ? (totalScore / totalPossible * 100).toFixed(1) : 0;

  return ( 
    <main className='web-container'>
      <div className="students-inner-header">
        <div className="gobackIcon">
          <Link to='/student-dashboard'>
            <p>Go back</p>
          </Link>
        </div>
        <div className="studentsD">
          <h2>{user?.name}'s Quiz Results</h2>
        </div>
      </div>

      {loading && <div className="loading">Loading quiz results...</div>}
      {error && <div className="error">Error: {error}</div>}

      {!loading && !error && (
        <div className="quiz-results-container">
          <div className="quiz-summary">
            <h3>Performance Overview</h3>
            <p>Total Quizzes Taken: {totalQuizzes}</p>
            <p>Average Score: {averageScore}%</p>
            <p>Correct Answers: {totalScore}/{totalPossible}</p>
          </div>

          <div className="quiz-results-list">
            <h3>Quiz Attempt History</h3>
            
            {quizResults.length === 0 ? (
              <p>No quiz results found</p>
            ) : (
              quizResults.map((quiz) => (
                <div key={quiz._id} className="quiz-card">
                  <div className="quiz-header">
                    <span>{new Date(quiz.createdAt).toLocaleDateString()}</span>
                    <span className={`score ${quiz.score === quiz.total ? 'perfect' : ''}`}>
                      {quiz.score}/{quiz.total} ({Math.round(quiz.score/quiz.total * 100)}%)
                    </span>
                  </div>
                  
                  <div className="quiz-details">
                    <h4>Question Breakdown:</h4>
                    <ul>
                      {quiz.answers.map((answer, index) => (
                        <li key={answer._id} className={answer.isCorrect ? 'correct' : 'incorrect'}>
                          Q{index + 1}: {answer.isCorrect ? '✓' : '✗'} 
                          <span className="answer-text">{answer.userAnswer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </main>
   );
}
 
export default MyProfile;