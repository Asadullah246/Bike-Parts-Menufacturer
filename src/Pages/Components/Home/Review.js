import React from 'react';

const Review = ({ review }) => {
    const { name, comment, image, rating } = review;
    return (
        <>
            <div className="card lg:max-w-md bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-full w-20 h-20 border-2 border-indigo-600" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name} </h2>
                    <p className='font-bold'>Rating :{rating} of 5
                    </p>
                    <p>{comment}</p>


                </div>
            </div>

        </>
    );
};

export default Review;