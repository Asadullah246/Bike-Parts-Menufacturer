import React from 'react';
import car from "../../../Images/Logos/shipping.png"
import lowPrice from "../../../Images/Logos/lowPrice.png"
import safeShipping from "../../../Images/Logos/umbraela.png"
import moneyBack from "../../../Images/Logos/dollar.png"

const Guarantee = () => {
    return (
        <div  className='mt-36 mb-20'>
            <h2 className='text-center text-3xl text-primary font-bold mt-16'>OUR SPECIAL SERVICES</h2>
            <div className='grid  grid-cols-2 lg:grid-cols-4 md:grid-cols-2 bg-white px-4 my-8'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row lg:py-4">
                        <img className='w-24  md:w-38' src={car} alt="" />
                        <div>
                            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Free shipping</h1>
                            <p className="p-2  text-sm md:text-base lg:text-lg">On all order over 100$.</p>
                            
                        </div>
                    </div>   
                </div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row lg:py-4">
                        <img className='w-24  md:w-38' src={lowPrice} alt="" />
                        <div>
                            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Lowest price</h1>
                            <p className="p-2  text-sm md:text-base lg:text-lg">You will get lowest price</p>
                            
                        </div>
                    </div>   
                </div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row lg:py-4">
                        <img className='w-24  md:w-38' src={safeShipping} alt="" />
                        <div>
                            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Safe shipping</h1>
                            <p className="p-2  text-sm md:text-base lg:text-lg">No doubt</p>
                            
                        </div>
                    </div>   
                </div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row lg:py-4">
                        <img className='w-24  md:w-38' src={moneyBack} alt="" />
                        <div>
                            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Money back</h1>
                            <p className="p-2  text-sm md:text-base lg:text-lg">Money back guaranteed.</p>
                            
                        </div>
                    </div>   
                </div>
               

            </div>

        </div>
    );
};

export default Guarantee;