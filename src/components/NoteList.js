import React from 'react';
import {connect} from 'react-redux';
import Note from './note';

const filtered =(notes, currentFilter) => {
  switch(currentFilter){
    case 'All':
      return notes;
    case 'Active Notes':
      return notes.filter(n => !n.complete)
    case 'Completed Notes':
      return notes.filter(n => n.complete)
    default:
      return notes;
  }
}


const NoteList =({notes, currentFilter}) => (
   
  <ul className='listnotes'>
    {filtered (notes,currentFilter).map((n) =>{
      return(
        <Note  key= {n.id} {...n}/>
      )
    })
  }

  </ul>
  )
    const mapStateToProps =(state) => {
      return {
        notes: state.notes, 
        currentFilter: state.currentFilter
      }
    }
export default connect(mapStateToProps)(NoteList);