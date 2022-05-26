import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0j6aDZSfscydCvyyzWeKWGIH1V4Z6vvtM2MwLwtdtmZHhWbnA5xfuZNYbRLRhkbBc9bgJ5adq6s7DKRbQQCUFC00fPnmRaCz');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;

    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100  my-12">
                <div class="card-body">
                    {/* <h2 className="text-success font-bold text-3xl">Product Name : {order.itemName}</h2> */}
                    <h2 class="card-title">Product Name : {order.itemName}</h2>
                    <p>Quantity : {order.quantity} </p>
                    <p>Price : {order.totalPrice} </p>
                   
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;