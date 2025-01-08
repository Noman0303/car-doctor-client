import React, { useEffect, useState } from 'react'
import ProductCards from './ProductCards';


const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)
    console.log(setProducts)
    // console.log(data)


    return (
        <div className='mt-33 p-2' id='services'>
            <p className='text-[#FF3811] text-xl font-bold '>Popular Products</p>
            <h2 className='font-bold text-2xl md:text-5xl mt-5'>Browse Our Products</h2>
            <p className='mt-5'>Explore a wide range of essential car products designed to enhance your vehicle's performance, safety, and style. From high-quality engine parts to advanced lighting solutions, our products are crafted to meet the diverse needs of car enthusiasts and everyday drivers alike. </p>

            <p className='mt-12 text-2xl'>Number of products : {products.length}</p>
            <div className='mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    products.map(product => <ProductCards
                        key={product.id}
                        product={product} >
                    </ProductCards>)
                }
            </div>
            <button className='btn btn-outline text-[#FF3811] font-semibold mt-12 '>More Products</button>
        </div>
    )
}

export default Products