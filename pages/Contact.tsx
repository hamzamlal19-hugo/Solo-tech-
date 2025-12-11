import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div className="pt-20 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info & Map */}
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-6">Contactez-nous</h1>
                        <p className="text-gray-400 mb-8 text-lg">
                            Prêt à concrétiser votre événement ? Discutons de votre projet autour d'un café ou via un appel.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start">
                                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                                    <Phone className="text-blue-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Téléphone</h3>
                                    <p className="text-gray-400">+212 6 00 00 00 00</p>
                                    <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 text-sm hover:underline">
                                        Discuter sur WhatsApp
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                                    <Mail className="text-blue-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Email</h3>
                                    <p className="text-gray-400">contact@solotech.ma</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                                    <MapPin className="text-blue-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Adresse</h3>
                                    <p className="text-gray-400">123 Boulevard d'Anfa, Casablanca, Maroc</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Iframe */}
                        <div className="w-full h-64 bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700">
                             <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.56000726757!2d-7.669394528143213!3d33.57316167814238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb118423d75d53ea!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1715456123456!5m2!1sen!2sus" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6">Envoyer un message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nom complet</label>
                                    <input type="text" id="name" required className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input type="email" id="email" required className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="votre@email.com" />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Sujet</label>
                                <select id="subject" className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all">
                                    <option>Demande de devis</option>
                                    <option>Renseignement technique</option>
                                    <option>Partenariat</option>
                                    <option>Autre</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea id="message" rows={5} required className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Décrivez votre projet..."></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={formStatus !== 'idle'}
                                className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center ${
                                    formStatus === 'success' ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                                }`}
                            >
                                {formStatus === 'submitting' ? (
                                    <span className="animate-pulse">Envoi en cours...</span>
                                ) : formStatus === 'success' ? (
                                    <><CheckCircle size={20} className="mr-2" /> Message Envoyé</>
                                ) : (
                                    <><Send size={20} className="mr-2" /> Envoyer</>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;