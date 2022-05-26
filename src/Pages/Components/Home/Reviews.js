import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
  const [error, setError] = useState('');
    const [reviews, setReviews] = useState([])
      useEffect( ()=>{
        fetch("https://mysterious-atoll-50879.herokuapp.com/reviews")
        .then(res=>res.json())
        .then(data=>setReviews(data))
          .catch(err=>setError(err.message))
      },[])

    return (
       <div className='bg-base-200 pb-20'>
           <h2 className='text-3xl font-bold text-primary text-center pb-12'>OUR BUYER COMMENTS</h2>
           <p>{error} </p>
            <div className='w-5/6 mx-auto bg-base-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            reviews.map(review=><Review review={review} key={review.name}></Review>)
          }
             
        </div>
       </div>
    );
};

export default Reviews;