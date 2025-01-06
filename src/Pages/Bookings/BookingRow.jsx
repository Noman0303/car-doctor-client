import React from 'react'

const BookingRow = ({ booking }) => {

    const { img, customerName, service, price, date } = booking;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>

            <td>
                <div className="flex items-center">
                    <div className="avatar">
                    <div className="rounded h-36 w-36">
                            <img src={img} alt="Service Image" />
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
                <button className="btn bg-[#FF3811] text-white rounded-xl">Delete</button>
            </th>
        </tr>
    )
}

export default BookingRow