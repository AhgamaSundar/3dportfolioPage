import React from 'react';
import Hero from "./sections/hero.jsx";
import Navbar from "./sections/navbar.jsx";
const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
        </main>
    );
}
export default App;