import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-900 border-t border-neutral-800 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">SOLOTECH<span className="text-blue-600">.MA</span></h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            L'excellence audiovisuelle au Maroc. Nous transformons vos événements en expériences inoubliables grâce à la technologie de pointe.
                        </p>
                        <div className="flex space-x-4">
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Navigation</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="hover:text-blue-500 transition-colors">Accueil</Link></li>
                            <li><Link to="/about" className="hover:text-blue-500 transition-colors">À Propos</Link></li>
                            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
                            <li><Link to="/portfolio" className="hover:text-blue-500 transition-colors">Réalisations</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Expertise</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Sonorisation</Link></li>
                            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Éclairage</Link></li>
                            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Écrans LED</Link></li>
                            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Location</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
                                <span>123 Bd d'Anfa, Casablanca, Maroc</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-blue-500 shrink-0" />
                                <span>+212 6 00 00 00 00</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-blue-500 shrink-0" />
                                <span>contact@solotech.ma</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Solotech.ma. Tous droits réservés.</p>
                    <p>Designed with passion.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;