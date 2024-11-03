// src/components/Header.js
import React from 'react';
import './Header.css'; // Import associated CSS file

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                {/* You can use an image for a logo or emblem */}
                <img src="" alt="Logo" />
                <h1 className="site-title">George Small</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/certificates">Certificates</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
