import React, {useActionState, useReducer} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import BookingForm from './BookingForm';
 import 'bootstrap/dist/css/bootstrap.min.css'; 
   
// 1. Initial State
const initialState = {
  username: '',
  email1: '',
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
    <div className="container">
        <Form onSubmit={handleSubmit}>
        {/* 4. Pass dispatch to children */}
        <BookingForm dispatch={dispatch} state={state} />
        <Button type="submit" color="primary" className="w-100">Submit</Button>
        </Form>
    </div>
  );
}

    export default BookingPage;