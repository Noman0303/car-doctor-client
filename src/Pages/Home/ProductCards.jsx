import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import StarRating from '../Shared/StarRating';


const ProductCards = ({ product }) => {

    const {  id, name, price, image_url } = product;

    return (
        <div className="shadow-lg rounded-lg border-2 bg-[#FFF] p-6 text-center">
            <figure >
                <img
                    src={image_url}
                    alt="Car Service"
                    className="rounded-lg h-[208px] w-full bg-[#F3F3F3]" />
            </figure>
            <div  className='flex justify-center mt-5'>
                <StarRating rating={product.rating}></StarRating>
            </div>
            <h2 className="text-2xl font-bold mt-5">{name}</h2>
            <p className='text-[#FF3811]'>Price : ${price}</p>
            <div className=' mt-5 text-[#FF3811] flex justify-end'>
                <Link to={`productDetails/${id}`}><FaArrowRight /></Link>
            </div>
        </div>
    )
}

export default ProductCards