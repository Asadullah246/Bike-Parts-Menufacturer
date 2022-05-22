import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import country from "../../../Images/Logos/globe-solid.svg"
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import useButton from '../../../Hooks/useButton';


const Count = () => {
  const btn = useButton({ children: "Contact us" })
  return (
    <div className='w-screen bg-base-200 pt-44'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-primary'>TRUSTED WHOLE WORLD</h2>
        <p className='font-semibold text-lg'>Connect with us to know our Faithfulness</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <div class="card lg:max-w-md bg-base-200 ">
          <figure class="px-10 pt-10">
            <FontAwesomeIcon className='text-primary inline-block w-12 h-auto' icon={faGlobe}></FontAwesomeIcon>
          </figure>
          <div class="card-body items-center text-center font-bold text-3xl">
            <CountUp end={1000} />
            <p className='text-primary font-semibold text-lg'>120 countries</p>
          </div>
        </div>
        <div class="card lg:max-w-md bg-base-200 ">
          <figure class="px-10 pt-10">
            <FontAwesomeIcon className='text-primary inline-block w-12 h-auto' icon={faRectangleList}></FontAwesomeIcon>
          </figure>
          {/* <i className="fa-solid fa-face-smile-plus"></i> */}
          <div class="card-body items-center text-center font-bold text-3xl">
            <h2><CountUp end={400} />+</h2>
            <p className='text-primary font-semibold text-lg'>Complete projects</p>
          </div>
        </div>
        <div class="card lg:max-w-md bg-base-200 ">
          <figure class="px-10 pt-10">
            <FontAwesomeIcon className='text-primary inline-block w-12 h-auto' icon={faFaceSmile}></FontAwesomeIcon>
          </figure>
          <div class="card-body items-center text-center font-bold text-3xl">
            <CountUp end={300} />
            <p className='text-primary font-semibold text-lg'>Happy clients</p>
          </div>
        </div>
        <div class="card lg:max-w-md bg-base-200 ">
          <figure class="px-10 pt-10">
            <FontAwesomeIcon className='text-primary inline-block w-12 h-auto' icon={faThumbsUp}></FontAwesomeIcon>
          </figure>
          <div class="card-body items-center text-center font-bold text-3xl">
            <h2><CountUp end={290} />+</h2>
            <p className='text-primary font-semibold text-lg'>Feedbacks</p>
          </div>
        </div>



      </div>
      
      <div class="hero h-56 w-screen lg:h-32 lg:w-1/2 mx-auto lg:rounded-3xl bg-white">
  <div class="hero-content flex-col lg:flex-row">
    <div>
    <h3 className='text-3xl font-bold '>If you have any question about us</h3>
         <p className='text-lg font-semibold'>Feel free to connect us</p>
    </div>

    <div>
    {btn}
      
    </div>
  </div>
</div>
    </div>
  );
};

export default Count;