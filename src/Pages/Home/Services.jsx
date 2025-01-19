import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard';
import useServices from '../../hooks/useServices';

// DRY --> Do not repeat yourself
const Services = () => {

  const services = useServices();

  // const[services,setServices]=useState([]);
  
  // useEffect(()=>{
  //   fetch('https://car-doctor-server-pi-one.vercel.app/services')
  //   .then(res=>res.json())
  //   .then(data => setServices(data))
  // },[])

  // console.log(data)


  return (
    <div className='mt-33 p-2' id='services'>
      <p className='text-[#FF3811] text-xl font-bold '>Service</p>
      <h2 className='font-bold text-2xl md:text-5xl mt-5'>Our Service Area</h2>
      <p className='mt-5'>Most vehicles require some level of maintenance or repair, <br /> often involving specialized services or parts to ensure optimal performance and reliability. </p>

      <p className='mt-12 text-2xl'>Number of services : {services.length}</p>
      <div className='mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        
        {
          services.map(service => <ServiceCard
          key = {service._id}
          service = {service}
          ></ServiceCard> )
        }
      </div>
      <button className='btn btn-outline text-[#FF3811] font-semibold mt-12 '>More Services</button>
    </div>
  )
}

export default Services