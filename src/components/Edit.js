import '../styles/Edit.css'
import { connect } from 'react-redux'
import { editNote } from '../actions/notes'
import React, { Component } from 'react'

class New extends Component {

    state = {
        title: '',
        content: '',
        id: ''
    }

    componentDidMount() {
        let currentNote = this.props.notes.notes.filter(n => n.id === parseInt(this.props.match.params.id))
         this.setState({
            title: currentNote[0].title,
            content: currentNote[0].content,
            id: currentNote[0].id
        })
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
        formData.append('id', this.state.id)
        this.props.editNote(formData)
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
        title.innerText = 'NOTE EDITED'
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
            <form className='edit-form' onSubmit={this.handleSubmit}>
                <input name='title' onChange={this.handleChange} className='edit-input' placeholder='Title' value={this.state.title}/>
                <textarea name='content' onChange={this.handleChange} className='edit-textarea' placeholder='Type your note' value={this.state.content}/>
                <button type='submit' className='button'>SAVE</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({ 
    notes: state.notes,
    loading: state.notes.loading
 })

export default connect(mapStateToProps, { editNote })(New)
