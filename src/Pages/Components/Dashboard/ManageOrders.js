import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Loading from '../../Shared/Loading';

const ManageOrders = () => {
    const queryClient = useQueryClient()
    const [ordersError, setOrdersError] = useState("");

    const { isLoading, error, data } = useQuery('allOrders', () =>
     fetch('http://localhost:5000/allOrders',{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
     }).then(res =>
       res.json()
     ))
    
     if(isLoading){
         return <Loading></Loading>
     }
     if(error){
         return setOrdersError(error?.message)
     }
    
    return (
        
        <div className='w-full xs:mx-auto sm:mx-auto md:mx-auto md:w-11/12 lg:w-2/3 lg:ml-[10%] my-8'>
            <h3 className='text-3xl font-bold text-primary text-center my-8'>MY ORDERS</h3>
            <table className='table-auto mx-auto mt-8 w-full '>
                <thead className=''>
                    <tr className='bg-slate-200'>
                        <th className='break-all text-base py-6'>Serial No</th>
                        <th className='break-all text-base py-6'>Name</th>
                        <th className='break-all text-base py-6'>Quantity</th>
                        <th className='break-all text-base py-6'>Total Price</th>
                        <th className='break-all text-base py-6'>Transaction ID</th>
                        <th className='break-all text-base py-6'>Pay</th>
                    </tr>
                </thead>
                {
                    data.map(order => {
                       let indexIs= data.indexOf(order) +1;
                        return (
                                                 

                            <>
                              
                                <tr className='border-x-2 border-y-2 py-8'>
                                    <th className='breack-all py-4 bg-slate-100 font-semibold'>{indexIs} </th>
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{order?.name}</td>
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{order?.quantity}</td>
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{order?.totalPrice}</td>
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{order?.transactionId}</td>
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{order?.transactionId?<p className='text-primary'>Paid</p>:<>
                                    <button className='text-primary font-semibold duration-500  hover:bg-gray-300 px-3 rounded'>Pay</button><br />
                                    <button className='text-red-400 font-semibold duration-500  hover:bg-gray-300 px-3 rounded'>Cancel</button>
                                    </>}
                                    </td>
                                </tr>
                            

                            </>

                        )
                    })
                }

            </table>
        </div>
    );
};

export default ManageOrders;