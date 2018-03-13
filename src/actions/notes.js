const ADD_NOTE = 'ADD_NOTE'
const TOGGLE_NOTE = 'TOGGLE_NOTE'

export const addNote = (note) => {
  return { type: 'ADD_NOTE', note }
}

export const toggleNote = (id) => {
  return { type: 'TOGGLE_NOTE', id }
}