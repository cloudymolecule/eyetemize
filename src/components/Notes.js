import React from 'react'
import '../styles/Notes.css'

function Notes() {
    return (
        <div className='notes-container'>
            <div className='notes-note-title'>LIST</div>
            <div className='notes-note-content'>NOTE</div>
            <div className='notes-list'>
                test
            </div>
            <div className='notes-content'>
                test
            </div>
            {/* <br /> */}
            {/* <div className='notes-buttons'> */}
                    <button className='button'>EDIT</button>
                    <button className='button'>DELETE</button>
            {/* </div> */}
        </div>
    )
}

export default Notes
