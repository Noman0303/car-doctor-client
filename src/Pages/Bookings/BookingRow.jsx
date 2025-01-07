import React from 'react'

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    const { img, customerName, service, price, date, _id, status } = booking;

   

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)}
                    className="btn btn-sm btn-circle btn-outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>

            <td>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="rounded h-36 w-36">
                            {
                                img && <img src={img} alt="Service Image" />
                            }
                        </div>
                    </div>
                </div>
            </td>

            <td>
                <div className="flex font-bold items-center ">
                    <p>{customerName}</p>
                </div>
            </td>

            <td className='font-semibold'>${price}</td>

            <td className='font-medium' >{date}</td>
            <th>
                {
                    status === 'confirm'?
                    <span className='font-bold text-primary'>Confirmed</span>:
                    <button onClick={()=>handleBookingConfirm(_id)} className="btn bg-[#FF3811] text-white rounded-xl">Please Confirm</button>
                }
            </th>
        </tr>
    )
}

export default BookingRow