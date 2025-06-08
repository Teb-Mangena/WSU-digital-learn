import { useEffect, useState } from "react";
import "../../styles/forms/Quizz.css";

const Quizz = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [results, setResults] = useState(null);

  // Fetch quizzes from backend
  useEffect(() => {
    const fetchQuizz = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("https://wsu-dl-server.onrender.com/api/quizz");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch quizzes");
        }

        setQuizzes(data);
        
        // Initialize answers state
        const initialAnswers = {};
        data.forEach(quiz => {
          initialAnswers[quiz._id] = "";
        });
        setUserAnswers(initialAnswers);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizz();
  }, []);

  // Handle answer selection
  const handleAnswerSelect = (quizId, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [quizId]: answer
    }));
  };

  // Submit answers to backend
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Format answers for backend
      const answersArray = Object.entries(userAnswers).map(([quizId, answer]) => ({
        quizId,
        answer
      }));

      const response = await fetch("https://wsu-dl-server.onrender.com/api/quizz/correct-count", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ answers: answersArray })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit answers");
      }

      setResults({
        correctCount: data.correctCount,
        total: quizzes.length
      });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset the quiz to try again
  const handleReset = () => {
    const resetAnswers = {};
    quizzes.forEach(quiz => {
      resetAnswers[quiz._id] = "";
    });
    setUserAnswers(resetAnswers);
    setResults(null);
    setSubmitError(null);
  };

  // Check if all questions are answered
  const allAnswered = Object.values(userAnswers).every(answer => answer !== "");

  return (
    <div className="web-container">
      <div>
        <h1>Quizzes</h1>
        
        {/* Error messages */}
        {error && <div className="error">{error}</div>}
        {submitError && <div className="error">{submitError}</div>}
        
        {/* Loading state */}
        {isLoading && <p>Loading...</p>}
        
        {/* Results display */}
        {results && (
          <div className="results">
            <h2>Your Results</h2>
            <p>You got {results.correctCount} out of {results.total} correct!</p>
            <button onClick={handleReset}>Try Again</button>
          </div>
        )}

        {/* Quiz display */}
        {!results && quizzes && quizzes.length > 0 && (
          <>
            {quizzes.map((quiz) => (
              <div key={quiz._id} className="quiz-item">
                <h2>{quiz.question}</h2>
                {quiz.answers.map((answer, index) => (
                  <div key={`${quiz._id}-${index}`}>
                    <input
                      type="radio"
                      name={quiz._id}
                      id={`${quiz._id}-${index}`}
                      value={answer}
                      checked={userAnswers[quiz._id] === answer}
                      onChange={() => handleAnswerSelect(quiz._id, answer)}
                    />
                    <label htmlFor={`${quiz._id}-${index}`}>{answer}</label>
                  </div>
                ))}
              </div>
            ))}
            
            {/* Submit button */}
            <div className="submit-section">
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting || !allAnswered}
              >
                {isSubmitting ? "Submitting..." : "Submit Answers"}
              </button>
              
              {!allAnswered && (
                <p className="warning">Please answer all questions before submitting</p>
              )}
            </div>
          </>
        )}

        {/* No quizzes available */}
        {!isLoading && !error && quizzes.length === 0 && (
          <p>No quizzes available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Quizz;