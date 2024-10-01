import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

describe('NavBar component', () => {
    test('renders navigation links', () => {
        const { getByText } = render(
            <BrowserRouter>
              <NavBar />
            </BrowserRouter>
          );

          expect(getByText('Home')).toBeInTheDocument();
          expect(getByText('About')).toBeInTheDocument();
          expect(getByText('Contact')).toBeInTheDocument();
          expect(getByText('Login')).toBeInTheDOcument();
    });

    test ('see if the href links are present', () => {
        const {getByText} = render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        expect(getByText('Home').closest('a')).toHaveAttribute('href', '/');
        expect(getByText('About').closest('a')).toHaveAttribute('href','/about');
        expect(getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
        expect(getByText('Login').closest('a')).toHaveAttribute('href','/login');
     });
});