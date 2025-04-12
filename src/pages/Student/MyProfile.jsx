import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import '../../styles/shared/StudentInnerDash.css';

const MyProfile = () => {
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
          <h2>My Profile</h2>
        </div>
      </div>

      <div className="stud-details">
        <h4>Name: Student's Name</h4>
        <h4>Surname : Student's Surname</h4>
        <h4>Email address: {user.email}</h4>
        <h4>Phone number: 123 456 7890</h4>
      </div>
    </main>
   );
}
 
export default MyProfile;