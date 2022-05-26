import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-20 mb-6'>PAGE NOT FOUND</h1>
            <p>The page you requested has not been found.</p>
            <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white py-2 px-8 my-8 rounded-3xl text-xl' type="submit" >Go to home</button>
            
        </div>
    );
};

export default NotFound;