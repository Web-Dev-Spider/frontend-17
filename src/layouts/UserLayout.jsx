import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar'

function UserLayout() {
    return (
        <div className='flex flex-col  max-h-screen '>
            <MyNavbar />

            <div className='flex flex-1 mt-16 lg:mt-20'>
                {/* <div className='flex-1 items-start'> */}
                <Outlet />
            </div>
            <Footer />

        </div>
    )
}

export default UserLayout
