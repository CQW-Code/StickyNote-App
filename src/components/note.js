import React from 'react';
import {connect} from 'react-redux';
import {toggleNote} from '../actions/notes'

const Note =({id, name, complete,dispatch}) => (
  <li
    onClick={() => dispatch(toggleNote(id))}
    style={complete ? {textDecoration: 'line-through', color: 'red'}:{}}
    >
    {name}
    </li>
)

export default connect()(Note);