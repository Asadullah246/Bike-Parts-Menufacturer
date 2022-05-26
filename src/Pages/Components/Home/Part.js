import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { name, image, price, description,_id } = part;
    const navigate=useNavigate();
    const purchase=id=>{
        navigate(`/${id}`)
    }
    
    return (
        <>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl my-4 text-primary">{name}</h2>
                    <p className="card-text font-bold ">Price : {price}$</p>
                    <p>{description}</p>
                    <div className="card-actions">
                       <button  className='duration-500 text-black bg-[#94C300] font-bold hover:bg-[#7f9e1c] hover:text-white px-8 py-3 rounded-3xl' onClick={()=>purchase(_id)}>Purchase</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Part;