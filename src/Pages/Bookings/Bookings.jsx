import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'
import BookingRow from './BookingRow';
import checkoutImg from '../../assets/images/checkout/checkout.png'
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();


    // Fetch bookings by the logged-in user's email if the user exists

    // const url = `https://car-doctor-server-pi-one.vercel.app/bookings?email=${user?.email}`
    const url = `/bookings?email=${user?.email}`


    //axios die korle {withCredentials:true} referes when the client side send the url data to server it also send the credentials.
    //fetch die korle {withCredentials:'include'} referes when the client side send the url data to server it also send the credentials.

    useEffect(() => {
        axiosSecure.get(url)
        .then(res=>setBookings(res.data));
        

        // axios.get(url,{withCredentials:true}) 
        // .then(res => {
        //     setBookings(res.data);
        // })


        // fetch(url,{credentials:'include'})
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //     })
    }, [url,axiosSecure]);

    // only axiosSecure use korar somoy link er sathe sathe axiosSecure o dependency hisebe use korbo. 

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`https://car-doctor-server-pi-one.vercel.app/bookings/${id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('delete successful')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`https://car-doctor-server-pi-one.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            // ei case e only ekta data pathacchi patch korar jonno , seita holo status. so eita stringify korbo
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    // alert('update successful')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }


    // useEffect(() =>{
    //     if(user?.email){
    //         fetch(`https://car-doctor-server-pi-one.vercel.app/bookings?email=${user.email}`)
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data)
    //             setBookings(data)}
    //         )
    //     }

    // },[user])

    return (
        <div>
            <div className='mt-5 mb-32'>
                <div className='relative'>
                    <img src={checkoutImg} className='w-full ' alt="" />
                    <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute top-0 w-full h-full rounded-xl'>
                        <div className='absolute left-2 top-2 md:top-32 md:left-32'>
                            <h2 className='font-bold text-xl md:text-3xl text-white '>Cart Details</h2>
                            <p className='text-[#FF3811]'>Home - Product Details</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='text-center text-4xl my-5'>My Bookings : {bookings.length}</h2>
            <div className="overflow-x-auto my-32">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-gray-200 text-base font-semibold '>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking =>
                                <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleBookingConfirm={handleBookingConfirm}
                                ></BookingRow>
                            )
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Bookings