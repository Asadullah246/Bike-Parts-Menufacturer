import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [partError, setPartError] = useState('');
    const [amount, setAmount] = useState(0);
    const [success, setSuccess] = useState("");
    const [user] = useAuthState(auth)
    const [sellingQuantity, setSellingQuantity] = useState(0);

    const url = `http://localhost:5000/parts/${id}`;
    const { isLoading, error, data, refetch } = useQuery(['parts', id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        }).then(res =>
            res.json())
    )

    const {
        register, handleSubmit, formState: { errors }, } = useForm();
    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        setPartError(error?.message)
        return;
    }
    const orderQuantity = e => {
        const value = e.target.value;
        if (value < data.minimumOrder || value > data.quantity) {
            setPartError('Quantity must be between 10 and 100');
            setAmount(0);
            setSuccess("")
        }
        else {
            setSellingQuantity(value);
            setAmount(value * data.price)
            setPartError('');
            setSuccess("")
        }
    }

    const onSubmit = async (itemData) => {
        const url = "http://localhost:5000/orders";
        const order = {
            name: user.displayName,
            itemName: data.name,
            email: user.email,
            phone: itemData.number,
            quantity: sellingQuantity,
            totalPrice: amount,
            image: data.image,
            productId:id 
        }
        
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(partData => {

                if (partData.success) {
                    const body = {
                        quantity: parseInt(data.quantity) - parseInt(sellingQuantity),
                    }
                    fetch(`http://localhost:5000/parts/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body)

                    })
                        .then(res => res.json())
                        .then(res => {
                            if (res.success) {
                                setSuccess("Order placed successfully")
                                setAmount(0);
                                setSellingQuantity(0);
                                refetch()
                            }
                            else{
                                setSuccess("Order failed due to quantity")
                            }
                        })

                }
                else {
                    setSuccess("Order failed")

                }
            })

    }

    return (
        <div className='bg-base-200'>
            <div className="hero min-h-screen  pt-8 ">
                <div className="hero-content flex-col  lg:flex-row">
                    <div className='md:w-3/4 mb-8 lg:w-2/3 lg:px-8'>
                        <img src={data.image} className="w-full  rounded-lg shadow-2xl " alt='img' />

                    </div>
                    <div className='text-left md:w-3/4 lg:w-1/2 lg:px-8'>
                        <h1 className="text-5xl font-bold">{data.name}</h1>

                        <p className="py-6 font-semibold">{data.description}</p>
                        <p className='font-bold'>price: {data.price}$</p>
                        <p className='font-bold'>total quantity: {data.quantity} </p>
                        <p className='font-bold'>Minimum order quantity: {data.minimumOrder} </p>
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Give quantity</span>

                            </label>
                            <input onChange={orderQuantity} type="number"  className="input input-bordered w-1/2 max-w-xs h-10" defaultValue={data.minimumOrder}/>
                            <label className="label">
                                <span className="label-text-alt text-red-400">{partError}</span>

                            </label>
                            <span className="font-bold">Total amount : <span className='text-primary'>{amount}$</span></span>


                        </div>
                    </div>
                </div>
            </div>

            <h3 className='text-center font-bold text-3xl my-8'>Fill the form to complete the order</h3>
            <div className='pb-16'>
                <div className="card w-10/12 lg:w-[700px] bg-base-100 shadow-xl mx-auto">
                    <div className="card-body items-center text-center">
                        <form className='w-2/3' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Give your name</span>
                                </label>
                                <input type="text" placeholder="Type here" name='name' className="input input-bordered w-full" value={user?.displayName} disabled />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Give your email</span>
                                </label>
                                <input type="email" placeholder="Type here" name='email' className="input input-bordered w-full" value={user?.email} disabled />
                                <label className="label"> </label>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Give your Address</span>
                                </label>
                                <input type="text" placeholder="Type here" name='address' className="input input-bordered w-full"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Please give your address'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div> <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Give your phone no.</span>
                                </label>
                                <input type="text" placeholder="Type here" name='number' className="input input-bordered w-full"
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
                            <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white w-full py-3 my-8 rounded-xl text-xl' type="submit" value="Login" disabled={
                                !(amount > 0 && sellingQuantity > 0)
                            } >{amount==0?"disabled": "Order"} </button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;