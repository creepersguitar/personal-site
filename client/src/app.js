// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import PortfolioPage from './pages/portfolio';
import './styles/global.css'; // Global styles

const App = () => {
    return (
        <Router>
            {/* The Machine Spirit blesses this sacred Header component */}
            <Header />

            {/* Main content area where routes are managed */}
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    {/* Additional routes can be added as needed */}
                </Routes>
            </main>

            {/* Footer sanctifies the bottom of the page */}
            <Footer />
        </Router>
    );
};

export default App;
