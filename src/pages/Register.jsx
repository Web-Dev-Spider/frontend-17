import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='container flex justify-center items-center'>
            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                <legend className="fieldset-legend text-xl">Register</legend>

                <label className="fieldset-label">User name</label>
                <input type="text" className="input" placeholder="User name" name="name" />
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />

                <label className="fieldset-label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />
                <label className="fieldset-label">Confirm Password</label>
                <input type="password" className="input" placeholder="Confirm Password" name="confirmPassword" />

                <button className="btn btn-neutral mt-4">Register</button>

                <p className='flex flex-col md:flex-row text-sm text-gray-700'>Already have an account? <span className='text-blue-500 md:ml-2 hover:text-green-900'><Link to='/login'> Click to Login</Link ></span></p>
            </fieldset>
        </div>
    )
}

export default Register
