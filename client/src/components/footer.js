import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} [George small]. All rights reserved.</p>
            <p>Dedicated to George and the pursuit of knowledge.</p>
            <div>
                <a href="https://github.com/creepersguitar" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/george-small-055151204/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.facebook.com/profile.php?id=100075322053308" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/georgesmall652/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
