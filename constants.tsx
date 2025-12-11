import React from 'react';
import { Project, Service, BlogPost } from './types';
import { Speaker, Lightbulb, Projector, Calendar, Mic2, Music } from 'lucide-react';

export const SERVICES: Service[] = [
    {
        id: '1',
        title: 'Sonorisation Pro',
        description: 'Systèmes L-Acoustics & d&b audiotechnik pour une clarté sonore inégalée.',
        icon: 'Speaker',
        image: 'https://picsum.photos/800/600?random=1'
    },
    {
        id: '2',
        title: 'Éclairage Scénique',
        description: 'Design lumière, Robe & Clay Paky, effets dynamiques pour sublimer vos scènes.',
        icon: 'Lightbulb',
        image: 'https://picsum.photos/800/600?random=2'
    },
    {
        id: '3',
        title: 'Vidéo & Projection',
        description: 'Murs LED P2/P3, mapping vidéo et régie multicaméra 4K.',
        icon: 'Projector',
        image: 'https://picsum.photos/800/600?random=3'
    },
    {
        id: '4',
        title: 'Gestion d’Événements',
        description: 'Direction technique complète pour festivals, mariages et corporate.',
        icon: 'Calendar',
        image: 'https://picsum.photos/800/600?random=4'
    },
    {
        id: '5',
        title: 'Location Matériel',
        description: 'Location sèche ou avec technicien de matériel audiovisuel de pointe.',
        icon: 'Mic2',
        image: 'https://picsum.photos/800/600?random=5'
    }
];

export const PROJECTS: Project[] = [
    {
        id: 'p1',
        title: 'Festival Mawazine - Scène Salé',
        category: 'Concerts',
        image: 'https://picsum.photos/600/400?random=10',
        date: 'Juin 2024'
    },
    {
        id: 'p2',
        title: 'Conférence Tech Casablanca',
        category: 'Conférences',
        image: 'https://picsum.photos/600/400?random=11',
        date: 'Mai 2024'
    },
    {
        id: 'p3',
        title: 'Mariage Royal Marrakech',
        category: 'Mariages',
        image: 'https://picsum.photos/600/400?random=12',
        date: 'Avril 2024'
    },
    {
        id: 'p4',
        title: 'Lancement Produit Auto',
        category: 'Corporate',
        image: 'https://picsum.photos/600/400?random=13',
        date: 'Mars 2024'
    },
    {
        id: 'p5',
        title: 'Soirée Privée Villa',
        category: 'Mariages',
        image: 'https://picsum.photos/600/400?random=14',
        date: 'Février 2024'
    },
    {
        id: 'p6',
        title: 'Concert Jazz Rabat',
        category: 'Concerts',
        image: 'https://picsum.photos/600/400?random=15',
        date: 'Janvier 2024'
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 'b1',
        title: 'Les tendances éclairage 2025',
        summary: 'Découvrez comment le pixel mapping transforme les scènes de concert cette année.',
        date: '12 Oct 2024',
        mediumLink: '#',
        image: 'https://picsum.photos/800/400?random=20'
    },
    {
        id: 'b2',
        title: 'Pourquoi louer un mur LED ?',
        summary: 'Impact visuel et flexibilité : les avantages des écrans LED pour vos séminaires.',
        date: '05 Sept 2024',
        mediumLink: '#',
        image: 'https://picsum.photos/800/400?random=21'
    },
    {
        id: 'b3',
        title: 'Sonorisation de mariage : Guide complet',
        summary: 'Comment dimensionner le son pour une salle de 300 personnes.',
        date: '20 Août 2024',
        mediumLink: '#',
        image: 'https://picsum.photos/800/400?random=22'
    }
];

export const SOCIAL_LINKS = {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    whatsapp: 'https://wa.me/212600000000'
};