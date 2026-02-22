import React from 'react';
import { Hero } from './components/Hero';

function App() {
    return (
        <main className="min-h-screen bg-white text-neutral-900 selection:bg-emerald-500/30 font-sans antialiased overflow-x-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute -top-40 -right-40 w-full max-w-[800px] h-[800px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute top-40 -left-20 w-full max-w-[800px] h-[800px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[800px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen justify-between">
                <div>
                    <Hero />
                </div>
            </div>
        </main>
    );
}

export default App;
