import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Review = ({ review }) => {
    const { name, comment, image, rating } = review;
    console.log("rating is ", rating);


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <div class="card lg:max-w-md bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt="Shoes" class="rounded-full w-20 h-20 border-2 border-indigo-600" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name} </h2>
                    <p className='font-bold'>Rating :{rating} of 5
                    </p>
                    <p>{comment}</p>


                </div>
                {/* <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    /> */}

            </div>

        </>
    );
};

export default Review;