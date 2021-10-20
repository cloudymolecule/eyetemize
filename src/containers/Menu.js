import React from 'react'
import '../styles/Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className='menu'>
            <Link to='/new' className='button'>NEW</Link>
            <Link to='/notes' className='button'>NOTES</Link>
            <Link to='/about' className='button'>ABOUT</Link>
        </div>
    )
}

export default Menu
