import { Survey, SurveyModel } from "survey-react";

const Quizz = () => {
  const quizData = {
    questions: [
      {
        type: "radiogroup",
        name: "question1",
        title: "What is digital literacy?",
        choices: [
          "The ability to use a computer only for entertainment purposes",
          "The ability to understand and use digital technology to access, evaluate, and create information",
          "The knowledge of coding only",
          "The understanding of computer hardware components",
        ],
        correctAnswer:
          "The ability to understand and use digital technology to access, evaluate, and create information",
      },
      {
        type: "radiogroup",
        name: "question2",
        title: "Which of the following is/are part of a computer?",
        choices: ["Monitor", "CPU", "Keyboard", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        type: "radiogroup",
        name: "question3",
        title: "What is the primary function of an operating system?",
        choices: [
          "To run the applications on the computer",
          "To provide the internet connection",
          "To store and organize files",
          "To connect the computer to external devices",
        ],
        correctAnswer: "To run the applications on the computer",
      },
      {
        type: "radiogroup",
        name: "question4",
        title: "What is the most common file type for a text document?",
        choices: [".jpeg", ".txt", ".pdf", ".docx"],
        correctAnswer: ".docx",
      },
      {
        type: "radiogroup",
        name: "question5",
        title: "What is the purpose of using a search engine like Google?",
        choices: [
          "To send emails",
          "To connect to Wi-Fi",
          "To find information on the internet",
          "To manage files",
        ],
        correctAnswer: "To find information on the internet",
      },
      {
        type: "radiogroup",
        name: "question6",
        title: "Which of the following email providers is NOT commonly used?",
        choices: ["Gmail", "Yahoo", "Outlook", "MySpace Mail"],
        correctAnswer: "MySpace Mail",
      },
      {
        type: "radiogroup",
        name: "question7",
        title: "What should you avoid clicking on to stay safe online?",
        choices: [
          "Reputable news websites",
          "Pop-ups and suspicious links",
          "Secure websites",
          "Educational resources",
        ],
        correctAnswer: "Pop-ups and suspicious links",
      },
      {
        type: "radiogroup",
        name: "question8",
        title: "What is a common threat to cybersecurity?",
        choices: [
          "Proper use of antivirus software",
          "Ransomware",
          "Regular software updates",
          "Strong passwords",
        ],
        correctAnswer: "Strong passwords",
      },
      {
        type: "radiogroup",
        name: "question9",
        title: "What is the main purpose of learning to code?",
        choices: [
          "To play games on the computer",
          "To create and control digital applications",
          "To manage files",
          "To design websites only",
        ],
        correctAnswer: "MySpace Mail",
      },
      {
        type: "radiogroup",
        name: "question10",
        title: "What is a good design practice when creating a flyer?",
        choices: [
          "Use as many fonts as possible to stand out",
          "Overload the flyer with images",
          "Ignore whitespace",
          "Maintain a balance between text and visuals",
        ],
        correctAnswer: "Maintain a balance between text and visuals",
      },
    ],
  };

  const surveyModel = new SurveyModel(quizData);

  return (
    <div className="web-container">
      <Survey
        model={surveyModel}
        onComplete={(survey) => {
          const userAnswers = survey.data;
          const correctAnswers = quizData.questions.filter(
            (question) => userAnswers[question.name] === question.correctAnswer
          );
          console.log("Correct answers:", correctAnswers.length);
        }}
      />
    </div>
  );
};

export default Quizz;
