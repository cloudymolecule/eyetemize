import React from 'react'
import '../styles/New.css'
import { Link } from 'react-router-dom'

function New() {
    return (
        <div className='new-container'>
            <input className='new-input' placeholder='Title'/>
            <textarea className='new-textarea' placeholder='Type your note'/>
            <div className='new-buttons'>
                <Link to='/new' className='button'>SAVE</Link>
                <Link to='/new' className='button'>RESET</Link>
            </div>
        </div>
    )
}

export default New
