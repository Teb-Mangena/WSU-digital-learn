import { useEffect, useState } from "react";
import "../../styles/users/AdminDashboard.css";
import { useLogout } from "../../hooks/useLogout";
import AdminHeader from "../../components/admin-Components/AdminHeader";
import AdminSidebar from "../../components/admin-Components/AdminSidebar";

const UploadedQuiz = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  
  const { logout } = useLogout();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(()=>{
    const postedQuiz = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('https://wsu-dl-server.onrender.com/api/quizz');
        const data = await response.json();

        if(!response.ok){
          throw new Error(data.error);
        } else {
          setQuizzes(data);
          setError(false);
          console.log(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    postedQuiz();
  },[]);

  return (
    <main className="web-container">
      <h1>Uploaded Quizzes</h1>
      <div className="dashboard-container">
        <AdminHeader toggleMenu={toggleMenu} />
        <div className="grid-admin-panel">
          <AdminSidebar menuOpen={menuOpen} logout={logout} />
          <div className="admin-content">
            {quizzes && <h2>Uploaded Quizzes</h2>}
            {isLoading && <div className="admin-loading">
                <div className="loading-spinner"></div>
                <p>Loading Quiz...</p>
              </div>
            }
            {error && <div className="err-mssg">{error}</div>}
            
            {quizzes && quizzes.map(quiz => (
              <div className="quiz-content" key={quiz._id} style={{
                backgroundColor:'lightgray',
                margin:10,
                padding:10,
                borderRadius:5,
                }}>
                <h3><b>Question</b>:{quiz.question}</h3>
                <h3>Answers</h3>
                {quiz.answers.map((answer) => (
                  <p>{answer}</p>
                ))}
                <p><b>Correct Answer</b>: {quiz.correctAnswer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default UploadedQuiz;
