export type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  links?: { label: string; url: string }[];
};

export type Experience = {
  period: string;
  title: string;
  company: string;
  bullets: string[];
  stack: string[];
};

export type Formation = {
  period: string;
  title: string;
  company: string;
};

export const PORTFOLIO = {
  profile: {
    name: 'Emelyne Ansart',
    role: 'Développeuse',
    location: 'France',
    email: 'e.ansart02@mail.com',
    linkedin: 'https://www.linkedin.com/in/emelyne-ansart/',
    github: 'https://github.com/emelyneast',
    cvUrl: '../assets/CV Emelyne Ansart.pdf',
    jeu: 'https://jeu-cv.netlify.app',
    pitch:
      "Je développe des interfaces web et des applications : j’aime transformer un besoin métier en fonctionnalités claires, robustes et maintenables.",
    skills: [
      'Angular',
      'TypeScript',
      'HTML',
      'SCSS/CSS',
      'REST API',
      'Git',
      'Java',
      'Node.js',
      'PHP',
      'Vue.js',
      'MySQL',
      'MariaDB',
      'MongoDB',
      'Docker',
      'COBOL',
      'Python',
      'Flutter',
      'Méthodes agile'
    ],
  },

  projects: [
    {
      title: 'Portfolio',
      subtitle: 'Résumé de mes expériences, formations et projets',
      description: 'Présentation synthétique de mon profil, de mes projets et de mon parcours.',
      stack: ['Angular'],
    },
    {
      title: 'Projet personnel GTA RP',
      subtitle: "Interface, scripts du jeu et gestion d’équipe",
      description: "Développement d’interfaces et gestion des scripts côté serveur, avec coordination d’équipe.",
      stack: ['Vue.js', 'Node.js', 'HTML', 'CSS', 'SQL'],
      links: [{ label: 'Site du projet', url: 'https://website.gta.ctgaming.fr' }],
    },
    {
      title: 'Projet personnel CV en jeu',
      subtitle: "Mon CV en jeu vidéo",
      description: "Petit jeu intéraction qui permet d'en apprendre un peu plus sur mes expérience, formation",
      stack: ['JS', 'HTML', 'CSS'],
      links: [{ label: 'Site du projet', url: 'https://jeu-cv.netlify.app' }],
    },
    {
      title: 'Projet au sein de NOVA',
      subtitle: 'Gestion des doublons',
      description:
        "Création d’un module permettant de comparer des fichiers selon des critères globaux ou spécifiques, puis de les fusionner.",
      stack: ['PHP', 'HTML', 'CSS', 'SQL', 'JavaScript'],
    },
    {
      title: 'Projet au sein de SSA',
      subtitle: 'Migration Angular 11 → 14',
      description:
        'Mise à jour des dépendances, correction des breaking changes, validation des parcours et corrections d’anomalies après migration.',
      stack: ['Angular', 'TypeScript'],
    },
    {
      title: 'Projet au sein de SSA',
      subtitle: 'Gestion des spécifications',
      description:
        "Création d’une application interne permettant d’analyser des spécifications et de détecter des problèmes (doublons de références, liens manquants, références non conformes).",
      stack: ['Python', 'Django'],
    },
    {
      title: 'Gestion des anomalies',
      subtitle: 'Suivi et correction en contexte RUN',
      description:
        "Correction d’anomalies et participation au RUN, avec analyse des logs d’échec et remontée sur Jira.",
      stack: ['Angular', 'Java', 'SQL'],
    },
  ] as Project[],

  experience: [
    {
      period: '2024 – 2025',
      title: 'Alternance Développeuse',
      company: 'Worldline NOVA',
      bullets: [
        'Développement et maintenance full-stack en PHP (framework interne), HTML, CSS et JavaScript.',
        "Création d’un module de gestion des doublons.",
      ],
      stack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'GitLab', 'SQL', 'Jira'],
    },
    {
      period: '2022 – 2024',
      title: 'Alternance Développeuse',
      company: 'Worldline SSA (Service de santé des armées)',
      bullets: [
        'Développement et maintenance full-stack en Angular et Java.',
        'Participation à la montée de version Angular 11 → 14 (dépendances, compatibilité, validation).',
        'Correction d’anomalies et amélioration continue.',
        "Participation à la phase RUN du projet",
      ],
      stack: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Java', 'GitLab', 'SQL', 'NoSQL', 'Jira'],
    },
    {
      period: '2022',
      title: 'Développeuse (stage de 5 semaines)',
      company: 'GameWork',
      bullets: [
        "Création d’un gestionnaire de fichiers pour stocker et partager tous types de documents (Node.js, Socket.io).",
      ],
      stack: ['Node.js', 'Socket.io', 'HTML', 'SCSS', 'React', 'GitHub'],
    },
    {
      period: '2021',
      title: 'Développeuse (stage de 5 semaines)',
      company: 'Worldline CCQA',
      bullets: [
        "Réalisation d’un outil pour l’équipe de recette : catégorisation des plateformes/services et ajout de nouvelles entrées (VBA).",
      ],
      stack: ['VBA'],
    },
  ] as Experience[],

  formation: [
    {
      period: '2025 – 2026',
      title: 'Grand système',
      company: 'AJC Formation',
    },
    {
      period: '2023 – 2025',
      title: 'Master EISI',
      company: 'EPSI, Arras',
    },
    {
      period: '2022 – 2023',
      title: 'Bachelor 3 DEVOPS',
      company: 'EPSI, Arras',
    },
    {
      period: '2020 – 2022',
      title: 'BTS SIO SLAM',
      company: 'Lycée Guy Mollet, Arras',
    },
    {
      period: '2019 – 2020',
      title: 'Bac STI2D SIN',
      company: 'Lycée Mireille Grenet, Compiègne',
    },
  ] as Formation[],
};
