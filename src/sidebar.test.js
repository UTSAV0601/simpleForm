import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SideBar from './SideBar';

describe('SideBar Component', () => {
  const mockOnToggleMode = jest.fn();
  const mockOnClose = jest.fn();

  test('renders "Settings" text', () => {
    render(<SideBar isOpen={false} isDarkMode={false} onToggleMode={mockOnToggleMode} onClose={mockOnClose} />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });


  test('"X" button click calls onClose', () => {
    render(<SideBar isOpen={true} isDarkMode={false} onToggleMode={mockOnToggleMode} onClose={mockOnClose} />);
    const closeButton = screen.getByText('X');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('Dark mode checkbox is checked when isDarkMode is true', () => {
    render(<SideBar isOpen={true} isDarkMode={true} onToggleMode={mockOnToggleMode} onClose={mockOnClose} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  test('Toggles mode when checkbox is clicked', () => {
    render(<SideBar isOpen={true} isDarkMode={false} onToggleMode={mockOnToggleMode} onClose={mockOnClose} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnToggleMode).toHaveBeenCalled();
  });
});
