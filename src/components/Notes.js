import React, { Component } from 'react'
import '../styles/Notes.css'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions/notes'

class Notes extends Component {
    
    componentDidMount() {
        this.props.fetchNotes()
    }

    render() {
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
