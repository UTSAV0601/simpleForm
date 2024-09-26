import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import SideBar from './SideBar';

describe ('Sidebar Component', () => {
    const mockOnToggleMode = jest.fn();
    const mockOnClose = jest.fn();

    test('render Setting text test', () => {
        render(<SideBar isOpen = {false} isDarkMode = {false} onToggleMode = {mockOnToggleMode} onClose = {mockOnClose} />)
        expect(screen.getByText('Setting')).toBeInTheDocument();
    });

    test('Sidebar opens ', () => {
        render (<SideBar isOpen = {true} isDarkMode = {false} onToggleMode = {mockOnToggleMode} onClose = {mockOnClose} />)
        const sidebar = screen.getByText('Settings').closest('div');
        expect (sidebar).toHaveClass('Open');
    });

    test ('X button and click event', () => {
        render(<SideBar isOpen = {true} isDarkMode = {false} onToggleMode = {mockOnToggleMode} onClose = {mockOnClose} />)
        const closeButton = screen.getTextBy('X');
        fireEvent.click(closeButton);
        expect(mockOnClose).toHaveBeenCancelled();
    })

    test('Darkmode text check and show dark when true', () => {
        render (<SideBar isOpen = {true} isDarkMode = {true} onToggleMode = {mockOnToggleMode} onClose={mockOnClose} />)
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();

    })

    test('check toggle mode when checkbox is clicked', () => {
        render(<SideBar isOpen={true} isDarkMode={false} onToggleMode={mockOnToggleMode} onClose={mockOnClose} />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(mockOnToggleMode).toHaveBeenCalled();
      });
});