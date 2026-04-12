import React, {useActionState, useReducer} from 'react';


// 5. Child Component
function ChildInput({ dispatch, state }) {
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
        placeholder="Email"
        value={state.details.email}
        onChange={(e) => dispatch({ 
            type: 'SET_NESTED_FIELD', 
            field: 'email', 
            value: e.target.value 
        })}
      />
    </div>
  );
}

export default ChildInput;