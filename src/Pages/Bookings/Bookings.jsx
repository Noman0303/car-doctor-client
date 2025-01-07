import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'
import BookingRow from './BookingRow';

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    // Fetch bookings by the logged-in user's email if the user exists

    const url = `http://localhost:5000/bookings?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data)
            })
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
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
        fetch(`http://localhost:5000/bookings/${id}`, {
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
                    const updated = bookings.find(booking =>booking._id === id);
                    updated.status ='confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }


    // useEffect(() =>{
    //     if(user?.email){
    //         fetch(`http://localhost:5000/bookings?email=${user.email}`)
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data)
    //             setBookings(data)}
    //         )
    //     }

    // },[user])

    return (
        <div>
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