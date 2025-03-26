import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error,setError] = useState(null);
  const [isLoading,setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email,password) => {
    setIsLoading(true);

    const response = await fetch('/api/users/signup',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({email,password})
    });

    const data = await response.json();

    if(!response.ok){
      setError(data.error);
      setIsLoading(false);
    }
    if(response.ok){
      setError(false);
      setIsLoading(false);

      // save user to localStorage
      localStorage.setItem('user',JSON.stringify(data));

      // update the auth context
      dispatch({type:'LOGIN',payload:data});
    }
  }

  return {signup,error,isLoading}
}