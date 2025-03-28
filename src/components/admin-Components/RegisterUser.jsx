import Signup from "../../pages/Signup";

const RegisterUser = ({ openRegister, handleRegUser }) => {
  return (
    <div className="register-user">
      {openRegister && <Signup />}
      <button className="reg-user" onClick={handleRegUser}>
        {openRegister ? "Close Form" : "Signup a Learner"}
      </button>
    </div>
  );
};

export default RegisterUser;
