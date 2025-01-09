import React from 'react'
import group from '../../assets/icons/group.svg'
import timetable from '../../assets/icons/timetable.svg'
import person from '../../assets/icons/person.svg'
import Wrench from '../../assets/icons/Wrench.svg'
import check from '../../assets/icons/check.svg'
import deliveryt from '../../assets/icons/deliveryt.svg'


const ChooseUs = () => {
    return (
        <div className='mt-32 p-2' id='chooseUs'>
            <p className='text-[#FF3811] text-xl font-bold '>Core Features</p>
            <h2 className='font-bold text-2xl md:text-5xl mt-5'>Why Choose Us</h2>
            <p className='mt-5 text-base font-normal'>At Unique Car Engine Service, we understand that your car is more than just a vehicle — it’s your trusted companion on life’s journeys. That’s why we provide reliable, high-quality, and affordable car engine services to keep your vehicle running at its best. </p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-12 gap-6'>
                <div className='text-center border p-7 rounded-xl '>
                    <img src={group} alt="group" className='mx-auto ' />
                    <p className='font-bold mt-5 '>Expert Team</p>
                </div>
                <div className='text-center border p-7 rounded-xl  bg-[#FF3811] '>
                    <img src={timetable} alt="group" className='mx-auto ' />
                    <p className='font-bold mt-5 text-white  '>Timely Delivery</p>
                </div>
                <div className='text-center border p-7 rounded-xl '>
                    <img src={person} alt="group" className='mx-auto ' />
                    <p className='font-bold mt-5 '>24/7 Support</p>
                </div>
                <div className='text-center border p-7 rounded-xl '>
                    <img src={Wrench} alt="group" className='mx-auto ' />
                    <p className='font-bold mt-5 '>Best Equipment</p>
                </div>
                <div className='text-center border p-7 rounded-xl '>
                    <img src={check} alt="group" className='mx-auto ' />
                    <p className='font-bold mt-5 '>100% Guranty</p>
                </div>
                <div className='text-center border p-7 rounded-xl '>
                    <img src={deliveryt} alt="group" className='mx-auto ' />
                    <p className='font-bold mt-5 '>Timely Delivery</p>
                </div>

            </div>

        </div>
    )
}

export default ChooseUs