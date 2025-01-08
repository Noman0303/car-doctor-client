import React, { useContext } from 'react'
import facebook from '../../assets/icons/facebook.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import google from '../../assets/icons/google.svg'
import login from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log (result.user);
                toast.success('Login successful! Welcome!', { autoClose: 3000 });
            })
            .catch(error => {
                console.error(error);
                toast.error('Login not successful. Please try again!', { autoClose: 3000 });
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Google Login successful! Welcome!', { autoClose: 3000 })
            })
            .catch(error => {
                console.error(error);
                toast.error('Google Login failed. Please try again!', { autoClose: 3000 });
            })

    }



    return (
        <div className=" mt-14  min-h-screen gap-16 my-14">
            <div className=" grid grid-cols-1 md:grid-cols-2">

                <div className=" card text-center lg:text-left w-full my-auto">

                    <img className='h-[400px]' src={login} alt="" />
                </div>

                <div className=" max-w-lg  border shadow-lg p-16 rounded-lg text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error bg-[#FF3811] text-white">Login</button>
                        </div>
                    </form>

                    <div className='mt-7 flex justify-center gap-4'>
                        <img className='bg-[#F5F5F8] rounded-full w-14 h-14 p-3' src={facebook} alt="" />
                        
                        <img className='bg-[#F5F5F8] rounded-full w-14 h-14 p-3' src={linkedin} alt="" />

                        <button onClick={handleGoogleSignIn}><img className='bg-[#F5F5F8] rounded-full w-14 h-14 p-3' src={google} alt="" /></button>

                    </div>
                    <p className='mt-12'>New Here! Please
                        <Link to='/register'>
                            <span className='text-[#FF3811] '> Register</span>
                        </Link>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Login;