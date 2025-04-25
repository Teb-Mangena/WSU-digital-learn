import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import '../../styles/shared/StudentInnerDash.css';

const MyCourses = () => {
  const {user} = useAuthContext();

  return ( 
    <main className='web-container'>
      <div className="students-inner-header">
        <div className="gobackIcon">
          <Link to='/student-dashboard'>
            <p>Go back</p>
          </Link>
        </div>
        <div className="studentsD">
          <h2>My Courses</h2>
        </div>
      </div>

      <div className="content-learner">
        <h3>{user.name} {user.lastName}'s enrolled courses</h3>

        <div className="student-courses">

          {user && <div className="course-name">WSU DIGITAL LITERACY COURSE</div>}

        </div>
      </div>
    </main>
   );
}
 
export default MyCourses;