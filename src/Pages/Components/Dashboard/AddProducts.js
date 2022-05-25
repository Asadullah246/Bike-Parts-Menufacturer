import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const [addingError, setAddingError] = useState('');
    const [success, setSuccess] = useState('');
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data,e) => {
        const body = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            minimumOrder: data.orderQuantity,
            description: data.description,
            image: data.image
        }
        console.log(body);
        fetch("http://localhost:5000/parts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(partData => {
                setSuccess("successfully added");
                setAddingError("");
                e.target.reset()


            })
            .catch(err => {
                setAddingError(err.message);
                setSuccess("")
            })
       

    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-primary text-center mt-24 mb-12'>ADD A NEW PRODUCTS</h2>
            <div className='card lg:w-[700px] bg-base-100 shadow-xl mx-auto'>
                <div className='card-body items-center text-center'>
                    <form className='w-2/3' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" placeholder="Type here" name='name' className="input input-bordered w-full"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Please give product name'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Type here" name='price' className="input input-bordered w-full"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Please give product price'
                                    }
                                })} />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="Type here" name='quantity' className="input input-bordered w-full"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: 'Please give product quantity'
                                    }
                                })} />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Minimum Order Quantity</span>
                            </label>
                            <input type="number" placeholder="Type here" name='orderQuantity' className="input input-bordered w-full"
                                {...register("orderQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Please give orderQuantity'
                                    }
                                })} />
                            <label className="label">
                                {errors.orderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderQuantity.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">image url</span>
                            </label>
                            <input type="url" placeholder="Type here" name='image' className="input input-bordered w-full"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Please give product image url'
                                    }
                                })} />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Add Description</span>
                            </label>
                            <textarea placeholder="Type here" name='description' className="input input-bordered w-full" cols="30" rows="10"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Please give description'
                                    }
                                })} />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>
                        <span className='text-primary'>{success} </span>
                        <span className='text-red-400'>{addingError} </span><br />

                        <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white py-2 px-8 my-8 rounded-3xl text-xl' type="submit" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;