import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


// 5. Child Component
function BookingForm({ dispatch, state }) {
  return (
    <div>
        <FormGroup>
            <Label for="username">Username</Label>
            <Input
                type="text"
                placeholder="Username"
                value={state.username}
                onChange={(e) => dispatch({ 
                    type: 'SET_FIELD', 
                    field: 'username', 
                    value: e.target.value 
                })}
            />
        </FormGroup>
        <FormGroup>
            <Label for="email1">Email 1</Label>
            <Input
                type="text"
                placeholder="Email 1"
                value={state.email1}
                onChange={(e) => dispatch({ 
                    type: 'SET_FIELD', 
                    field: 'email1', 
                    value: e.target.value 
                })}
            />
      </FormGroup>
      <FormGroup> 
        <Label for="email">Email</Label>   
        <Input
            type="text"
            placeholder="Email"
            value={state.details.email}
            onChange={(e) => dispatch({ 
                type: 'SET_NESTED_FIELD', 
                field: 'email', 
                value: e.target.value 
            })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="bio">Bio</Label> 
        <Input
            type="text"
            placeholder="Bio"
            value={state.details.bio}
            onChange={(e) => dispatch({ 
                type: 'SET_NESTED_FIELD', 
                field: 'bio', 
                value: e.target.value 
            })}
        />
      </FormGroup>     
    </div>
  );
}

export default BookingForm;