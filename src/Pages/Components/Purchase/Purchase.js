import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Purchase = () => {
    const [error, setError] = useState('');
    const [amount, setAmount] = useState('');
    const [success, setSuccess] = useState('');
    const {
        register, handleSubmit, formState: { errors }, } = useForm();
    const quantity = e => {
        const value = e.target.value;
        if (value < 10 || value > 100) {
            setError('Quantity must be between 10 and 100');
            setAmount('');
        }
        else {
            setAmount(value * 10)
            setError('');
        }
    }
    const onSubmit = async data => {
        // await createUserWithEmailAndPassword(data.email, data.password);
        // await updateProfile({ displayName: data.name });
        // console.log('update done');
    }
    return (
        <div className='bg-base-200'>
            <div class="hero min-h-screen  pt-8 ">
                <div class="hero-content flex-col  lg:flex-row">
                    <div className='md:w-3/4 mb-8 lg:w-1/2 px-8'>
                        <img src="https://i.ibb.co/mSHS4W0/6-400x300.jpg" className="w-full  rounded-lg shadow-2xl " alt='img' />

                    </div>
                    <div className='text-left md:w-3/4 lg:w-1/2 px-8'>
                        <h1 class="text-5xl font-bold">item namw</h1>

                        <p class="py-6 font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className='font-bold'>price: 3434$</p>
                        <p className='font-bold'>total quantity: 500</p>
                        <p className='font-bold'>Minimum order quantity: 50</p>
                        <div class="form-control w-full max-w-xs">

                            <label class="label">
                                <span class="label-text">Give quantity</span>

                            </label>
                            <input onChange={quantity} type="number" placeholder="Type here" class="input input-bordered w-1/2 max-w-xs h-10" />
                            <label class="label">
                                <span class="label-text-alt text-red-400">{error}</span>

                            </label>
                            <span class="font-bold">Total amount : <span className='text-primary'>{amount}$</span></span>


                        </div>
                    </div>
                </div>
            </div>

            <h3 className='text-center font-bold text-3xl my-8'>Fill the form to complete the order</h3>
            <div className='pb-16'>
                <div class="card lg:w-[700px] bg-base-100 shadow-xl mx-auto">
                    <div class="card-body items-center text-center">
                        <form className='w-2/3' onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full ">
                                <label class="label">
                                    <span class="label-text">Give your name</span>
                                </label>
                                <input type="text" placeholder="Type here" name='name' class="input input-bordered w-full"
                                   value='' />
                                <label className="label">
                                </label>
                            </div>
                            <div class="form-control w-full ">
                                <label class="label">
                                    <span class="label-text">Give your email</span>
                                </label>
                                <input type="email" placeholder="Type here" name='email' class="input input-bordered w-full" value='' />
                                <label className="label"> </label>
                            </div>
                            <div class="form-control w-full ">
                                <label class="label">
                                    <span class="label-text">Give your Address</span>
                                </label>
                                <input type="text" placeholder="Type here" name='address' class="input input-bordered w-full"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Please give your address'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div> <div class="form-control w-full ">
                                <label class="label">
                                    <span class="label-text">Give your phone no.</span>
                                </label>
                                <input type="text" placeholder="Type here" name='number' class="input input-bordered w-full"
                                    {...register("number", {
                                        required: {
                                            value: true,
                                            message: 'Please give your name'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                                </label>
                            </div>
                            <span>{success} </span>
                            <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white w-full py-3 my-8 rounded-xl text-xl' type="submit" value="Login" >Order</button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;