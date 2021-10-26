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
        console.log('submitted form')
        // const formData = new FormData()
        // formData.append(this.state.title)
        // formData.append(this.state.content)
        // this.props.postNote(formData)
    }

    handleReset = e => {
        e.preventDefault()
        this.setState({
            title:'',
            content:''
        })
    }

    render() {
        return (
            <form className='new-form' onSubmit={this.handleSubmit}>
                <input name='title' onChange={this.handleChange} className='new-input' placeholder='Title' value={this.state.title}/>
                <textarea name='content' onChange={this.handleChange} className='new-textarea' placeholder='Type your note' value={this.state.content}/>
                <div className='new-buttons'>
                    <button type='submit' className='button'>SAVE</button>
                    <button onClick={this.handleReset} className='button'>RESET</button>
                </div>
            </form>
        )
    }
}

export default New
