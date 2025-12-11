export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string;
}

export interface Project {
    id: string;
    title: string;
    category: 'Concerts' | 'Conférences' | 'Mariages' | 'Corporate';
    image: string;
    date: string;
}

export interface BlogPost {
    id: string;
    title: string;
    summary: string;
    date: string;
    mediumLink: string;
    image: string;
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'model';
    text: string;
    timestamp: number;
}