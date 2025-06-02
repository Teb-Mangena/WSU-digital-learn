import { Survey, SurveyModel } from "survey-react";
import { useState } from "react";
import "../../styles/forms/Quizz.css";

const Quizz = () => {
  const [score, setScore] = useState(null);

  const quizData = {
    questions: [
      // First set of questions
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
        // Note: The provided answer ("MySpace Mail") does not match any of the given choices.
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

      // Second set of questions (File Management Quiz)
      {
        type: "radiogroup",
        name: "question11",
        title: "What is the main purpose of file management?",
        choices: [
          "To play games faster",
          "To make digital work neat, easy to find, and safe",
          "To delete all old files",
          "To create computer viruses",
        ],
        correctAnswer: "To make digital work neat, easy to find, and safe",
      },
      {
        type: "radiogroup",
        name: "question12",
        title:
          "Which of the following is a correct step to create a new folder?",
        choices: [
          "Right-click > Delete",
          "Right-click > New > Folder",
          "Ctrl + C",
          "File > Save",
        ],
        correctAnswer: "Right-click > New > Folder",
      },
      {
        type: "radiogroup",
        name: "question13",
        title:
          "You renamed your folder but typed the wrong name. What can you do?",
        choices: [
          "Click Save As and choose another name",
          "Restart your computer",
          "Right-click the folder, select Rename, and type the correct name",
          "Drag the folder into the Recycle Bin",
        ],
        correctAnswer:
          "Right-click the folder, select Rename, and type the correct name",
      },
      {
        type: "radiogroup",
        name: "question14",
        title:
          "Why is it helpful to organize your files into folders and subfolders?",
        choices: [
          "It makes files harder to find",
          "It looks more colorful",
          "It saves time and keeps your work organized",
          "It fills up your storage faster",
        ],
        correctAnswer: "It saves time and keeps your work organized",
      },
      {
        type: "radiogroup",
        name: "question15",
        title: "What file extension would you expect for an audio file?",
        choices: [".mp3", ".docx", ".jpg", ".pdf"],
        correctAnswer: ".mp3",
      },
      {
        type: "matching",
        name: "question16",
        title: "Match the file types to their examples:",
        // The pairs property represents the matching options.
        pairs: {
          Document: "Word, Excel, PDF",
          Image: "Photos, Screenshots",
          Video: "Class videos, Tutorials",
          Audio: "Recordings, Podcasts",
        },
        // The correctAnswer defines the correct mapping.
        correctAnswer: {
          Document: "Word, Excel, PDF",
          Image: "Photos, Screenshots",
          Video: "Class videos, Tutorials",
          Audio: "Recordings, Podcasts",
        },
      },
      {
        type: "radiogroup",
        name: "question17",
        title: "What should you do to save a file with a clear name in Word?",
        choices: [
          "Press the power button and hope it saves",
          "Click File > Save As, choose a location, name the file clearly, and click Save",
          "Close the document and rename it later",
          "Drag the document into a folder and rename it after printing",
        ],
        correctAnswer:
          "Click File > Save As, choose a location, name the file clearly, and click Save",
      },
      {
        type: "radiogroup",
        name: "question18",
        title: "Which of the following is a benefit of cloud storage?",
        choices: [
          "Only works offline",
          "Needs a USB to access files",
          "Allows access to files from any internet-connected device",
          "Deletes files automatically",
        ],
        correctAnswer:
          "Allows access to files from any internet-connected device",
      },
      {
        type: "radiogroup",
        name: "question19",
        title: "What is the correct order to delete a folder?",
        choices: [
          "Drag it to the desktop and press Save",
          "Right-click the folder > Click Delete > Confirm if prompted",
          "Double-click the folder and rename it",
          "Open the folder and press Print",
        ],
        correctAnswer:
          "Right-click the folder > Click Delete > Confirm if prompted",
      },
      {
        type: "radiogroup",
        name: "question20",
        title:
          "You want to back up a large school project. Which option is best?",
        choices: [
          "Screenshot it",
          "Use an external hard drive",
          "Rename it and leave it on your desktop",
          "Delete it",
        ],
        correctAnswer: "Use an external hard drive",
      },
    ],
  };

  const surveyModel = new SurveyModel(quizData);

  return (
    <div className="web-container">
      {score !== null ? (
        <div className="perc-cont">
          <h2>
            You've got {score} out of {quizData.questions.length} (
            {((score / quizData.questions.length) * 100).toFixed(1)}%)
          </h2>
        </div>
      ) : (
        <Survey
          model={surveyModel}
          onComplete={(survey) => {
            const userAnswers = survey.data;
            const correctAnswers = quizData.questions.filter(
              (question) =>
                userAnswers[question.name] === question.correctAnswer
            );
            setScore(correctAnswers.length);
          }}
        />
      )}
    </div>
  );
};

export default Quizz;
