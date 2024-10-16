import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

describe('NavBar component', () => {
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('see if the href links are present', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: 'Login' })).toHaveAttribute('href', '/login');
  });
});
