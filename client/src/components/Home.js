import React from 'react';

function Home() {
    return (
        <section className="home h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-purple-500 text-white px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Welcome to Abbas Syed's Portfolio</h1>
            <p className="text-lg sm:text-2xl text-center">Software Engineer specializing in full-stack development and AI projects.</p>
        </section>
    );
}

export default Home;