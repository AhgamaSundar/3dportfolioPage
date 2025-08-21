import React from 'react';
import Hero from "./sections/hero.jsx";
import Navbar from "./sections/navbar.jsx";
import About from './sections/About.jsx';
import Project from './sections/Project.jsx';
import Contact from './sections/Contact.jsx';
const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Project />
            <Contact />
            
        </main>
    );
}
export default App;