import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Activity } from 'lucide-react';
import { SERVICES, PROJECTS } from '../constants';

const Home: React.FC = () => {
    return (
        <div className="bg-black">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
                >
                    <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-blue-500/50 bg-blue-500/10 backdrop-blur-sm">
                        <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Innovation Audiovisuelle</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                        Solotech<span className="text-blue-600">.ma</span>
                        <br />
                        <span className="text-3xl md:text-5xl font-light text-gray-300 mt-2 block">L'art de la technologie événementielle</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
                        Transformez vos événements en expériences immersives. Sonorisation, éclairage, vidéo et scénographie partout au Maroc.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/contact" 
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
                        >
                            Demandez un devis
                        </Link>
                        <Link 
                            to="/portfolio" 
                            className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-200 bg-transparent hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-all"
                        >
                            Voir nos projets
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            {/* About Teaser */}
            <section className="py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Expertise & Innovation</h2>
                            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                                Depuis plus de 10 ans, Solotech.ma repousse les limites de la créativité technique. Nous ne nous contentons pas de louer du matériel, nous concevons des ambiances.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-300">
                                    <Star className="text-blue-500 mr-3" size={20} />
                                    Matériel de pointe (L-Acoustics, Robe, Yamaha)
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <Activity className="text-blue-500 mr-3" size={20} />
                                    Équipes techniques certifiées
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <Activity className="text-blue-500 mr-3" size={20} />
                                    Intervention 24/7 sur tout le Maroc
                                </li>
                            </ul>
                            <Link to="/about" className="text-blue-500 font-semibold hover:text-blue-400 inline-flex items-center">
                                En savoir plus sur nous <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                        <div className="mt-10 lg:mt-0 relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 opacity-20"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                                alt="Event Setup" 
                                className="relative rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos Solutions</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SERVICES.slice(0, 3).map((service) => (
                            <div key={service.id} className="group relative bg-neutral-900 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-neutral-800 hover:border-blue-600/50">
                                <div className="h-48 overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-400 mb-4">{service.description}</p>
                                    <Link to="/services" className="text-blue-500 text-sm font-semibold flex items-center group-hover:underline">
                                        Détails <ArrowRight size={14} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                         <Link to="/services" className="px-8 py-3 border border-gray-700 text-white rounded-full hover:bg-neutral-800 transition-colors">
                            Voir tous nos services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Recent Work Preview */}
            <section className="py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Réalisations Récentes</h2>
                            <p className="text-gray-400">Quelques uns de nos derniers événements.</p>
                        </div>
                        <Link to="/portfolio" className="hidden md:flex items-center text-blue-500 hover:text-blue-400">
                            Tout voir <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PROJECTS.slice(0, 3).map((project) => (
                             <div key={project.id} className="group relative aspect-video overflow-hidden rounded-lg cursor-pointer">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">{project.category}</span>
                                    <h3 className="text-white text-lg font-bold mt-1">{project.title}</h3>
                                    <p className="text-gray-400 text-sm">{project.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="mt-8 md:hidden text-center">
                        <Link to="/portfolio" className="text-blue-500 font-semibold">Tout voir &rarr;</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;