import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {

    const service = useLoaderData();
    console.log(service);
    const { title, _id, price,img } = service;

    const {user} = useContext(AuthContext);


    const handleBookService = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const due = form.due.value;
        const productDescription = form.productDescription.value;
        
        const booking ={
            customerName : name,
            img,
            email,
            date,
            service_id:_id,
            service: title,
            price: price,
            Description : productDescription
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Booking Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (

        <div>
            <h2 className='text-center text-3xl'>Book a Service : {title}</h2>
            <div className="card bg-[#F3F3F3] w-full shadow-lg mt-32 p-24 ">
                <form className="card-body " onSubmit={handleBookService}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control gap-6">
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                            <input type="email" name='email'  defaultValue={user?.email}  placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control gap-6">
                            <input type="date" name='date' className="input input-bordered" required />
                            <input type="text" name='due' placeholder="Due Amount" className="input input-bordered" defaultValue={'$'+price}  required />
                        </div>
                        <input type="text" name='productDescription' placeholder="Product Description" className="input input-bordered col-span-2 min-h-60 " required />
                    </div>
                    <input type="submit" value="Submit" className='border text-center mt-6 py-4 rounded-xl bg-[#FF3811] text-white' />
                    
                </form>
            </div>
        </div>
    )
}

export default CheckOut