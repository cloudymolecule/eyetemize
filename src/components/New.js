import React from 'react'
import '../styles/New.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postNote } from '../actions/notes'

import React, { Component } from 'react'

class New extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = e => {
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append(this.state.title)
        formData.append(this.state.content)
        this.props.postNote(formData)
    }

    render() {
        return (
            <div className='new-container'>
                <input name='title' onChange={this.handleChange} className='new-input' placeholder='Title' value={this.state.title}/>
                <textarea name='content' onChange={this.handleChange} className='new-textarea' placeholder='Type your note' value={this.state.title}/>
                <div className='new-buttons'>
                    <Link to='/new' className='button'>SAVE</Link>
                    <Link to='/new' className='button'>RESET</Link>
                </div>
            </div>
        )
    }
}

export default New
