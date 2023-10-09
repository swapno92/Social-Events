// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import swal from 'sweetalert';

const Register = () => {

    const { createUser } = useContext(AuthContext)
    // console.log(authInfo);

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                swal("Good job!", "Registration Success", "success");
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className=" pb-5 border border-gray-300 rounded-lg w-1/2 mx-auto">
            <h2 className="text-3xl my-7  text-center">This is Register</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-md">Name</span>
                    </label>
                    <input type="text" required name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-md">Email</span>
                    </label>
                    <input type="email" required name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-md">Password</span>
                    </label>
                    <input type="password" required name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover font-semibold text-md">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className="text-center mt-4">Already Have an account<Link className="text-blue-600 font-bold" to='/login'> Login</Link></p>
            </form>
        </div>
    );
};

export default Register;