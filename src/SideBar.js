
import React from 'react';

const SideBar = ({ isOpen, onToggleMode, isDarkMode, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose}>
                X
            </button>
            <h3>Settings</h3>
            <div className="mode-toggle">
                <label>
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={onToggleMode}
                    />
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </label>
            </div>
        </div>
    );
};

export default SideBar;
