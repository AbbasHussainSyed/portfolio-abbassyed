import React from 'react';

function About() {
    return (
        <section className="about py-10 sm:py-20 bg-gray-100 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6">About Me</h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-10">
                    Experienced Software Developer skilled in Python, React, and more.
                </p>
                <div className="skills grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-medium mb-2">Technical Skills:</h3>
                        <ul className="list-disc list-inside text-left">
                            <li>Python, React, HTML5, CSS</li>
                            <li>JavaScript, Typescript, Next.js</li>
                            <li>Node.js, Express, MongoDB</li>
                            <li>Machine Learning, AI, Unity</li>
                        </ul>
                    </div>
                    <div className="days-coded mt-6 sm:mt-0">
                        <h3 className="text-xl sm:text-2xl font-medium mb-2">Days I Code</h3>
                        <iframe className="w-full h-40" src="https://github-contributions.vercel.app/api/v1/username" title="GitHub Contributions"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;