//React Hooks
import React from 'react'
//React Router Dom
import { NavLink } from 'react-router-dom'

//Fake Sidebar Data
import SidebarData from './SidebarData'
//Sidebar Styles
import './Sidebar.css'


function Sidebar() {
    const { headers, lessons, id } = SidebarData[0]
    console.log(headers)

    return (
        <aside className='sidebar'>
            {
                SidebarData.length > 0
                    ? (
                        <h1>nothing</h1>
                    )
                    : null
            }
        </aside>
    )
}

export default Sidebar