// import React from 'react';

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import swal from 'sweetalert';

const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                swal("Good job!", "Login Success.", "success");
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="border border-gray-300 my-5 rounded-lg pb-8 w-1/2 mx-auto flex flex-col items-center">
            <h2 className="text-3xl my-10 text-center font-bold">This is Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
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
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
            </form>
            <p onClick={handleWithGoogle} className=" bg-slate-300 px-16 py-2 rounded-lg border border-lime-600 mt-6">Sign in with google</p>
        </div>
    );
};

export default Login;