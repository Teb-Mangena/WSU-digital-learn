import { useState } from "react";
import "../styles/forms/Signup.css";

const Signup = () => {
  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name,lastName,email,password);
  }
  return (
    <main className="web-container">
      <div className="signup-form-cont">
        <form className="signup" onSubmit={handleSubmit}>
          <h1>Signup</h1>

          <label>Learner's name:</label>
          <input 
            type="text" 
            placeholder="e.g Faith"
            onChange={(e)=>setName(e.target.value)}
            value={name} 
          />

          <label>Learner's Last name:</label>
          <input 
            type="text" 
            placeholder="e.g Jackson" 
            onChange={(e)=>setLastName(e.target.value)}
            value={lastName}
          />

          <label>Learner's Email:</label>
          <input 
            type="email" placeholder="learnerEmail66@gmail.com" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />

          <label>Learner's Password</label>
          <input 
            type="password" 
            placeholder="Enter a strong password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}   
          />

          <button>Sign Up Learner</button>
        </form>

        <div className="login-icon">
          <img src="/icons/Sign-up.png" alt="sigup-icon" />
        </div>
      </div>
    </main>
  );
};

export default Signup;
