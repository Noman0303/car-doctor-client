import React from 'react'
import { LuArrowRight } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";
import img1 from '../../assets/images/banner/bannerImage-1.jpg'
import img2 from '../../assets/images/banner/bannerImage-2.jpg'
import img3 from '../../assets/images/banner/bannerImage-3.jpg'
import img4 from '../../assets/images/banner/bannerImage-4.jpg'
import img5 from '../../assets/images/banner/bannerImage-5.jpg'
import img6 from '../../assets/images/banner/bannerImage-6.jpg'


const Banner = () => {
    return (
        <div className='max-h-[600px] '>

            <div className="carousel w-full max-h-[600px] rounded-lg ">

                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={img1}
                        className="w-full" />

                    <div className=' w-full top-0 h-full text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute '>

                        <div className='mt-24 md:ml-10 lg:ml-24'>
                            <h2 className='text-white hidden sm:block md:text-2xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>

                            <p className='text-white hidden sm:block text-base font-normal mt-7'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>

                            <div className='flex gap-4 mt-7 '>
                                <button className="btn btn-sm md:btn-md btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Discover More</button>
                                <button className="btn btn-sm md:btn btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Latest Project</button>
                            </div>
                        </div>

                        <div className="mt-2 lg:mt-6 mr-5 lg:mr-12 justify-end gap-2 flex ">
                            <a href="#slide6" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowLeft /></a>
                            <a href="#slide2" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowRight /></a>
                        </div>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={img2}
                        className="w-full" />

                    <div className='w-full h-full text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute '>

                        <div className='mt-24 md:ml-10 lg:ml-24'>
                            <h2 className='text-white hidden sm:block md:text-2xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>

                            <p className='text-white hidden sm:block text-base font-normal mt-7'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>

                            <div className='flex gap-4 mt-7 '>
                                <button className="btn btn-sm md:btn-md btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Discover More</button>
                                <button className="btn btn-sm md:btn btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Latest Project</button>
                            </div>
                        </div>

                        <div className="mt-2 lg:mt-6 mr-5 lg:mr-12 justify-end gap-2 flex  ">
                            <a href="#slide1" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowLeft /></a>
                            <a href="#slide3" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowRight /></a>
                        </div>
                    </div>

                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full" />

                    <div className=' w-full h-full text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute '>

                        <div className='mt-24 md:ml-10 lg:ml-24'>
                            <h2 className='text-white hidden sm:block md:text-2xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>

                            <p className='text-white hidden sm:block text-base font-normal mt-7'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>

                            <div className='flex gap-4 mt-7 '>
                                <button className="btn btn-sm md:btn-md btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Discover More</button>
                                <button className="btn btn-sm md:btn btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Latest Project</button>
                            </div>
                        </div>

                        <div className="mt-2 lg:mt-6 mr-5 lg:mr-12 justify-end gap-2 flex  ">
                            <a href="#slide2" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowLeft /></a>
                            <a href="#slide4" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowRight /></a>
                        </div>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={img4}
                        className="w-full" />

                    <div className=' w-full h-full text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute '>

                        <div className='mt-24 md:ml-10 lg:ml-24'>
                            <h2 className='text-white hidden sm:block md:text-2xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>

                            <p className='text-white hidden sm:block text-base font-normal mt-7'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>

                            <div className='flex gap-4 mt-7 '>
                                <button className="btn btn-sm md:btn-md btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Discover More</button>
                                <button className="btn btn-sm md:btn btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Latest Project</button>
                            </div>
                        </div>

                        <div className="mt-2 lg:mt-6 mr-5 lg:mr-12 justify-end gap-2 flex  ">
                            <a href="#slide3" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowLeft /></a>
                            <a href="#slide5" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowRight /></a>
                        </div>
                    </div>

                </div>

                <div id="slide5" className="carousel-item relative w-full">
                    <img
                        src={img5}
                        className="w-full" />

                    <div className=' w-full h-full text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute '>

                        <div className='mt-24 md:ml-10 lg:ml-24'>
                            <h2 className='text-white hidden sm:block md:text-2xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>

                            <p className='text-white hidden sm:block text-base font-normal mt-7'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>

                            <div className='flex gap-4 mt-7 '>
                                <button className="btn btn-sm md:btn-md btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Discover More</button>
                                <button className="btn btn-sm md:btn btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Latest Project</button>
                            </div>
                        </div>

                        <div className="mt-2 lg:mt-6 mr-5 lg:mr-12 justify-end gap-2 flex  ">
                            <a href="#slide4" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowLeft /></a>
                            <a href="#slide6" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowRight /></a>
                        </div>
                    </div>

                </div>

                <div id="slide6" className="carousel-item relative w-full">
                    <img
                        src={img6}
                        className="w-full" />

                    <div className='w-full h-full text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute '>

                        <div className='mt-24 md:ml-10 lg:ml-24'>
                            <h2 className='text-white hidden sm:block md:text-2xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>

                            <p className='text-white hidden sm:block text-base font-normal mt-7'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>

                            <div className='flex gap-4 mt-7 '>
                                <button className="btn btn-sm md:btn-md btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Discover More</button>
                                <button className="btn btn-sm md:btn btn-outline text-white transform transition duration-200 hover:bg-[#FF3811] opacity-80">Latest Project</button>
                            </div>
                        </div>

                        <div className="mt-2 lg:mt-6 mr-5 lg:mr-12 justify-end gap-2 flex  ">
                            <a href="#slide5" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowLeft /></a>
                            <a href="#slide1" className="btn btn-circle btn-sm md:btn-md transform transition duration-200 hover:bg-[#FF3811] opacity-80"><LuArrowRight /></a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Banner