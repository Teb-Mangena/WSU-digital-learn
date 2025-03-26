import { useState } from "react";
import "../styles/forms/Login.css";

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email,password);
  }

  return (
    <main className="web-container">
      <div className="login-form-cont">
        <form className="login" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <label>Email:</label>
          <input 
            type="email" 
            placeholder="e.g learnemail67@gmail.com" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}    
          />
          <label>Password:</label>
          <input 
            type="email" 
            placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}
            value={password} 
          />

          <button>Login</button>
        </form>

        <div className="login-icon">
          <img src="/icons/Login-bro.png" alt="login-icon" />
        </div>
      </div>
    </main>
  );
};

export default Login;
