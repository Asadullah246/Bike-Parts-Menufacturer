import React from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';
import useButton from '../../../Hooks/useButton';

const MyReview = () => {
    const btn=useButton({children:"Submit"})
    const { register,handleSubmit,formState: { errors },} = useForm();
    const onSubmit = async data => {
    
    }
    const ratingChanged = (newRating) => {
            console.log(newRating);
          };
    return (
        <div className='xs:mx-auto sm:mx-auto md:mx-auto lg:w-[700px] ml-[10%]'>
            <h1 className='text-3xl font-bold text-center mt-24 mb-12'>Please give your valuable feedback</h1>
            <div className='card w-full bg-base-100 shadow-xl '>
                <div className='card-body items-center text-center'>
                    <form  className='w-2/3' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Give your name</span>
                        </label>
                        <input type="text" placeholder="Type here" name='name' value="" className="input input-bordered w-full" />
                        <label className="label">
                           <span className="label-text-alt text-red-500"></span>
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Add comment</span>
                        </label>
                        <textarea  placeholder="Type here" name='comment' className="input input-bordered w-full" cols="30" rows="10"
                            {...register("comment", {
                                required: {
                                    value: true,
                                    message: 'Please give your name'
                                }
                            })} />
                        <label className="label">
                            {errors.comment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.comment.message}</span>}
                        </label>
                    </div>
                    <div>
                    <label className="label">
                            <span className="label-text">Select rating</span>
                        </label>
                         <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                    </div>
                    <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white py-2 px-8 my-8 rounded-3xl text-xl' type="submit" >Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyReview;