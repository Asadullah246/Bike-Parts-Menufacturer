import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading';

const Orders = () => {
    const navigate = useNavigate()
    const [dataError, setDataError] = useState("");
    const [user,loading] = useAuthState(auth);
    const { isLoading, error, data, refetch } = useQuery('manageOrders', () =>
        fetch('https://mysterious-atoll-50879.herokuapp.com/orders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                email: user?.email
            },

        }).then(res =>
            res.json())
    )
    if (loading || isLoading) {
        return <Loading></Loading>
    }
   
    if (error) {
        setDataError(error?.message)
        return;
    }

    const payment = id => {
        navigate(`/dashboard/payment/${id}`)
    }
    const deleteOrder = id => {
        fetch(`https://mysterious-atoll-50879.herokuapp.com/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                email: user?.email
            },

        }).then(res =>
            res.json())
            .then(() => {
                refetch();

            })
            .catch(err => console.log(err))
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
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{order.name}</td>
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{order?.quantity}</td>
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{order.totalPrice}</td>
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{order?.transactionId}</td>
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{order.transactionId ? <p className='text-primary'>Paid</p> : <>
                                        <button className='text-primary font-semibold duration-500  hover:bg-gray-300 px-3 rounded' onClick={() => payment(order._id)}>Pay</button><br />
                                        <label for="my-modal" class="text-red-400 font-semibold duration-500  hover:bg-gray-300 px-3 rounded">Cancel</label>

                                        <input type="checkbox" id="my-modal" class="modal-toggle" />
                                        <div class="modal">
                                            <div class="modal-box relative">
                                                <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
                                                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                                <button  className='text-red-400 font-semibold duration-500  hover:bg-gray-300 px-3 rounded' onClick={()=>deleteOrder(order._id)}>Delete</button>
                                            </div>
                                        </div>
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




export default Orders;