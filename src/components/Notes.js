import React, { Component } from 'react'
import '../styles/Notes.css'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions/notes'
import { deleteNote } from '../actions/notes'
import { Link } from 'react-router-dom'

class Notes extends Component {
    
    state = {
        content: '',
        id: ''
    }

    componentDidMount() {
        this.props.fetchNotes()
    }

    onNoteClick = (id) => {
        const noteCont = this.props.notes.notes.filter(note => id === note.id)
        const selNote = document.getElementById(`note-${id}`)
        this.setState({content: noteCont[0].content, id: id})
        this.removeNoteClass()
        selNote.classList.add('notes-back-color')
    }

    removeNoteClass = () => {
        const allNotes = document.querySelectorAll('.notes-all')
        allNotes.forEach(element => {
            element.classList.remove('notes-back-color')
        })
    }

    iterateNoteTitles = () => {
        const notesIt = this.props.notes.notes.map(n => <li className='notes-all' key={'note-' + n.id} id={'note-' + n.id} onClick={() => {this.onNoteClick(n.id)}}>{n.title}</li>)
        return notesIt
    }

    deleteNote = (id) => {
        this.props.deleteNote(id)
        document.getElementById(`note-${id}`).remove()
        this.setState({content: ''})
    }

    render() {
        
        return (
            <div className='notes-container'>
                <div className='notes-note-title'>LIST</div>
                <div className='notes-note-content'>NOTE</div>
                <ul className='notes-list'>
                    {this.iterateNoteTitles()}
                </ul>
                <div className='notes-content'>
                    {this.state.content}
                </div>
                <button className='button'><Link style={{ textDecoration: 'none', color: 'rgba(133, 133, 133, 1)' }} to={'/edit/' + this.state.id} params={{ id: this.state.id }} >EDIT</Link></button>
                <button className='button' onClick={() => {this.deleteNote(this.state.id)}} >DELETE</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { fetchNotes, deleteNote })(Notes)
