import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar'

function UserLayout() {
    return (
        <div className='flex flex-col min-h-screen overflow-x-hidden'>
            <MyNavbar />

            <div className='flex flex-1'>

                <Outlet />
            </div>
            <Footer />

        </div>
    )
}

export default UserLayout
