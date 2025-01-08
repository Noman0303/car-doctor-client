import React from 'react'
import checkoutImg from '../../assets/images/checkout/checkout.png'
import serviceDetailimg from '../../assets/images/serviceDetails/serviceDetails.jpeg'
import serviceDetailVidImg from '../../assets/images/serviceDetails/serviceDetails-video.jpeg'

const ServiceDetails = () => {
  return (
    <div>
      {/* Banner */}
      <div className='mt-5 mb-32'>
        <div className='relative'>
          <img src={checkoutImg} className='w-full ' alt="" />
          <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute top-0 w-full h-full rounded-xl'>
            <div className='absolute left-2 top-2 md:top-32 md:left-32'>
              <h2 className='font-bold text-xl md:text-3xl text-white '>Service Details</h2>
            </div>
          </div>
          <div className='bg-[#FF3811] text-white absolute w-72 h-12 text-center py-2 bottom-0 left-1/2 transform -translate-x-1/2 ' style={{ clipPath: 'polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)' }} >
            <h2 className='text-xl font-medium'>Home/Service Details</h2>
          </div>
        </div>

        {/* Details Sections */}

        <div className='grid grid-cols-3 mt-32 p-2'>

          <div className='col-span-2'>
            <img src={serviceDetailimg} alt="" className='h-auto md:h-[400px] rounded-xl' />
            <h2 className='mt-12 text-4xl font-bold'>Unique Car Engine Service</h2>
            <p className='mt-7'>At Unique Car Engine Service, we specialize in high-quality engine repairs and maintenance to keep your vehicle running smoothly. Our expert technicians use state-of-the-art equipment and advanced techniques to ensure optimal engine performance. Whether it's routine servicing or complex repairs, we are committed to delivering reliable, efficient, and affordable solutions for your car’s engine. </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-7'>
              <div className='bg-[#F3F3F3] p-10 rounded-xl border border-t-2 border-t-[#FF3811]'>
                <h2 className='text-xl font-bold '>Instant Car Services</h2>
                <p>Instant Car Services provides quick, reliable solutions for your vehicle’s maintenance and emergency repair needs.</p>
              </div>
              <div className='bg-[#F3F3F3] p-10 rounded-xl border border-t-2 border-t-[#FF3811]'>
                <h2 className='text-xl font-bold '>24/7 Quality Service</h2>
                <p>We offer 24/7 quality service, ensuring your vehicle gets expert care anytime you need it.</p>
              </div>
              <div className='bg-[#F3F3F3] p-10 rounded-xl border border-t-2 border-t-[#FF3811]'>
                <h2 className='text-xl font-bold '>Easy Customer Service</h2>
                <p>Our easy customer service ensures hassle-free assistance, quick responses, and seamless solutions for your vehicle needs.</p>
              </div>
              <div className='bg-[#F3F3F3] p-10 rounded-xl border border-t-2 border-t-[#FF3811]'>
                <h2 className='text-xl font-bold '>Quality Cost Service</h2>
                <p>We provide quality service at a reasonable cost, ensuring top value for your money every time.</p>
              </div>
            </div>

            <p className='mt-7'>What sets us apart is our commitment to personalized service. Every vehicle has unique needs, and we take the time to understand your car's specific requirements. Whether you need a simple tune-up or a complete engine overhaul, we provide reliable, cost-effective solutions tailored to your vehicle. With our dedicated support, you can drive with confidence, knowing your engine is in expert hands.</p>

            <h2 className='text-xl font-bold mt-12'>3 Simple Steps to Process</h2>

            <ol>
              <li className='mt-7'>
                <h2 className='text-lg font-semibold'>Book Your Appointment</h2>
                <p>Schedule your service online or visit us directly. Share your car's details and preferred time — we’ll handle the rest.</p>
              </li>
              <li className='mt-4'>
                <h2 className='text-lg font-semibold'> Get a Full Engine Inspection</h2>
                <p>Our expert technicians perform a detailed inspection to diagnose any issues and recommend necessary repairs or maintenance.</p>
              </li>
              <li className='mt-4'>
                <h2 className='text-lg font-semibold'>Service and Drive Away</h2>
                <p>Once the service is complete, we’ll update you on your engine’s condition. Enjoy a smoother, safer drive!</p>
              </li>
            </ol>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-7'>

              <div className='text-center border p-10 rounded-xl'>
                <div className='flex justify-center'>
                  <div className='text-white bg-[#FF3811] rounded-full w-16 h-16 flex items-center justify-center border-[10px] border-red-100 '>
                    <p>01</p>
                  </div>
                </div>
                <h2 className='text-xl font-bold mt-5'>Step One</h2>
                <p>Schedule your car engine service easily online or visit us. Share your details, pick a time, and get a quick confirmation.</p>
              </div>

              <div className='text-center border p-10 rounded-xl'>
                <div className='flex justify-center'>
                  <div className='text-white bg-[#FF3811] rounded-full w-16 h-16 flex items-center justify-center border-[10px] border-red-100 '>
                    <p>02</p>
                  </div>
                </div>
                <h2 className='text-xl font-bold mt-5'>Step Two</h2>
                <p>Our experts inspect your engine thoroughly, diagnose issues, and recommend repairs to boost performance and ensure a smooth, trouble-free drive.</p>
              </div>

              <div className='text-center border p-10 rounded-xl'>
                <div className='flex justify-center'>
                  <div className='text-white bg-[#FF3811] rounded-full w-16 h-16 flex items-center justify-center border-[10px] border-red-100 '>
                    <p>03</p>
                  </div>
                </div>
                <h2 className='text-xl font-bold mt-5'>Step Three</h2>
                <p>AWe complete the service using advanced tools. Once done, we update you, ensuring your car is ready to hit the road safely and efficiently.</p>
              </div>
            </div>

            <div className='w-full h-auto md:h-[400px] mt-7'>
              <iframe
                className='w-full h-full rounded-lg shadow-lg'
                src="https://www.youtube.com/embed/SbNwS1qXj1Q"
                title='Youtube Video'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>


          </div>


        </div>
      </div>
    </div>
  )
}

export default ServiceDetails