import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='container flex justify-center items-center'>
            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-8 rounded-box">
                <legend className="fieldset-legend text-xl">Login</legend>

                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" name="name" />

                <label className="fieldset-label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />

                <button className="btn btn-neutral mt-4" >Login</button>

                <p className='fle flex-col md:flex-row text-sm font-medium text-gray-700'>Don't have an account? <span className='text-blue-500 md:ml-2 hover:text-green-900'><Link to='/register'> Register</Link ></span></p>
            </fieldset>
        </div>
    )
}

export default Login
