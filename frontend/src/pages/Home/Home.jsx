//React Hooks
import React from 'react'

//Home Styles
import './Home.css'

//Component
import Sidebar from '../../components/Sidebar/Sidebar'
function Home() {
    return (
        <div className='home'>
            <div className="home__sidebar">
                <Sidebar />
            </div>
            <div className="home__main"></div>
        </div>
    )
}

export default Home