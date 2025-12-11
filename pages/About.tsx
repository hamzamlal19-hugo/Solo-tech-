import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="pt-20 bg-black min-h-screen">
             <div className="bg-neutral-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">À Propos de Solotech.ma</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Votre partenaire technique privilégié au Maroc depuis 2014.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                         <img 
                            src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                            alt="Equipe Solotech" 
                            className="rounded-xl shadow-2xl border border-neutral-800"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Notre Histoire</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Fondée avec la passion de l'ingénierie sonore et visuelle, Solotech.ma s'est imposée comme une référence incontournable de l'événementiel au Maroc.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Notre mission est simple : fournir des solutions techniques irréprochables qui permettent à nos clients de se concentrer sur l'essentiel : leur public. Que ce soit pour un festival international, une conférence d'entreprise ou un lancement de produit exclusif, nous apportons la même rigueur.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                                <h3 className="text-3xl font-bold text-blue-500 mb-1">500+</h3>
                                <p className="text-sm text-gray-400">Événements réalisés</p>
                            </div>
                            <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                                <h3 className="text-3xl font-bold text-blue-500 mb-1">100%</h3>
                                <p className="text-sm text-gray-400">Clients satisfaits</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-10">Pourquoi nous choisir ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
                            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Expertise Technique</h3>
                            <p className="text-gray-400">Nos ingénieurs sont certifiés sur les dernières consoles et technologies.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
                            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Matériel Premium</h3>
                            <p className="text-gray-400">Un parc matériel constamment renouvelé avec les marques leaders.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
                            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Disponibilité</h3>
                            <p className="text-gray-400">Une logistique flexible capable d'intervenir partout au Maroc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;