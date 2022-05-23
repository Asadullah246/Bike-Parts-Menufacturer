import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate=useNavigate()
    const navigateLogin=()=>{
        navigate('/login')
    }
    const {
        register,handleSubmit,formState: { errors },} = useForm();

        const onSubmit = async data => {
            // await createUserWithEmailAndPassword(data.email, data.password);
            // await updateProfile({ displayName: data.name });
            // console.log('update done');
        }
    return (
        <div>
            <h1 className='text-center font-bold text-4xl my-12'>Please Sign Up</h1>
            <div class="card lg:w-[700px] bg-base-100 shadow-xl mx-auto">
                <div class="card-body items-center text-center">
                    <form className='w-2/3' onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text">Give your name</span>
                        </label>
                        <input type="text" placeholder="Type here" name='name' class="input input-bordered w-full"
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
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Give your email</span>
                            </label>
                            <input type="email" placeholder="Type here" name='email' class="input input-bordered w-full"
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
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Give a strong password</span>
                            </label>
                            <input type="password" placeholder="Type here" name='password' class="input input-bordered w-full"
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
                        <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white w-full py-3 my-8 rounded-xl text-xl' type="submit" value="Login" >Sign Up</button>
                    </form>
                    <div className='w-2/3 '>
                        <p>Have an account? <button onClick={navigateLogin} className=' text-primary font-bold text-lg'>Login</button></p>
                    </div>
                    <div class="flex flex-col w-full border-opacity-50">
                        <div class="divider">OR</div>
                    </div>

                    <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white w-2/3 py-3 my-4 rounded-xl text-xl mx-auto' >Login With Google</button>
                </div>
            </div>

        </div>
    );
};

export default SignUp;