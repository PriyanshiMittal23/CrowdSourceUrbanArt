import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (


    
    <div className="flex flex-col md:flex-row h-screen overflow-hidden ">

      <div className="w-full md:w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fHww")' }}>
      </div>

      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-100 p-2">
        <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h1 className="text-3xl mb-6 text-center text-red-400 ">The Art Gallery</h1>
          <h2 className="text-2xl font-bold mb-6 text-center text-red-400">Login</h2>
          <div className="mb-4">
            <label className='label p-2 block' htmlFor="username">
              <span className='label-text text-base text-red-400 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>Username</span>
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className='label p-2 block' htmlFor="password">
              <span className='label-text text-base text-red-400 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>Password</span>
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          
          <div className='mb-6'>
            <p>Don't have an account? <Link to={'/register'} className='text-red-400'>SignUp</Link></p>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn btn-error text-gray-100 font-bold rounded w-full" type="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
