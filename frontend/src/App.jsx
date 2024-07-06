import React from 'react'
import Login from './Pages/Login.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './Pages/SignUp.jsx'
import OTPVerification from './Pages/OTPVerification.jsx'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'

const App = () => {
  const {authUser} = useAuthContext();
  return (
    <div>
      <Routes>
        <Route path='/register' element={authUser?<Navigate to='/otp'/>:<SignUp/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/otp' element={<OTPVerification/>}></Route>
      </Routes>
      <Toaster/>
      {/* <Login/> */}
    </div>
  )
}

export default App