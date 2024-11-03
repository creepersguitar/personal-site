import React from 'react';
import './About.css'; // Optional CSS for styling

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <img src="/path/to/your-image.jpg" alt="A portrait of the Tech Priest" className="profile-image" />
            <p>
                Greetings, fellow travelers of the Warp! I am [Your Name], a devoted Tech Priest and
                seeker of knowledge in the realms of code and technology. With expertise in [technologies],
                I strive to weave digital wonders that honor the Omnissiah.
            </p>
            <h2>Skills</h2>
            <ul>
                <li>React</li>
                <li>Python</li>
                <li>SQL</li>
                <li>C#</li>
                <li>...and many more!</li>
            </ul>
            <h2>Interests</h2>
            <p>
                When I am not harnessing the power of the Machine Spirit, you can find me exploring the
                depths of the Warhammer 40,000 universe, painting miniatures, and enjoying strategy games.
            </p>
            <h2>Contact Me</h2>
            <p>
                Feel free to reach out to me via the <a href="/contact">contact page</a>
            </p>
        </div>
    );
};

export default About;
