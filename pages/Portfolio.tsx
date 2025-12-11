import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
    const categories = ['Tout', 'Concerts', 'Conférences', 'Mariages', 'Corporate'];
    const [filter, setFilter] = useState('Tout');

    const filteredProjects = filter === 'Tout' 
        ? PROJECTS 
        : PROJECTS.filter(p => p.category === filter);

    return (
        <div className="pt-20 bg-black min-h-screen">
            <div className="bg-neutral-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Notre Portfolio</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Découvrez nos dernières réalisations. Chaque projet est une nouvelle opportunité de repousser les limites.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                filter === cat 
                                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                                : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700 hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-xl bg-neutral-900 shadow-lg cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</span>
                                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.title}</h3>
                                <p className="text-gray-300 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">{project.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center text-gray-500 py-20">
                        Aucun projet trouvé dans cette catégorie.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;