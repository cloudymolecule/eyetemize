import React, { Component } from 'react'
import '../styles/Notes.css'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions/notes'

class Notes extends Component {
    
    state = {
        content: ''
    }

    componentDidMount() {
        this.props.fetchNotes()
    }


    onNoteClick = (id) => {
        const noteCont = this.props.notes.notes.filter(note => id === note.id)
        this.setState({content: noteCont[0].content})
    }

    iterateNoteTitles = () => {
        const notesIt = this.props.notes.notes.map(n => <li className={'note-' + n.id} key={'note-' + n.id} onClick={() => {this.onNoteClick(n.id)}}>{n.title}</li>)
        return notesIt
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
                <button className='button'>EDIT</button>
                <button className='button'>DELETE</button>
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

export default connect(mapStateToProps, { fetchNotes })(Notes)
