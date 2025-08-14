import React from 'react';
import Hero from "./sections/hero.jsx";
import Navbar from "./sections/navbar.jsx";
import About from './sections/About.jsx';
const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <About />
        </main>
    );
}
export default App;