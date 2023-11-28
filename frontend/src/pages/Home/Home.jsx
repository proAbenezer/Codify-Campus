//React Hooks
import React from 'react'

//Home Styles
import './Home.css'

//Component
import Sidebar from '../../components/Sidebar/Sidebar'
import Main from '../../components/Main/Main'
import { Outlet } from 'react-router-dom'
function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Home