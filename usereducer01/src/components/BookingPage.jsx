import React, {useActionState, useReducer} from 'react';
import BookingForm from './BookingForm';
  
   
// 1. Initial State
const initialState = {
  username: '',
  details: { email: '', bio: '' }
};

// 2. Reducer Function (handles multiple input changes)
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'SET_NESTED_FIELD':
      return {
        ...state,
        details: { ...state.details, [action.field]: action.value }
      };
    default:
      return state;
  }
}


// 3. Parent Component
function BookingPage() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state); // Full state object
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 4. Pass dispatch to children */}
      <BookingForm dispatch={dispatch} state={state} />
      <button type="submit">Submit</button>
    </form>
  );
}

    export default BookingPage;