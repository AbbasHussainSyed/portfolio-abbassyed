import React from 'react';
import GitHubCalendar from 'react-github-calendar';

function Projects() {
    // Static project data
    const projects = [
        {
            title: 'Algo Game',
            description: 'An educational game on recursion',
            link: 'https://github.com/comp-229/algogame'
        },
        {
            title: 'Car Data Analysis',
            description: 'Analysis of car prices using Python',
            link: 'https://github.com/AbbasHussainSyed/PythonProjects/tree/main/CAR%20DATA%20ANALYSIS'
        },
        {
            title: 'Cybersecurity Capstone',
            description: 'Secured a VM using Nmap',
            link: 'https://github.com/AbbasHussainSyed/Cybersecurity-Capstone-Project'
        },
        {
            title: 'E-commerce Website',
            description: 'An e-commerce platform built with MERN stack',
            link: 'https://final-abbassyed-finalproject-deploy.onrender.com/'
        },
        {
            title: 'LA Hacks 2024',
            description: 'Developed Air Jordan’s Shoe discussion platform using MERN',
            link: 'https://github.com/BustosAndrew/lahacks'
        },
        {
            title: 'Chef.AI',
            description: 'A recipe generator using Gemini and Reflex API',
            link: 'https://github.com/YourChefAIRepoLink'
        }
    ];

    return (
        <section className="projects py-10 sm:py-20 bg-white px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-10">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    ))}
                </div>

                {/* Days I Code Section */}
                <div className="days-coded mb-12">
                    <h1 className="project-heading text-3xl sm:text-4xl font-semibold mb-4">
                        Days I <strong className="purple">Code</strong>
                    </h1>
                    <div className="flex justify-center">
                        <GitHubCalendar
                            username="AbbasHussainSyed"
                            blockSize={15}
                            blockMargin={5}
                            color="#c084f5"
                            fontSize={16}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;