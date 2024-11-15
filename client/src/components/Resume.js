import React from 'react';
import resumePDF from '../assets/AbbasSyedSDEFV1.0.pdf';

function Resume() {
    return (
        <section className="resume py-10 sm:py-20 bg-gray-200 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6">My Resume</h2>
                <iframe className="w-full h-80 sm:h-96 mb-4" src={resumePDF} title="Resume"></iframe>
                <a href={resumePDF} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition" download>
                    Download Resume
                </a>
            </div>
        </section>
    );
}

export default Resume;