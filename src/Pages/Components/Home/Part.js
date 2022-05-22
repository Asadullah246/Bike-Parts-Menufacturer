import React from 'react';
import useButton from '../../../Hooks/useButton';

const Part = ({ part }) => {
    const { name, image, price, description } = part;
    const btn=useButton({children:"Purchase"})
    return (
        <>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-xl my-4 text-primary">{name}</h2>
                    <p class="card-text font-bold ">Price : {price}$</p>
                    <p>{description}</p>
                    <div class="card-actions">
                        {btn}
                    </div>
                </div>
            </div>


        </>
    );
};

export default Part;