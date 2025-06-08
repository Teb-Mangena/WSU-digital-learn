import { Link } from 'react-router-dom';
import '../styles/users/StudentDashboard.css';

const StudentDashboard = () => {
  return ( 
    <main className="web-container">
      <h1>Student Dashboard</h1>
      <section>
        <Link to='/my-profile'>
          <h2>My Profile</h2>
          <p>Update your personal information and settings.</p>
        </Link>
      </section>

    <section>
      <Link to='/my-assignments'>
        <h2>Uploaded Documents</h2>
        <p>Check for assignments</p>
      </Link>
    </section>

    <section>
        <Link to='/quizz'>
          <h2>Quizzes</h2>
          <p>Do uploaded quizes</p>
        </Link>
      </section>

      <section>
        <Link to='/my-courses'>
          <h2>Courses</h2>
          <p>View and manage your enrolled courses.</p>
        </Link>
      </section>
    </main>
  );
}
 
export default StudentDashboard;