import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import LoginForm from './LoginForm'; 

describe ('LoginForm component', () =>{

test ('check if email password and submit button are present', () => {
    const {getByLabelText, getByRole} = render(<LoginForm />);
    expect(getByLabelText('/email/i')).toBeInTheDocument();
    expect(getByLabelText('/password/i')).toBeInTheDocument();
    expect(getByRole('button',{name: /login/i})).toBeInTheDocument();
});




});