import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleInputChange = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(formData, "************Form data")
        if (validateForm()) {
            console.log("Form submitted successfully", formData);
            alert("Registration Successful!");
            setFormData({ name: "", email: "", password: "", confirmPassword: "" });
            setErrors({});
        }
    }


    // Function to handle input changes


    // Function to validate form inputs
    function validateForm() {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Username is required";
        } else if (formData.name.length < 3) {
            newErrors.name = "Username must be at least 3 characters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm Password is required";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        console.log(newErrors)

        return Object.keys(newErrors).length === 0;
    };
    return (
        <form className='container flex justify-center items-center'>
            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                <legend className="fieldset-legend text-xl">Register</legend>
                <div className='relative w-full'>
                    <label className="fieldset-label">User name</label>
                    <input type="text" className="input" placeholder="User name" name="name" value={formData.name} onChange={handleInputChange} onFocus={() => setErrors((prev) => ({ ...prev, name: " " }))} />
                    <p className="text-red-500 text-xs min-h-[0.3rem] absolute left-0 top-full ml-3">{errors.name || " "}</p>

                </div>
                <div className='relative'>
                    <label className="fieldset-label mt-2">Email</label>
                    <input type="email" className="input " placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} onFocus={() => setErrors((prev) => ({ ...prev, email: " " }))} />
                    <p className="text-red-500 text-xs min-h-[0.3rem] absolute left-0 top-full  ml-3">{errors.email || " "}</p>

                </div>
                <div className='w-full relative'>
                    <label className="fieldset-label mt-2">Password</label>
                    <input type="password" className="input" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} onFocus={() => setErrors((prev) => ({ ...prev, password: " " }))} />
                    <p className="text-red-500 text-xs min-h-[0.3rem] absolute top-full left-0 ml-3">{errors.password || " "}</p>

                </div>
                <div className='w-full relative'>
                    <label className="fieldset-label mt-2">Confirm Password</label>
                    <input type="password" className="input" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} onFocus={() => setErrors((prev) => ({ ...prev, confirmPassword: " " }))} />
                    <p className="text-red-500 text-xs min-h-[0.3rem] absolute top-full left-0  ml-3">{errors.confirmPassword || " "}</p>

                </div>
                <button onClick={handleFormSubmit} className="btn btn-neutral mt-4">Register</button>

                <p className='flex flex-col md:flex-row text-sm text-gray-700'>Already have an account? <span className='text-blue-500 md:ml-2 hover:text-green-900'><Link to='/login'> Click to Login</Link ></span></p>
            </fieldset>
        </form>
    )
}

export default Register
