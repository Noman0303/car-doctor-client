import React from 'react'


const About = () => {
    return (
        <div className='my-32 p-2' id='aboutUs' >
            <div className=" min-h-[560px] rounded-xl ">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5  ">

                    <div className='relative '>
                        <img src='https://i.ibb.co.com/cQ7829h/about-us-person.jpg' className="lg:max-w-[460px] rounded-lg  " />
                        <img src='https://i.ibb.co.com/BjFFWmF/about-us-parts.jpg' className="lg:max-w-[325px] rounded-lg md:border-8 border-white  md:absolute md:top-56 lg:left-48 " />
                    </div>

                    <div className='text-center md:text-left '>
                        <p className='text-xl font-bold text-[#FF3811]'>About Us</p>
                        <h1 className="text-3xl lg:text-5xl font-bold mt-5">We are qualified <br />
                            & of experience <br /> in this field</h1>
                        <p className='mt-8'>There are many variations of passages of Lorem Ipsum <br />available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br /> look even slightly believable. </p>
                        <p className=' font-normal mt-5'>the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly <br /> believable.  </p>
                        <button className="btn bg-[#FF3811] rounded-md mt-8 text-white">Get More Info</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About