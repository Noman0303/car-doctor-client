import React from 'react'
import timetable from '../../assets/icons/timetable.svg'
import phone from '../../assets/icons/phone.svg'
import location from '../../assets/icons/location.svg'


const Contact = () => {
  return (
    <div id='contact' className='bg-[#151515] my-32 py-24 px-16 flex flex-col md:flex-row justify-evenly rounded-lg'>
      <div className='flex flex-col md:flex-row  items-center gap-5 '>
        <img src={timetable} alt="" />
        <div className='text-white gap-2'>
          <p className='font-medium'>We are open monday-friday</p>
          <p className='text-2xl font-bold'>7:00 am - 9:00 pm</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row  items-center gap-5 '>
        <img src={phone} alt="" />
        <div className='text-white gap-2'>
          <p className='font-medium'>Have a question?</p>
          <p className='text-2xl font-bold'>+2546 251 2658</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row  items-center gap-5 '>
        <img src={location} alt="" />
        <div className='text-white gap-2'>
          <p className='font-medium'>Need a repair? our address</p>
          <p className='text-2xl font-bold'>Liza Street, New York</p>
        </div>
      </div>

    </div>
  )
}

export default Contact;