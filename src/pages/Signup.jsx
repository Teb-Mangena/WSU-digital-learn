import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import "../styles/forms/Signup.css";

const Signup = () => {
  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  
  const {signup,isLoading,error} = useSignup();


  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name,lastName,email,password);
  }

  return (

      <>

        <form className="signup" onSubmit={handleSubmit}>
          <h1>Signup</h1>

          <div className="login-icon">
            <img src="/icons/Sign-up.png" alt="sigup-icon" />
          </div>

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

          <button className="btn-signup" disabled={isLoading}>Sign up a Learner</button>

          {error && <div className='err-mssg'>{error}</div>}
        </form>
      </>

  );
};

export default Signup;
