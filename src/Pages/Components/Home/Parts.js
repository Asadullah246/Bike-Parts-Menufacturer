import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    const [error, setError] = useState(null);
    useEffect( ()=>{
        fetch("Fake.json")
    .then(res=>res.json())
    .then(data=>setParts(data))
    },[])
   

    return (
       <div>
           <div className='text-center mt-20 mb-10'>
               <h2 className='font-bold text-3xl text-primary'>FEATURE PARTS</h2>
               <p className='font-semibold text-lg'>Best quality parts</p>
           </div>
            <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                parts.map(part=><Part part={part} key={part.name}></Part>)
            }
            
        </div>
       </div>
    );
};

export default Parts;