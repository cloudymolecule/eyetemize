import '../styles/New.css'
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
        formData.append('title', this.state.title)
        formData.append('content', this.state.content)
        this.props.postNote(formData)
        this.handleReset(e)
        this.successMessage()
    }

    handleReset = e => {
        e.preventDefault()
        this.setState({
            title:'',
            content:''
        })
    }

    successMessage = () => {
        const title = document.getElementById('title')
        title.innerText = 'NOTE SAVED'
        title.classList.add('title-saved')
        title.classList.remove('title-active')
        setTimeout(() => {
            title.innerText = 'EYETEMIZE'
            title.classList.remove('title-saved')
            title.classList.add('title-active')
        }, 3000);
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

const mapStateToProps = state => ({ 
    errors: state.notes.errors,
    loading: state.notes.loading
 })

export default connect(mapStateToProps, { postNote })(New)
