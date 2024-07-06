import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useSignUp from '../hooks/useSignUp';

const SignUp = () => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    Type:""
  })

  const {signup, loading} = useSignUp();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await signup(inputs);
  }

    return (
        <div className="flex flex-col md:flex-row h-full overflow-hidden overflow-y-auto ">
    
          <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-100 p-2">
            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
              <h1 className="text-3xl mb-4 text-center text-red-400 ">The Art Gallery</h1>
              <h2 className="text-2xl font-bold mb-3 text-center text-red-400">SignUp</h2>
              <div className="mb-4">
                <label className='label p-2 block' htmlFor="username">
                  <span className='label-text text-base text-red-400 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>Username</span>
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
              </div>
              <div className="mb-2">
                <label className='label p-2 block' htmlFor="email">
                  <span className='label-text text-base text-red-400 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>Email</span>
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" value={inputs.email} onChange={(e)=>setInputs({...inputs,email:e.target.value})}/>
              </div>
              <div className="mb-2">
                <label className='label p-2 block' htmlFor="password">
                  <span className='label-text text-base text-red-400 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>Password</span>
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
              </div>
              <div className="mb-3">
                <label className='label p-2 block' htmlFor="confirmpassword">
                  <span className='label-text text-base text-red-400 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>Confirm Password</span>
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="password" placeholder="Confirm Password" value={inputs.confirmPass} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}/>
              </div>
              <div className='mb-3'>
                <label className='label'>
                    <span className='label-text text-base text-red-400'>Want to Register as?</span>
                </label>
                <div className='flex gap-4 p-2 flex-col md:flex-row'>
                    <div className='form-control'>
                    <label className='label cursor-pointer flex gap-2'>
                        <span className='label-text text-red-400'>Artist</span>
                        <input
                        type='radio'
                        name='Type'
                        value='Artist'
                        checked={inputs.Type === 'Artist'}
                        onChange={handleChange}
                        className={`radio radio-error`}
                        />
                    </label>
                    </div>
                    <div className='form-control'>
                    <label className='label cursor-pointer flex gap-2'>
                        <span className='label-text text-red-400'>Viewer</span>
                        <input
                        type='radio'
                        name='Type'
                        value='Viewer'
                        checked={inputs.Type === 'Viewer'}
                        onChange={handleChange}
                        className={`radio radio-error`}
                        />
                    </label>
                    </div>
                </div>
                </div>
              <div className='mb-3'>
                <p>Already have an account? <Link to={'/login'} className='text-red-400'>Login</Link></p>
              </div>
              <div className="flex items-center justify-center">
                <button className="btn btn-error text-gray-100 font-bold rounded w-full" type="button" onClick={handleSubmit}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fHww")' }}>
          </div>

        </div>
      );
}

export default SignUp