import React from 'react';

const Button = ({children}) => {
    return (
        <>
          <button className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white px-8 py-3 rounded-3xl'>{children} </button>  
        </>
    );
};

export default Button;