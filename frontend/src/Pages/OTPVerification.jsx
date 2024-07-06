import React, { useState } from 'react';
import useVerifyOTP from '../hooks/useVerifyOTP';

const OTPVerification = () => {
  let [otp, setOTP] = useState("");
  const {loading, verifyOTP} = useVerifyOTP();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await verifyOTP(otp);

  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="flex justify-center items-center rounded flex-col p-10 bg-white shadow gap-10">
        <p className=' text-gray-600'>Enter The OTP Received on Your Email</p>
        <label className="input input-bordered flex items-center gap-2">
          OTP
          <input type="text" className="grow border p-2 rounded focus:outline-none" placeholder="Enter 6 digit OTP" value={otp} onChange={(e)=>setOTP(e.target.value)}/>
        </label>
        <div className="flex gap-8">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            onClick={handleSubmit}
          >
            Verify OTP
          </button>
          <button
            type="button"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
          >
            Resend OTP
          </button>
        </div>
      </form>
    </div>
  );
};

export default OTPVerification;
