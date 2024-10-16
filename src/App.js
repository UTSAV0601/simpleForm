import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import NavBar from './NavBar';
import SideBar from './SideBar';
import DataFetcher from './DataFetcher'; 
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleMainClick = () => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        }
    };

    const handleLogin = () => {
        setIsLoggedIn(true);  
    };

    return (
        <Router>
            <NavBar isLoggedIn={isLoggedIn} />  {/* NavBar rendered only once here */}
            <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                <header>
                    <button className="burger-icon" onClick={toggleSidebar}>
                        ☰
                    </button>
                </header>
                <SideBar 
                    isOpen={isSidebarOpen} 
                    onToggleMode={toggleMode} 
                    isDarkMode={isDarkMode} 
                    onClose={toggleSidebar}
                />

                <div className="main-content" onClick={handleMainClick}>
                    {/* Removed the second NavBar here */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                        {/* Conditionally render Fetch Data only if logged in */}
                        {isLoggedIn && <Route path="/fetch-data" element={<DataFetcher />} />}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
