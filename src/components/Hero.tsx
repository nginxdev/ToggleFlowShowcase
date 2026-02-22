import React from 'react';
import { Github, ArrowRight, Play, Server, Zap, Globe, Lock } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-sm text-blue-700 mb-8 hover:bg-blue-100 transition-colors cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    ToggleFlow is in Active Development
                </div>

                <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 mb-6">
                    Feature Flags <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400">
                        Made Beautiful.
                    </span>
                </h1>

                <p className="mt-4 text-xl text-neutral-600 max-w-2xl mb-6 leading-relaxed">
                    ToggleFlow is the modern, blazingly fast feature flag management platform designed for scale. Deploy features with confidence and control your rollouts.
                </p>

                <div className="flex flex-col items-center justify-center p-4 mb-10 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <p className="text-emerald-800 font-medium flex items-center gap-2">
                        🌱 We are an Open Source project!
                    </p>
                    <p className="text-emerald-700/80 text-sm mt-1">
                        Join our community. We welcome contributions, feedback, and stars.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://github.com/nginxdev/ToggleFlow/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-all duration-300 hover:scale-105 shadow-sm">
                        <Github className="w-5 h-5" /> View on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};
