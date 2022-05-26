import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const MakeAdmin = () => {
    const [userError, setUserError]=useState("")
    const { isLoading, error, data, refetch } = useQuery('users', () =>
        fetch('https://mysterious-atoll-50879.herokuapp.com/users/',{
            method: 'GET',
            headerr:{
                
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>
            res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
   
    if (error) {
        setUserError(error?.message)
        return;
    }

 const makeAdmin=email=>{
        fetch(`https://mysterious-atoll-50879.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            // body:JSON.stringify({admin:true})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("admin",  data);
            refetch();
        })
        .catch(err=>{
            console.log(err);
        })

 }
    return (
        <div className='w-full xs:mx-auto sm:mx-auto md:mx-auto md:w-11/12 lg:w-2/3 lg:ml-[10%]   my-8'>
            <h3 className='text-3xl font-bold text-primary text-center my-8'>MY ORDERS</h3>

            <table className='table-auto  mt-8 w-full '>
                <thead className=''>
                    <tr className='bg-slate-200'>
                        <th className='break-all text-base py-6'>Serial No</th>
                        <th className='break-all text-base py-6'>Email</th>
                        <th className='break-all text-base py-6'>Role</th>
                        <th className='break-all text-base py-6'>Make Ad</th>
                    </tr>
                </thead>
                {
                    data.map(user => {
                        let indexIs= data.indexOf(user) +1;
                        return (
                            <>

                                <tr className='border-x-2 border-y-2 py-8'>
                                    <th className='breack-all py-4 bg-slate-100 font-semibold'>{indexIs} </th>
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{user?.email}</td>
                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>{user?.role}</td>

                                    <td className='breack-all py-4 bg-slate-100 font-semibold'>
                                        {
                                            !user.role && <button className='text-primary font-semibold duration-500  hover:bg-gray-300 px-3 rounded' onClick={()=>makeAdmin(user?.email)}>Make Admin</button>
                                        }
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

export default MakeAdmin;