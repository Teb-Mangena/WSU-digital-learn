import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error,setError] = useState(null);
  const [isLoading,setIsLoading] = useState(null);
  const [success,setSuccess] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (name,lastName,email,password) => {
    setIsLoading(true);

    const response = await fetch('https://wsu-dl-server.onrender.com/api/users/signup',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({name,lastName,email,password})
    });

    const data = await response.json();

    if(!response.ok){
      setError(data.error);
      setIsLoading(false);
      setSuccess(false);
    }
    if(response.ok){
      setError(false);
      setIsLoading(false);
      setSuccess(data.message);

      // save user to localStorage
      localStorage.setItem('user',JSON.stringify(data));

      // update the auth context
      dispatch({type:null ,payload:data});
    }
  }

  return {signup,error,isLoading,success}
}