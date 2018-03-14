import React from 'react';
import {connect} from 'react-redux';
import {toggleNote} from '../actions/notes'

const styles = {
    complete: {  
    backgroundColor: 'lightcoral',
  }
}

const Note = ({ 
  id, 
  name, 
  complete, 
  dispatch 
}) => (
  <li
    style={ complete ? styles.complete : {} }
    onClick={ () => dispatch(toggleNote(id)) }
  >
    {name}
  </li>
)

export default connect()(Note)

