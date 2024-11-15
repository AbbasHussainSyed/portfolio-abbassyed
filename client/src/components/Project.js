import React, { useEffect, useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <section className="projects py-10 sm:py-20 bg-white px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-10">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;