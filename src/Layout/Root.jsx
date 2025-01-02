import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import NavBar from '../Pages/Shared/NavBar/NavBar'

const Root = () => {
    return (
        <div className='mx-auto'>
            <div className='max-w-7xl mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Root