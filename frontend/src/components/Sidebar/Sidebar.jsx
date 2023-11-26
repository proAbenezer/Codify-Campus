//React Hooks
import React from 'react'

//Fake Sidebar Data
import { topics } from './SidebarData'
//Sidebar Styles
import './Sidebar.css'


function Sidebar() {
    console.log(topics)
    return (
        <aside className='sidebar'></aside>
    )
}

export default Sidebar