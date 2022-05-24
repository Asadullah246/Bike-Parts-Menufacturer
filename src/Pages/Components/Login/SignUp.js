import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Navbar/Loading';

const SignUp = () => {
    const [signUpError, setSignUpError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    const navigateLogin = () => { navigate('/login') }
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, eUser, eLoading, eError,] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, sendingError] = useSendEmailVerification(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if(loading||gLoading||eLoading||updating){
        return <Loading></Loading>
    }
    if(error||gError||eError||updateError){
        return setSignUpError(error?.message||gError?.message||eError?.message)
    }

    const googleLogin=async=>{
        signInWithGoogle();
        setSuccess("Successfully logged in with Google");
    }
    if(user){
        navigate(from, { replace: true });
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        sendEmailVerification();
        setSuccess("Successfully account created and verification email sent");
    }

    return (
        <div>
            <h1 className='text-center font-bold text-4xl my-12'>Please Sign Up</h1>
            <div className="card lg:w-[700px] bg-base-100 shadow-xl mx-auto">
                <div className="card-body items-center text-center">
                    <form className='w-2/3' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Give your name</span>
                            </label>
                            <input type="text" placeholder="Type here" name='name' className="input input-bordered w-full"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Please give your name'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Give your email</span>
                            </label>
                            <input type="email" placeholder="Type here" name='email' className="input input-bordered w-full"
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
                                <span className="label-text">Give a strong password</span>
                            </label>
                            <input type="password" placeholder="Type here" name='password' className="input input-bordered w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Please provide a password'
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
                        <small className='text-red-500'>{signUpError} </small>
                        <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white w-full py-3 my-8 rounded-xl text-xl' type="submit" value="Sign Up" >Sign Up</button>
                    </form>
                    <div className='w-2/3 '>
                        <p>Have an account? <button onClick={navigateLogin} className=' text-primary font-bold text-lg'>Login</button></p>
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

export default SignUp;