export const projects = [
    {
        id: "01",
        title: "Silo — Second Brain pour Développeurs",
        description:
            "Plateforme SaaS de gestion de connaissances avec création de vidéos programmatiques via Remotion. Vault centralisé pour liens, notes et médias avec tagging contextuel, export structuré ZIP et authentification sécurisée via Magic Links.",
        stack: ["Next.js", "TypeScript", "Supabase", "Prisma", "TanStack Query", "Framer Motion", "Zod", "Remotion"],
        github: "https://github.com/Kh-Abdou/Silo",
        live: "https://getsilo.me",
    },
    {
        id: "02",
        title: "Scope — Plateforme de Sourcing Intelligent",
        description:
            "Automatisation du sourcing de données via IA générative. Transforme des flux RSS bruts en base de connaissances filtrée par LLM, avec scoring de pertinence sur 10 et résumés automatiques. Recherche vectorielle pour l'analyse sémantique.",
        stack: ["Django", "HTMX", "Llama-3.1", "PostgreSQL", "pgvector", "Celery", "Redis"],
        github: "https://github.com/Kh-Abdou/Scope",
        live: "https://scope-nu7k.onrender.com",
    },
    {
        id: "03",
        title: "Distributeur automatique connecté",
        description:
            "Solution complète logicielle + matérielle : application mobile Flutter, communication avec ESP32 (libération de produit, capteurs, actionneurs), logique d'authentification et de paiement.",
        stack: ["Flutter", "Dart", "ESP32", "IoT", "C++"],
        github: null,
        live: null,
    },
    {
        id: "04",
        title: "Hackathon – Plateforme d'apprentissage des langues",
        description:
            "Prototype interactif développé lors du Hackathon Desvshroom : parcours d'apprentissage, exercices interactifs et suivi d'avancement en temps réel.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        badge: "⚡ Hackathon Desvshroom",
        github: null,
        live: null,
    },
    {
        id: "05",
        title: "Sécurisation des échanges — OpenSSL",
        description:
            "Implémentation de protocoles de sécurité avec AES-256-CBC et RSA : génération/gestion de clés, échange de clés publiques et scripts d'automatisation sous Linux. Tests d'intégrité sur réseaux locaux et VMs.",
        stack: ["OpenSSL", "AES-256", "RSA", "Linux", "Bash"],
        github: null,
        live: null,
    },
];
