import React from 'react'
import '../styles/Menu.css'

function Menu() {
    return (
        <div className='menu'>
            {/* <button className='button'>NEW</button>
            <button className='button'>NOTES</button>
            <button className='button'>ABOUT </button> */}

            <a href="#" className='button'>NEW</a>
            <a href="#" className='button'>NOTES</a>
            <a href="#" className='button'>ABOUT</a>
        </div>
    )
}

export default Menu
