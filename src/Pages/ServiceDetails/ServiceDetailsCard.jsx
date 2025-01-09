import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceDetailsCard = ({ serviceDetail }) => {

    const { title,_id } = serviceDetail;
    console.log(serviceDetail);

    return (
        <div>
            <Link to={`${_id}`}>
                <div className='flex justify-between items-center bg-[#FFF] hover:bg-[#FF3811] hover:text-white border p-4 transition duration-300 group mt-5 rounded-md'>
                    <h2 className='text-black group-hover:text-white font-semibold'>{title}</h2>
                    <FaArrowRight className='text-black group-hover:text-white ' />
                </div>
            </Link>

        </div>
    )
}

export default ServiceDetailsCard;