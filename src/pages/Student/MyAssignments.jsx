import { Link } from "react-router-dom";
import '../../styles/shared/StudentInnerDash.css';

const MyAssignments = () => {
  return ( 
    <main className='web-container'>
      <div className="students-inner-header">
        <div className="gobackIcon">
          <Link to='/student-dashboard'>
            <p>Go back</p>
          </Link>
        </div>
        <div className="studentsD">
          <h2>My Assignments</h2>
        </div>
        
      </div>
      <ul>

            <li><a href="documents/Introduction_to_Digital_Literacy_Grade12.pdf" download="documents/Introduction_to_Digital_Literacy_Grade12.pdf">Introduction to Digital Literacy</a></li>
            <li><a href="documents/Topic Quiz 1-Test your understanding.docx" download="documents/Topic Quiz 1-Test your understanding.docx">QUIZ 1 - Test your understanding</a></li>
          </ul>
    </main>
   );
}
 
export default MyAssignments;