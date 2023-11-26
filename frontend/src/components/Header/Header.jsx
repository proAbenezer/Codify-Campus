//React Hooks
import React, { useState, useEffect } from 'react'

//React Router Dom
import { Link } from 'react-router-dom'

//Boxicons
import 'boxicons'

//Header Styles
import './Header.css'

function Header() {
    const [onScroll, setOnScroll] = useState(false)
    function handleNavBarOnScroll() {
        if (window.scrollY > 30) {
            setOnScroll(true)
        } else {
            setOnScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleNavBarOnScroll)
        return () => {
            window.removeEventListener('scroll', handleNavBarOnScroll)
        }
    }, [])

    return (
        <nav className={onScroll ? 'header active' : 'header'}>
            <div className="header__left">
                <h1 className="header__logo">
                    <Link to='/'>
                        Codify<span className='header__logo--colored'>Campus</span>
                    </Link>
                </h1>
            </div>
            <div className="header__center">
                <div className="header__searchbar">
                    <input
                        type="text"
                        className="header__searchInput"
                        placeholder='Search'
                        autoCorrect='off'
                    />
                    <box-icon
                        name='search-alt-2'
                        class='header__searchbar--icon'
                        color='#ffffff'
                        size='20px'
                    ></box-icon>
                </div>
            </div>
            <div className="header__right">
                <div className="header__right--icons">
                    <box-icon
                        name='sun'
                        class='header__sunIcon'
                        color='#ffffff'
                        size='30px'
                    ></box-icon>
                    <box-icon
                        name='moon'
                        class='header__moonIcon'
                    ></box-icon>
                </div>
                <div className="header__userIcon">
                    <span className="header__userIcon--image">A</span>
                </div>
            </div>
        </nav>
    )
}

export default Header