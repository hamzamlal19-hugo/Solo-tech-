import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ExternalLink, Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
    return (
        <div className="pt-20 bg-black min-h-screen">
             <div className="bg-neutral-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Actualités & Tech</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Veille technologique, conseils d'experts et coulisses de nos événements.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {BLOG_POSTS.map((post) => (
                        <article key={post.id} className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-blue-600/30 transition-all hover:-translate-y-2 shadow-lg">
                            <div className="h-48 overflow-hidden relative">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center">
                                    <Calendar size={12} className="mr-1" /> {post.date}
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-blue-500 transition-colors">
                                    <a href={post.mediumLink}>{post.title}</a>
                                </h2>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {post.summary}
                                </p>
                                <div className="flex items-center justify-between border-t border-neutral-800 pt-4 mt-4">
                                    <div className="flex items-center text-gray-500 text-xs">
                                        <User size={12} className="mr-1" /> Par L'Équipe Solotech
                                    </div>
                                    <a 
                                        href={post.mediumLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-white text-sm font-medium flex items-center transition-colors"
                                    >
                                        Lire sur Medium <ExternalLink size={14} className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;