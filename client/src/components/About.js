import React from 'react';

function About() {
    return (
        <section className="about">
            <h2>About Me</h2>
            <p>Experienced Software Developer skilled in Python, React, and more.</p>
            <div className="skills">
                <h3>Technical Skills:</h3>
                <ul>
                    <li>Python, React, HTML5, CSS</li>
                    <li>JavaScript, Typescript, Next.js</li>
                    <li>Node.js, Express, MongoDB</li>
                    <li>Machine Learning, AI, Unity</li>
                </ul>
            </div>
            <div className="days-coded">
                <h3>Days I Code</h3>
                <iframe src="https://github-contributions.vercel.app/api/v1/username" title="GitHub Contributions"></iframe>
            </div>
        </section>
    );
}

export default About;