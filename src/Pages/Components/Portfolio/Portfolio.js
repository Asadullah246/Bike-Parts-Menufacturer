import React from 'react';
import mypic from "../../../Images/others/me.png"

const Portfolio = () => {
    return (
        <div className=' mx-2 md:mx-6 lg:mx-8'>
            <div>
                <img className='w-[200px] h-auto mx-auto rounded-full mt-16 mb-6' src={mypic}alt="" />
                <h1 className='text-3xl font-bold mb-2'>Asadullah</h1>
                <p className='font-semibold'>full Stack Developer</p>
            </div>
            <div className='text-left mt-20'>
                <h2 className='text-2xl font-bold my-4'>About Me</h2>
                <p>I am a MERN  stack developer, Special trained on React JS. I have successfully trained from programming-hero with a good result. I am focusing now to be an expert. I am learning in  BSc in Degree. My aim is to be an expert in web development helping the world to prosper in technology</p>
            </div>
            <div className='text-center mt-24 mb-12'>
                <h4 className='font-bold text-2xl my-2'>Connect With ME</h4>
                <p className='font-bold'>Portfolio : https://something.com</p>
                <p className='font-bold'>Email : asadm2258@gmail.com</p>

            </div>
            
        </div>
    );
};

export default Portfolio;