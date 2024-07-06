import React, { useState } from 'react'

const useVerifyOTP = () => {
  let [loading, setLoading] = useState(false);

  const verifyOTP = async(otp)=>{

    setLoading(true);
    try {
        
    } catch (error) {
        
    } finally{
        setLoading(false);
    }
  }

  return {loading, verifyOTP};
}

export default useVerifyOTP