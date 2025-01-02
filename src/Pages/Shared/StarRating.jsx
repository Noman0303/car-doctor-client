import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({rating}) => {
    const stars =[];

    for (let i=1;i<=5;i++){
        if(i<=rating){
            stars.push(<FaStar key={i} className='text-yellow-500'/>)
        } 
        else if(i-0.5 === rating){
            stars.push(<FaStarHalfAlt key={i} className='text-yellow-500'/>)
        }
        else {
            stars.push(<FaRegStar key={i} className='text-yellow-500'/>)
        }
    }


    
  return (
    <div className='flex'>
        {stars}
    </div>
  )
}

export default StarRating;