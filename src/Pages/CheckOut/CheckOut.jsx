import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import checkoutImg from '../../assets/images/checkout/checkout.png'
import { IoReturnUpBack } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

const CheckOut = () => {

    const service = useLoaderData();
    console.log(service);
    const { title, _id, price, img } = service;

    const { user } = useContext(AuthContext);


    const handleBookService = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const due = form.due.value;
        const productDescription = form.productDescription.value;

        const booking = {
            customerName: name,
            img,
            email,
            date,
            service_id: _id,
            service: title,
            price: price,
            Description: productDescription
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Booking Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (

        <div>
            {/* Banner */}
            <div className='mt-5 mb-32'>
                <div className='relative'>
                    <img src={checkoutImg} className='w-full ' alt="" />
                    <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute top-0 w-full h-full rounded-xl'>
                        <div className='absolute left-2 top-2 md:top-32 md:left-32'>
                            <h2 className='font-bold text-xl md:text-3xl text-white '>CHeck Out</h2>
                        </div>
                    </div>
                    <div className='bg-[#FF3811] text-white absolute w-72 h-12 text-center py-2 bottom-0 left-1/2 transform -translate-x-1/2 ' style={{ clipPath: 'polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)' }} >
                        <h2 className='text-xl font-medium'>Home/Checkout</h2>
                    </div>
                </div>


            </div>

            {/* Form */}
            <div className="card bg-[#F3F3F3] w-full shadow-lg mt-32 p-4 ">
                <h2 className='text-center text-xl md:text-3xl'>Book a Service : {title}</h2>
                <form className="card-body " onSubmit={handleBookService}>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col md:flex-row gap-6' >
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered md:w-1/2" required />
                            <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered md:w-1/2" required />
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <input type="date" name='date' className="input input-bordered md:w-1/2 " required />
                            <input type="text" name='due' placeholder="Due Amount" className="input input-bordered md:w-1/2" defaultValue={'$' + price} required />
                        </div>
                    </div>
                    <input type="text" name='productDescription' placeholder="Product Description" className="input input-bordered mt-6" />


                    <input type="submit" value="Order Confirm" className='border text-center mt-6 py-4 rounded-xl bg-[#FF3811] text-white text-xl font-semibold' />
                </form>
            </div>

            <div className='flex justify-between items-center p-4 mt-12 mb-32'>
                <div className='flex gap-2'>
                    <IoReturnUpBack />
                    <p>Continue Shopping</p>
                </div>
                <div className='flex gap-2 items-center' >
                    <RiDeleteBin5Line />
                    <p>Clear Shopping Cart</p>
                </div>
            </div>
        </div>
    )
}

export default CheckOut