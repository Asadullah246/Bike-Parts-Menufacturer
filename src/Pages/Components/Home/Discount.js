import React from 'react';
import useButton from '../../../Hooks/useButton';
import discountImage from "../../../Images/others/slidervi7.jpg"

const Discount = () => {
    const bgImage = {
        backgroundImage: `url(${discountImage})`,
        backgroundSize: 'cover',
    }
    const btn=useButton({children:"Get Discount"})
    return (
        <div className='md:h-[500px] h-[400px] lg:h-[600px] mt-20 ' style={bgImage}>
            <div className="h-full flex justify-center items-center">
                <div className="px-4">
                    <h2  className="inline-block text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-wider text-white ">40% OF YOUR FIRST ORDER</h2>
                    <p className="text-white mt-4 mb-8 font-semibold text-base md:text-lg lg:text-xl">Get a huge discount on your first order. It need to be at least 200$ price</p>
                    {btn}
                </div>

            </div>


        </div>
    );
};

export default Discount;