//React Hooks
import React from 'react'
//React Router Dom
import { NavLink } from 'react-router-dom'

//Fake Sidebar Data
import { topics } from './SidebarData'
//Sidebar Styles
import './Sidebar.css'


function Sidebar() {
    console.log(topics[0].location)
    return (
        <aside className='sidebar'>
            <div className="sidebar__content">
                <h1 className="sidebar__header--title">{topics[0].header}</h1>
                <ul className="sidebar__topics">
                    {
                        topics[0].body.map(topic => <li className='sidebar__topic'><NavLink to={topics[1].location}>{topic}</NavLink></li>)
                    }
                </ul>
            </div>
            <div className="sidebar__content">
                <h1 className="sidebar__header--title">{topics[1].header}</h1>
                <ul className="sidebar__topics">
                    {
                        topics[1].body.map(topic => <li className='sidebar__topic'><NavLink to={topics[1].location}>{topic}</NavLink></li>)
                    }
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar