import React from 'react';
import { SERVICES } from '../constants';
import { Speaker, Lightbulb, Projector, Calendar, Mic2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
    'Speaker': <Speaker size={32} />,
    'Lightbulb': <Lightbulb size={32} />,
    'Projector': <Projector size={32} />,
    'Calendar': <Calendar size={32} />,
    'Mic2': <Mic2 size={32} />,
};

const Services: React.FC = () => {
    return (
        <div className="pt-20 bg-black min-h-screen">
            {/* Header */}
            <div className="bg-neutral-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nos Services</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Une gamme complète de solutions techniques pour donner vie à vos idées, de la conception à la réalisation.
                    </p>
                </div>
            </div>

            {/* Service List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid gap-12">
                    {SERVICES.map((service, index) => (
                        <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                            <div className="w-full md:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-neutral-800 group">
                                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img src={service.image} alt={service.title} className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="text-blue-500 mb-4">{iconMap[service.icon]}</div>
                                <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    {service.description} Nous utilisons uniquement du matériel de marques reconnues pour garantir fiabilité et performance. Nos techniciens sont formés pour s'adapter à toutes les configurations de lieu.
                                </p>
                                <ul className="space-y-2 mb-8 text-gray-300">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Matériel professionnel certifié</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Installation et démontage inclus</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Assistance technique sur site</li>
                                </ul>
                                <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-500 rounded hover:bg-blue-600 hover:text-white transition-all">
                                    Demander un devis pour ce service <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;