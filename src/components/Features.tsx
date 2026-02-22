import React from 'react';
import { Server, Zap, Globe, Lock, Code2, Cpu } from 'lucide-react';

const featuresList = [
    {
        icon: <Zap className="w-6 h-6 text-emerald-400" />,
        title: 'Blazingly Fast',
        description: 'Lightning fast flag evaluation powered by edge networking with zero latency overhead.',
    },
    {
        icon: <Lock className="w-6 h-6 text-blue-400" />,
        title: 'Enterprise Ready',
        description: 'Built for scale with role-based access control, detailed audit logs, and SOC2 compliance.',
    },
    {
        icon: <Server className="w-6 h-6 text-teal-400" />,
        title: 'Self-Hosted Options',
        description: 'Maintain complete data sovereignty. Deploy ToggleFlow within your own infrastructure.',
    },
];

export const Features = () => {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl inline-block">
                        Everything you need for <br />
                        <span className="text-neutral-500 font-medium">Progressive Delivery</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuresList.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 rounded-3xl bg-white border border-neutral-200 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/5"
                        >
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-neutral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-neutral-50 border border-neutral-100 mb-6 group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
                                <p className="text-neutral-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
