import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../Firebase.init';
import image1 from "../../../Images/others/Banner.jpg"

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const email = user?.email;
    const onSubmit = async data => {
        const userData={
            education: data.Education,
            address:data.address,
            linkedin:data.linkedin,
            image:data.picture
        }
   
        fetch(`https://mysterious-atoll-50879.herokuapp.com/updated/${email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userData)
        })
        .then(res =>res.json())
            .then(data => {
                console.log(data);
            })

    }
 

    return (
        <div className=''>
            <div className='my-24 lg:w-[700px] lg:ml-[10%]'>
                {
                    // img ? <img className='h-24 w-24 rounded-full mx-auto ' src={image1} alt="" /> :
                        <h3 className='py-8 w-24 rounded-full mx-auto bg-primary text-white text-3xl'> User</h3>
                }
                <h2 className='text-3xl font-bold mt-6 mb-2'>{user?.displayName}</h2>
                <p className='font-semibold'>{user.email} </p>
            </div>
            <div className='lg:w-[700px] lg:ml-[10%]'>
                <h3 className='text-3xl font-bold my-6'>Update your profile</h3>
                <div className='card  bg-base-100  shadow-xl'>
                    <div className='card-body items-center text-center'>
                        <form className='w-2/3' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input type="text" placeholder="Type here" name='Education' className="input input-bordered w-full"
                                    {...register("Education", {
                                        required: {
                                            value: true,
                                            message: 'Please give your Education details'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.Education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Education.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type='text' placeholder="Type here" name='address' className="input input-bordered w-full"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Please give your address'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Linkedin url</span>
                                </label>
                                <input type='url' placeholder="Type here" name='linkedin' className="input input-bordered w-full" cols="30" rows="10"
                                    {...register("linkedin", {
                                        required: {
                                            value: true,
                                            message: 'Please give your linkedin url'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type='url' placeholder="Type here" name='picture' className="input input-bordered w-full" cols="30" rows="10"
                                    {...register("picture", {
                                        required: {
                                            value: true,
                                            message: 'Please give your picture url'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.picture?.type === 'required' && <span className="label-text-alt text-red-500">{errors.picture.message}</span>}
                                </label>
                            </div>

                            <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white py-2 px-8 my-8 rounded-3xl text-xl' type="submit"  >Update</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;
