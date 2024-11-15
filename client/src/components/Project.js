import React, { useEffect, useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;