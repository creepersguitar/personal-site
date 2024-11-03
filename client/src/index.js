// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Core app structure
import './index.css'; // Optional global styles

// The invocation of the main rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App /> {/* Summoning the App component */}
    </React.StrictMode>
);
