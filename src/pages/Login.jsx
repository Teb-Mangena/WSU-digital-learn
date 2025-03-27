import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import "../styles/forms/Login.css";

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {login,error,isLoading} = useLogin();


  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email,password);
  }

  return (
    <main className="web-container">
      <div className="login-form-cont">
        

        <form className="login" onSubmit={handleSubmit}>

          <h1>Login</h1>

          <div className="login-icon">
            <img src="/icons/Login-bro.png" alt="login-icon" />
          </div>

          <label>Email:</label>
          <input 
            type="email" 
            placeholder="e.g learnemail67@gmail.com" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}    
          />
          <label>Password:</label>
          <input 
            type="password" 
            placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}
            value={password} 
          />

          <button className="btn-login" disabled={isLoading}>Login</button>

          {error && <div className="err-mssg">{error}</div>}
        </form>
      </div>
    </main>
  );
};

export default Login;
