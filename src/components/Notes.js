import React, { Component } from 'react'
import '../styles/Notes.css'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions/notes'

class Notes extends Component {
    
    componentDidMount() {
        this.props.fetchNotes()
    }

    findNote = () => {

    }

    onNoteClick = () => {
        console.log('hi')
        // const noteCont = this.props.notes.notes.filter(({title}) => title ===)
    }

    iterateNoteTitles = () => {
        const notesIt = this.props.notes.notes.map(n => <h4 onClick={this.onNoteClick()}>{n.title}</h4>)
        return notesIt
    }

    render() {
        return (
            <div className='notes-container'>
                <div className='notes-note-title'>LIST</div>
                <div className='notes-note-content'>NOTE</div>
                <div className='notes-list'>
                    {this.iterateNoteTitles()}
                </div>
                <div className='notes-content'>
                    test
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
