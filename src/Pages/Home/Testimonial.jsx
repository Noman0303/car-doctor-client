import React from 'react'
import quote from '../../assets/icons/quote.svg'
import person1 from '../../assets/images/Testimonial/person-1.jpeg'
import person2 from '../../assets/images/Testimonial/person-2.jpeg'
import person3 from '../../assets/images/Testimonial/person-3.jpg'
import person4 from '../../assets/images/Testimonial/person-4.jpg'
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div className='mt-32 p-2' id='testimonial'>
            <p className='text-[#FF3811] text-xl font-bold '>Testimonial</p>
            <h2 className='font-bold text-2xl md:text-5xl mt-5'>What Customer Says</h2>
            <p className='mt-5 text-base font-normal'>Our customers trust us for reliable, efficient, and affordable car servicing. Here’s what they have to say about their experience with Unique Car Engine Service — where quality and customer satisfaction come first! </p>

            <div className="carousel w-full mt-12 mb-32 ">
                <div id="testimonial-1" className="carousel-item relative w-full">

                    <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-6 '>

                        <div className='py-12 pl-12 pr-5 rounded-lg shadow-lg border'>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex gap-5 items-center'>
                                    <img src={person1} alt="" className='w-16 h-16 rounded-full p-1' />
                                    <div className='text-left'>
                                        <h2 className='text-2xl font-bold text-[#444]'>Awlad Hossain</h2>
                                        <p className='font-semibold text-[#737373] mt-2'>Businessman</p>
                                    </div>
                                </div>
                                <img src={quote} alt="quote" className=' w-14 h-14 ' />
                            </div>
                            <div className='mt-5 text-left'>
                                <p>I’ve never had such a smooth and transparent experience with car servicing before. The team at Unique Car Engine Service is professional, efficient, and trustworthy. They clearly explain the work done and deliver on time. Highly recommended!</p>
                                <div className='flex justify-start mt-5'>
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                </div>
                            </div>
                        </div>

                        <div className='py-12 pl-12 pr-5 rounded-lg shadow-lg border'>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex gap-5 items-center'>
                                    <img src={person2} alt="" className='w-16 h-16 rounded-full p-1' />
                                    <div className='text-left'>
                                        <h2 className='text-2xl font-bold text-[#444]'>Michael Lee</h2>
                                        <p className='font-semibold text-[#737373] mt-2'>Software Engineer</p>
                                    </div>
                                </div>
                                <img src={quote} alt="quote" className=' w-14 h-14 ' />
                            </div>
                            <div className='mt-5 text-left'>
                                <p>Their service was top-notch! I was impressed with how quickly they diagnosed and fixed my car's engine issues. I’m definitely coming back for future maintenance. Great service with a friendly approach!</p>
                                <div className='flex justify-start mt-5'>
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-end duration-700 ease-in-out">
                        <a href="#testimonial-2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>

                </div>
                <div id="testimonial-2" className="carousel-item relative w-full">

                    <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-6 '>

                        <div className='py-12 pl-12 pr-5 rounded-lg shadow-lg border'>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex gap-5 items-center'>
                                    <img src={person3} alt="" className='w-16 h-16 rounded-full p-1' />
                                    <div className='text-left'>
                                        <h2 className='text-2xl font-bold text-[#444]'>David Carter</h2>
                                        <p className='font-semibold text-[#737373] mt-2'>Sales Manager</p>
                                    </div>
                                </div>
                                <img src={quote} alt="quote" className=' w-14 h-14 ' />
                            </div>
                            <div className='mt-5 text-left'>
                                <p>Honest, reliable, and affordable! The staff took the time to explain the repairs in detail. I really appreciate the transparency and quality of their work. My car runs like new now. Fantastic experience!</p>
                                <div className='flex justify-start mt-5'>
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                </div>
                            </div>
                        </div>

                        <div className='py-12 pl-12 pr-5 rounded-lg shadow-lg border'>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex gap-5 items-center'>
                                    <img src={person4} alt="" className='w-16 h-16 rounded-full p-1' />
                                    <div className='text-left'>
                                        <h2 className='text-2xl font-bold text-[#444]'>Robert Smith</h2>
                                        <p className='font-semibold text-[#737373] mt-2'>Mechanical Engineer</p>
                                    </div>
                                </div>
                                <img src={quote} alt="quote" className=' w-14 h-14 ' />
                            </div>
                            <div className='mt-5 text-left'>
                                <p>Unique Car Engine Service is my go-to place for car repairs. Their attention to detail and dedication to customer satisfaction is unmatched. I trust them with my vehicle, and they’ve never let me down!</p>
                                <div className='flex justify-start mt-5'>
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-start duration-700 ease-in-out">
                        <a href="#testimonial-1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonial