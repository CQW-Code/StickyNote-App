const filter =(state = 'All', action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state;
  }
}

export default filter;

//see if this is the spot to filter color of notes
//Once i figure out how to make a square note and 
//color it!