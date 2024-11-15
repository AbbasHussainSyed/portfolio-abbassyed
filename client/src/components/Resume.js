import React from 'react';
import resumePDF from '../assets/AbbasSyedSDEFV1.0.pdf';

function Resume() {
    return (
        <section className="resume">
            <h2>My Resume</h2>
            <iframe src={resumePDF} title="Resume" width="100%" height="600px"></iframe>
            <a href={resumePDF} download>Download Resume</a>
        </section>
    );
}

export default Resume;