import { useState } from 'react';
import '../../styles/users/AdminQuiz.css'

const PostQuizz = () => {
  const [quizData, setQuizData] = useState({
    question: '',
    answers: ['', '', '', ''],
    correctAnswer: ''
  });

  const giveQuizz = async (e) => {
    e.preventDefault();
    
    // Validate that correctAnswer exists in answers
    if (!quizData.answers.includes(quizData.correctAnswer)) {
      alert('Correct answer must match one of the options');
      return;
    }

    try {
      const response = await fetch('https://wsu-dl-server.onrender.com/api/quizz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(quizData)
      });
      
      const data = await response.json();
      console.log('Quiz posted successfully:', data);
      alert('Quiz created successfully!');
      
      // Reset form
      setQuizData({
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: ''
      });
    } catch (error) {
      console.error('Error posting quiz:', error);
      alert('Failed to create quiz');
    }
  };

  // Handle question input
  const handleQuestionChange = (e) => {
    setQuizData(prev => ({
      ...prev,
      question: e.target.value
    }));
  };

  // Handle option changes
  const handleOptionChange = (e, index) => {
    const newAnswers = [...quizData.answers];
    newAnswers[index] = e.target.value;
    
    setQuizData(prev => ({
      ...prev,
      answers: newAnswers
    }));
  };

  // Handle correct answer selection
  const handleCorrectAnswerChange = (e) => {
    setQuizData(prev => ({
      ...prev,
      correctAnswer: e.target.value
    }));
  };

  return (
    <div className="quiz-form">
      <h2>Create New Quiz</h2>
      <form onSubmit={giveQuizz}>
        {/* Question Input */}
        <div className="form-group">
          <label>Question</label>
          <input
            type="text"
            value={quizData.question}
            onChange={handleQuestionChange}
            required
            placeholder="Enter your question"
          />
        </div>

        {/* Options */}
        <div className="form-group">
          <label>Options</label>
          {quizData.answers.map((option, index) => (
            <div key={index} className="option-row">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(e, index)}
                required
                placeholder={`Option ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Correct Answer Dropdown */}
        <div className="form-group">
          <label>Correct Answer</label>
          <select 
            value={quizData.correctAnswer} 
            onChange={handleCorrectAnswerChange}
            required
          >
            <option value="">Select correct answer</option>
            {quizData.answers.map((option, index) => (
              option && (
                <option key={index} value={option}>
                  {option}
                </option>
              )
            ))}
          </select>
        </div>

        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
};

export default PostQuizz;