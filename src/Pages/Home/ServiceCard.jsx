import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'

const ServiceCard = ({ service }) => {

    const { _id, title, price, img } = service;

    return (
        <div className="shadow-lg rounded-lg border-2 bg-[#FFF] p-6">
            <figure >
                <img
                    src={img}
                    alt="Car Service"
                    className="rounded-lg h-[208px] w-full" />
            </figure>
            <h2 className="text-2xl font-bold mt-5">{title}</h2>
            <div className='text-[#FF3811] mt-5 flex justify-between'>
                <p className=''>Price : ${price}</p>
                <Link to={`serviceDetails/${_id}`}>
                    <FaArrowRight data-tooltip-id="my-tooltip" data-tooltip-content="Service details" />
                </Link>
            </div>
            <Link to={`/checkout/${_id}`}>
                <button className='btn btn-outline text-green-600 mt-5'>Book Service Now</button>
            </Link>

            <Tooltip id="my-tooltip" />
        </div>
    )
}

export default ServiceCard