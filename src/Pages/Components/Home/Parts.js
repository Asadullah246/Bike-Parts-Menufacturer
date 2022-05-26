import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Loading from '../../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const [partsError, setPartsError] = useState("");
    const queryClient = useQueryClient()

    const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('http://localhost:5000/parts').then(res =>
       res.json()
     )
   )
   if(isLoading){
       return <Loading></Loading>
   }
   if(error){
       setPartsError(error?.message)

   }

    return (
       <div>
           <div className='text-center mt-20 mb-10'>
               <h2 className='font-bold text-3xl text-primary'>FEATURE PARTS</h2>
               <p className='font-semibold text-lg'>Best quality parts</p>
           </div>
           <h2 className='font-bold text-xl text-red-400 text-center my-16'>{partsError}</h2>

            <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                data.map(part=><Part part={part} key={part.name}></Part>)
            }
            
        </div>
       </div>
    );
};

export default Parts;