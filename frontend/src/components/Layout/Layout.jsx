//React Hooks Import
import React from 'react'

//Layout Styles
import './Layout.css'
//React Router Dom
import { Outlet } from 'react-router-dom'

//Components
import Header from '../Header/Header'


function Layout() {
    return (
        <div className='layout'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout