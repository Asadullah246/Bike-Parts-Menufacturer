import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Navbar/Loading';

const Login = () => {
    const [signInError, setSignInError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate=useNavigate()
    const navigateSignUp=()=>{
        navigate('/signup')
    }
    const [
        signInWithEmailAndPassword, eUser, eLoading, eError,] = useSignInWithEmailAndPassword(auth);
        const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {
        register,handleSubmit,formState: { errors },} = useForm();

        if(loading||gLoading||eLoading){
            return <Loading></Loading>
        }
        if(error||gError||eError){
            setSignInError(error?.message||gError?.message||eError?.message)
            return;
        }
        if(user){
            navigate(from, { replace: true });
           
        }

        const googleLogin=async=>{
            signInWithGoogle();
            setSuccess("Successfully logged in with Google");
        }

        const onSubmit = async data => {
          await  signInWithEmailAndPassword(data.email, data.password);
            await setSuccess("Successfully logged in");
           
        }

    return (
        <div>
        <h1 className='text-center font-bold text-4xl my-12'>Please Login</h1>
        <div className="card lg:w-[700px] bg-base-100 shadow-xl mx-auto">
            <div className="card-body items-center text-center">
                <form className='w-2/3' onSubmit={handleSubmit(onSubmit)}>
                   
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Give your email</span>
                        </label>
                        <input type="text" placeholder="Type here" name='email' className="input input-bordered w-full"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Please give your email'
                                },
                                pattern: {
                                    
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Give your password</span>
                        </label>
                        <input type="password" placeholder="Type here" name='password' className="input input-bordered w-full"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Please give your password'
                                },
                                minLength: {
                                    value: 5,
                                    message: 'Must be 5 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    <small className='text-primary'>{success} </small>
                        <small className='text-red-500'>{signInError} </small>
                    <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white w-full py-3 my-8 rounded-xl text-xl' type="submit" value="Login" >Login</button>
                </form>
                <div className='w-2/3 '>
                    <p>New at here? <button onClick={navigateSignUp} className=' text-primary font-bold text-lg'>Sign up</button></p>
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>

                <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white w-2/3 py-3 my-4 rounded-xl text-xl mx-auto' onClick={googleLogin} >Login With Google</button>
            </div>
        </div>

    </div>
    );
};

export default Login;