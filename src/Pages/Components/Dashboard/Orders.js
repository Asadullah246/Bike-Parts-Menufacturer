import React from 'react';
import { useQuery } from 'react-query';

const Orders = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:5000/orders').then(res =>
      res.json()
    )
  )

    return (
        <div className='w-full md:w-11/12 lg:w-2/3 mx-auto my-8'>
            <h3 className='text-3xl font-bold text-primary text-center my-8'>MY ORDERS</h3>
            <table className='table-auto mx-auto mt-8 w-full '>
                <thead className=''>
                    <tr className='bg-slate-200'>
                        <th className='break-all text-base py-6'>Name</th>
                        <th className='break-all text-base py-6'>Quantity</th>
                        <th className='break-all text-base py-6'>Total Price</th> 
                        <th className='break-all text-base py-6'>Transaction ID</th>
                        <th className='break-all text-base py-6'>Pay</th>
                    </tr>
                </thead>
                <tr className='border-x-2 border-y-2 py-8'>
                    <th className='breack-all py-4 bg-slate-100 font-semibold'>1</th>
                    <td className='breack-all py-4 bg-slate-100 font-semibold'>Cy Ganderton</td>
                    <td className='breack-all py-4 bg-slate-100 font-semibold'>Cy Ganderton</td>
                    <td className='breack-all py-4 bg-slate-100 font-semibold'>Cy Ganderton</td>
                    <td className='breack-all py-4 bg-slate-100 font-semibold'>Cy Ganderton</td>
                    <td className='breack-all py-4 bg-slate-100 font-semibold'>Cy Ganderton</td>
                </tr>
            </table>
        </div>
    );
};

export default Orders;