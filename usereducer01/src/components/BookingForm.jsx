import React, {useActionState, useReducer} from 'react';


// 5. Child Component
function BookingForm({ dispatch, state }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={(e) => dispatch({ 
            type: 'SET_FIELD', 
            field: 'username', 
            value: e.target.value 
        })}
      />
       <input
        type="text"
        placeholder="Email 1"
        value={state.email1}
        onChange={(e) => dispatch({ 
            type: 'SET_FIELD', 
            field: 'email1', 
            value: e.target.value 
        })}
      />     
      <input
        type="text"
        placeholder="Email"
        value={state.details.email}
        onChange={(e) => dispatch({ 
            type: 'SET_NESTED_FIELD', 
            field: 'email', 
            value: e.target.value 
        })}
      />
       <input
        type="text"
        placeholder="Bio"
        value={state.details.bio}
        onChange={(e) => dispatch({ 
            type: 'SET_NESTED_FIELD', 
            field: 'bio', 
            value: e.target.value 
        })}
      />     
    </div>
  );
}

export default BookingForm;