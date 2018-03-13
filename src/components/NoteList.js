import React from 'react';
import {connect} from 'react-redux';
import Note from './note';

const filtered =(notes, filter) => {
  switch(filter){
    case 'All':
      return notes;
    case 'Active Notes':
      return notes.filter(n => !n.complete)
    case 'Completed Notes':
      return notes.filter(n => n.complete)
  }
}


const NoteList =({notes}) => (
   
  <ul>
    {notes.map((n) =>{
      return(
        <Note  key= {n.id} {...n}/>
      )
    })
  }

  </ul>
  )
    const mapStateToProps =(state) => {
      return {notes: state.notes, filter: state.filter}
    }
export default connect(mapStateToProps)(NoteList);