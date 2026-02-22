import React from 'react';
import { Hero } from './components/Hero';
import { AnimatedBackground } from './components/AnimatedBackground';

function App() {
    return (
        <main className="min-h-screen bg-white text-neutral-900 selection:bg-emerald-500/30 font-sans antialiased overflow-x-hidden relative">
            <AnimatedBackground />

            <div className="relative z-10 flex flex-col min-h-screen justify-between">
                <div>
                    <Hero />
                </div>
            </div>
        </main>
    );
}

export default App;
