import React, { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.85] select-none z-0 flex items-center justify-center">
            {/* Subtle Gradient Fog */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[150px] opacity-40"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-100/50 rounded-full mix-blend-multiply filter blur-[150px] opacity-40"></div>

            <svg
                className="w-full max-w-[1400px] h-auto"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="-120 50 1450 1100"
            >
                <defs>
                    <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#e2e8f0" />
                    </pattern>
                    <linearGradient id="flowBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="flowEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="flowTeal" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="flowPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                        <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="nodeShadow" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.05" /></filter>
                    <filter id="neonBlue" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="neonEmerald" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotGrid)" />

                {/* --- PATHS: ORIGINS TO GATEWAYS --- */}
                <path d="M20,150 L250,150" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M20,150 L250,150" fill="none" stroke="url(#flowBlue)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash" />

                <path d="M20,350 L250,350" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M20,350 L250,350" fill="none" stroke="url(#flowTeal)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash animation-delay-1000" />

                <path d="M20,550 L250,550" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M20,550 L250,550" fill="none" stroke="url(#flowBlue)" strokeWidth="2" strokeDasharray="4 4" className="animate-dash opacity-40" />

                <path d="M20,750 L250,750" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M20,750 L250,750" fill="none" stroke="url(#flowEmerald)" strokeWidth="2" strokeDasharray="8 8" className="animate-dash animation-delay-4000" />

                <path d="M20,950 L250,950" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M20,950 L250,950" fill="none" stroke="url(#flowPurple)" strokeWidth="2" strokeDasharray="8 8" className="animate-dash animation-delay-2000" />

                {/* --- PATHS: GATEWAYS TO MICROSERVICES --- */}
                <path d="M250,150 L380,150 C430,150 430,190 450,190 C470,190 470,270 520,270 L650,270" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M250,350 L380,350 C430,350 430,480 450,480 C470,480 470,570 520,570 L650,570" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M250,350 L380,350 C430,350 430,480 450,480 C470,480 470,410 520,410 L650,410" fill="none" stroke="#f1f5f9" strokeWidth="2" opacity="0.4" />
                <path d="M250,550 L380,550 C430,550 430,410 470,410 L650,410" fill="none" stroke="#f1f5f9" strokeWidth="2" opacity="0.2" />
                <path d="M250,750 L380,750 C430,750 430,790 450,790 C470,790 470,870 520,870 L650,870" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M250,950 L380,950 C430,950 430,1000 450,1000 C470,1000 470,1070 520,1070 L650,1070" fill="none" stroke="#e2e8f0" strokeWidth="2" />

                {/* --- PATHS: MICROSERVICES TO DESTINATIONS --- */}
                <path d="M650,270 L780,270 C830,270 830,310 850,310 C870,310 870,370 920,370 L1050,370" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M650,410 L780,410 C830,410 830,200 850,200 L1050,200" fill="none" stroke="#f1f5f9" strokeWidth="2" opacity="0.5" />
                <path d="M650,570 L780,570 C830,570 830,490 850,490 L1050,490" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M650,570 L780,570 C830,570 830,620 850,620 C870,620 870,650 920,650 L1050,650" fill="none" stroke="#f1f5f9" strokeWidth="2" opacity="0.5" />
                <path d="M650,870 L780,870 C830,870 830,790 850,790 C870,790 870,810 920,810 L1050,810" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M650,1070 L780,1070 C830,1070 830,930 850,930 L1050,930" fill="none" stroke="#e2e8f0" strokeWidth="2" />

                {/* --- ANIMATIONS (GLOWING PARTICLES) --- */}
                <g filter="url(#neonBlue)">
                    <circle r="4" fill="#3b82f6"><animateMotion dur="6s" repeatCount="indefinite" path="M20,150 L250,150" /></circle>
                    <circle r="3" fill="#3b82f6"><animateMotion dur="10s" repeatCount="indefinite" begin="2s" path="M250,150 L380,150 C430,150 430,190 450,190 C470,190 470,270 520,270 L650,270" /></circle>
                    <circle r="3" fill="#3b82f6"><animateMotion dur="12s" repeatCount="indefinite" begin="4s" path="M650,270 L780,270 C830,270 830,310 850,310 C870,310 870,370 920,370 L1050,370" /></circle>
                </g>
                <g filter="url(#neonEmerald)">
                    <circle r="4" fill="#10b981"><animateMotion dur="8s" repeatCount="indefinite" path="M20,750 L250,750" /></circle>
                    <circle r="3.5" fill="#10b981"><animateMotion dur="9s" repeatCount="indefinite" begin="1s" path="M250,750 L380,750 C430,750 430,790 450,790 C470,790 470,870 520,870 L650,870" /></circle>
                    <circle r="3" fill="#10b981"><animateMotion dur="11s" repeatCount="indefinite" begin="3s" path="M650,870 L780,870 C830,870 830,790 850,790 C870,790 870,810 920,810 L1050,810" /></circle>
                </g>
                <g>
                    <circle r="3" fill="#14b8a6" opacity="0.6"><animateMotion dur="10s" repeatCount="indefinite" begin="0s" path="M20,350 L250,350" /></circle>
                    <circle r="2.5" fill="#14b8a6" opacity="0.5"><animateMotion dur="12s" repeatCount="indefinite" begin="2s" path="M250,350 L380,350 C430,350 430,480 450,480 C470,480 470,570 520,570 L650,570" /></circle>
                    <circle r="3" fill="#14b8a6" opacity="0.7"><animateMotion dur="14s" repeatCount="indefinite" begin="5s" path="M650,570 L780,570 C830,570 830,490 850,490 L1050,490" /></circle>
                </g>

                {/* --- NODES --- */}
                {/* Origins */}
                <g transform="translate(20, 150)"><rect x="-40" y="-15" width="80" height="30" rx="4" fill="#fff" stroke="#cbd5e1" /><text x="0" y="0" fontSize="10" fill="#475569" textAnchor="middle" dominantBaseline="central">Web Client</text></g>
                <g transform="translate(20, 350)"><rect x="-40" y="-15" width="80" height="30" rx="4" fill="#fff" stroke="#cbd5e1" /><text x="0" y="0" fontSize="10" fill="#475569" textAnchor="middle" dominantBaseline="central">Mobile App</text></g>
                <g transform="translate(20, 550)"><rect x="-40" y="-15" width="80" height="30" rx="4" fill="#fff" stroke="#cbd5e1" /><text x="0" y="0" fontSize="10" fill="#475569" textAnchor="middle" dominantBaseline="central">Public API</text></g>
                <g transform="translate(20, 750)"><rect x="-45" y="-15" width="90" height="30" rx="4" fill="#fff" stroke="#cbd5e1" /><text x="0" y="0" fontSize="10" fill="#475569" textAnchor="middle" dominantBaseline="central">Internal CRON</text></g>
                <g transform="translate(20, 950)"><rect x="-45" y="-15" width="90" height="30" rx="4" fill="#fff" stroke="#cbd5e1" /><text x="0" y="0" fontSize="10" fill="#475569" textAnchor="middle" dominantBaseline="central">Analytics Sync</text></g>

                {/* Gateways */}
                <g transform="translate(250, 150)"><circle r="8" fill="#3b82f6" /></g>
                <g transform="translate(250, 350)"><circle r="8" fill="#14b8a6" /></g>
                <g transform="translate(250, 550)"><circle r="8" fill="#94a3b8" /></g>
                <g transform="translate(250, 750)"><circle r="8" fill="#10b981" /></g>
                <g transform="translate(250, 950)"><circle r="8" fill="#a855f7" /></g>

                {/* Left Toggles */}
                <g transform="translate(450, 190)"><rect x="-24" y="-12" width="48" height="24" rx="12" fill="#dcfce7" stroke="#86efac" /><circle cx="12" cy="0" r="8" fill="#10b981" /><text x="0" y="-24" fontSize="9" fill="#0f172a" textAnchor="middle" dominantBaseline="central">enable-auth-v2</text></g>
                <g transform="translate(450, 480)"><rect x="-24" y="-12" width="48" height="24" rx="12" fill="#e0f2fe" stroke="#bae6fd" /><circle cx="12" cy="0" r="8" fill="#0ea5e9" /><text x="0" y="-24" fontSize="9" fill="#0f172a" textAnchor="middle" dominantBaseline="central">mobile-checkout</text></g>
                <g transform="translate(450, 790)"><rect x="-24" y="-12" width="48" height="24" rx="12" fill="#f3e8ff" stroke="#d8b4fe" /><circle cx="12" cy="0" r="8" fill="#a855f7" /><text x="0" y="-24" fontSize="9" fill="#0f172a" textAnchor="middle" dominantBaseline="central">ai-engine</text></g>
                <g transform="translate(450, 1000)"><rect x="-24" y="-12" width="48" height="24" rx="12" fill="#ffedd5" stroke="#fed7aa" /><circle cx="12" cy="0" r="8" fill="#f97316" /><text x="0" y="-24" fontSize="9" fill="#0f172a" textAnchor="middle" dominantBaseline="central">sync-realtime</text></g>

                {/* Microservices */}
                <g transform="translate(650, 270)"><rect x="0" y="-20" width="80" height="40" rx="6" fill="#fff" stroke="#10b981" /><text x="40" y="0" fontSize="10" fill="#334155" textAnchor="middle" dominantBaseline="central">Auth V2</text></g>
                <g transform="translate(650, 410)"><rect x="0" y="-20" width="100" height="40" rx="6" fill="#f8fafc" stroke="#94a3b8" /><text x="50" y="0" fontSize="10" fill="#94a3b8" textAnchor="middle" dominantBaseline="central">Monolith</text></g>
                <g transform="translate(650, 570)"><rect x="0" y="-20" width="100" height="40" rx="6" fill="#fff" stroke="#0ea5e9" /><text x="50" y="0" fontSize="10" fill="#334155" textAnchor="middle" dominantBaseline="central">Payments</text></g>
                <g transform="translate(650, 870)"><rect x="0" y="-20" width="100" height="40" rx="6" fill="#fff" stroke="#a855f7" /><text x="50" y="0" fontSize="10" fill="#334155" textAnchor="middle" dominantBaseline="central">AI Inference</text></g>
                <g transform="translate(650, 1070)"><rect x="0" y="-20" width="100" height="40" rx="6" fill="#fff" stroke="#f97316" /><text x="50" y="0" fontSize="10" fill="#334155" textAnchor="middle" dominantBaseline="central">Kafka</text></g>

                {/* Right Toggles */}
                <g transform="translate(850, 200)"><rect x="-24" y="-12" width="48" height="24" rx="12" fill="#f1f5f9" stroke="#e2e8f0" /><circle cx="-12" cy="0" r="8" fill="#94a3b8" /><text x="0" y="-24" fontSize="9" fill="#64748b" textAnchor="middle" dominantBaseline="central">cache-responses</text></g>
                <g transform="translate(850, 310)"><rect x="-24" y="-12" width="48" height="24" rx="12" fill="#dcfce7" stroke="#86efac" /><circle cx="12" cy="0" r="8" fill="#10b981" /><text x="0" y="-24" fontSize="9" fill="#0f172a" textAnchor="middle" dominantBaseline="central">storage-v3</text></g>
                <g transform="translate(850, 490)"><rect x="-24" y="-12" width="48" height="24" rx="12" fill="#dcfce7" stroke="#86efac" /><circle cx="12" cy="0" r="8" fill="#10b981" /><text x="0" y="-24" fontSize="9" fill="#0f172a" textAnchor="middle" dominantBaseline="central">enable-stripe</text></g>
                <g transform="translate(850, 620)"><rect x="-24" y="-12" width="48" height="24" rx="12" fill="#ffe4e6" stroke="#fda4af" /><circle cx="-12" cy="0" r="8" fill="#f43f5e" /><text x="0" y="-24" fontSize="9" fill="#0f172a" textAnchor="middle" dominantBaseline="central">paypal-fallback</text></g>
                <g transform="translate(850, 790)"><rect x="-24" y="-12" width="48" height="24" rx="12" fill="#e0f2fe" stroke="#bae6fd" /><circle cx="12" cy="0" r="8" fill="#0ea5e9" /><text x="0" y="-24" fontSize="9" fill="#0f172a" textAnchor="middle" dominantBaseline="central">stream-events</text></g>
                <g transform="translate(850, 930)"><rect x="-24" y="-12" width="48" height="24" rx="12" fill="#f3e8ff" stroke="#d8b4fe" /><circle cx="12" cy="0" r="8" fill="#a855f7" /><text x="0" y="-24" fontSize="9" fill="#0f172a" textAnchor="middle" dominantBaseline="central">lake-sync</text></g>

                {/* Destinations */}
                <g transform="translate(1050, 200)"><rect x="0" y="-25" width="120" height="50" rx="8" fill="#f8fafc" stroke="#cbd5e1" /><text x="60" y="0" fontSize="10" fill="#94a3b8" textAnchor="middle" dominantBaseline="central">Redis Cache</text></g>
                <g transform="translate(1050, 370)"><rect x="0" y="-25" width="120" height="50" rx="8" fill="#fff" stroke="#cbd5e1" /><text x="60" y="0" fontSize="10" fill="#475569" textAnchor="middle" dominantBaseline="central">ToggleStore DB</text></g>
                <g transform="translate(1050, 490)"><rect x="0" y="-25" width="120" height="50" rx="8" fill="#fff" stroke="#cbd5e1" /><text x="60" y="0" fontSize="10" fill="#475569" textAnchor="middle" dominantBaseline="central">Payment GW</text></g>
                <g transform="translate(1050, 650)"><rect x="0" y="-25" width="120" height="50" rx="8" fill="#f8fafc" stroke="#cbd5e1" /><text x="60" y="0" fontSize="10" fill="#94a3b8" textAnchor="middle" dominantBaseline="central">Legacy DB</text></g>
                <g transform="translate(1050, 810)"><rect x="0" y="-20" width="120" height="40" rx="6" fill="#fff" stroke="#cbd5e1" /><text x="60" y="0" fontSize="10" fill="#475569" textAnchor="middle" dominantBaseline="central">Event Stream</text></g>
                <g transform="translate(1050, 930)"><rect x="0" y="-20" width="120" height="40" rx="6" fill="#fff" stroke="#cbd5e1" /><text x="60" y="0" fontSize="10" fill="#475569" textAnchor="middle" dominantBaseline="central">Data Lake</text></g>

            </svg>

            {/* Translucent Overlay Layer for Readability */}
            <div className="absolute inset-0 bg-white/80 pointer-events-none"></div>
        </div>
    );
};
