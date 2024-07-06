import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignUp = () => {
    let [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async({username, email, password, confirmPassword, Type})=>{
        const success = handleInputErrors({username, email, password, confirmPassword, Type});
        if(!success){
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/register",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({username, email, password, confirmPassword, Type})
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("user",JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {signup, loading};
}

export default useSignUp;

function handleInputErrors({username, email, password, confirmPassword, Type}){
    if(!username || !email || !password || !confirmPassword || !Type){
        toast.error("Please fill in all the fields");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Passwords do not match");
        return false;
    }

    if(password.length < 8){
        toast.error("Password must be at least 8 characters long");
        return false;
    }

    return true;
}
