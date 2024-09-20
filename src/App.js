
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import NavBar from './NavBar';
import SideBar from './SideBar';
import './App.css';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

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

    return (
        <Router>
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
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<LoginForm />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;