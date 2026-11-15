import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />

            {/* EXPÉRIENCES PROFESSIONNELLES */}
            <div style={styles.sectionTitle}>
                <h2>Expériences Professionnelles</h2>
            </div>

            {/* INCUBOOSTER */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>INCUBOOSTER</h1>
                        <h4>Fès, Maroc</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Stagiaire Développeur Full-Stack</h3>
                        <b>
                            <p>Mai 2025 – Juillet 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Conception et développement d'une plateforme web immobilière complète intégrant
                    une architecture API REST performante et une interface utilisateur réactive.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Développement de l'API REST robuste avec <b>Django REST Framework</b> et modélisation de la base de données sous <b>PostgreSQL</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            Création d'une interface utilisateur dynamique et intuitive en <b>React</b> : recherche multicritère des annonces, authentification et espace de gestion des biens.
                        </p>
                    </li>
                    <li>
                        <p>
                            Gestion rigoureuse des versions, flux de travail collaboratif et revues de code sous <b>Git / GitHub</b>.
                        </p>
                    </li>
                </ul>
            </div>

            {/* PALMARÈS ASCENSEURS */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>PALMARÈS ASCENSEURS</h1>
                        <h4>Tanger, Maroc</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Stagiaire Développeur</h3>
                        <b>
                            <p>Juin 2024 – Septembre 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Développement d'une application web de gestion des demandes d'intervention technique et de maintenance sur ascenseurs.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architecture backend avec <b>Django</b> (API REST) et stockage flexible sous <b>MongoDB</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            Front-end développé en <b>React</b> : enregistrement des demandes clients (pannes, maintenances) et suivi des statuts.
                        </p>
                    </li>
                    <li>
                        <p>
                            Affectation des demandes aux techniciens.
                        </p>
                    </li>
                    <li>
                        <p>
                            Historique des interventions par ascenseur et tableau de bord de suivi de l'activité.
                        </p>
                    </li>
                </ul>
            </div>

            {/* FORMATION */}
            <div style={styles.sectionTitle}>
                <h2>Formation Académique</h2>
            </div>

            {/* Master 2 Health-AI */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Université Bourgogne Europe</h1>
                        <h4>Dijon, France</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Master 2 en Santé et Intelligence Artificielle (Health-AI)</h3>
                        <b>
                            <p>2026 – 2027</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Spécialisation dans les modèles d'intelligence artificielle de pointe (Deep Learning, Vision Transformers, séries temporelles) appliqués à l'imagerie médicale, aux signaux physiologiques et aux données de santé.
                </p>
            </div>

            {/* Master 1 ESISA */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>École Supérieure d'Ingénierie en Sciences Appliquées</h1>
                        <h4>Fès, Maroc</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Master 1 en Ingénierie des Systèmes d'Information et Intelligence Artificielle</h3>
                        <b>
                            <p>2025 – 2026</p>
                        </b>
                    </div>
                </div>
            </div>

            {/* Licence ESISA */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>École Supérieure d'Ingénierie en Sciences Appliquées</h1>
                        <h4>Fès, Maroc</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Licence en Ingénierie Logicielle — Mention Bien</h3>
                        <b>
                            <p>2022 – 2025</p>
                        </b>
                    </div>
                </div>
            </div>

            {/* CERTIFICATIONS */}
            <div style={styles.sectionTitle}>
                <h2>Certifications</h2>
            </div>
            <div className="text-block">
                <ul>
                    <li style={styles.certRow}>
                        <p><b>IBM</b> — Python for Data Science, AI & Development</p>
                    </li>
                    <li style={styles.certRow}>
                        <p><b>IBM</b> — Machine Learning with Python</p>
                    </li>
                    <li style={styles.certRow}>
                        <p><b>IBM</b> — Building Generative AI-Powered Applications with Python</p>
                    </li>
                    <li style={styles.certRow}>
                        <p><b>Microsoft</b> — Azure Data Fundamentals (DP-900)</p>
                    </li>
                    <li style={styles.certRow}>
                        <p><b>Cisco Networking Academy</b> — Certificat Linux</p>
                    </li>
                </ul>
            </div>

            {/* COMPÉTENCES TECHNIQUES */}
            <div style={styles.sectionTitle}>
                <h2>Compétences Techniques</h2>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p><b>IA & Data :</b> PyTorch, TensorFlow / Keras, Hugging Face, Vision Transformers, LSTM, pandas, Claude API</p>
                    </li>
                    <li>
                        <p><b>Langages :</b> Python, Java, C, C++, C#, JavaScript, R, Shell</p>
                    </li>
                    <li>
                        <p><b>Développement Web & Mobile :</b> React, React Native, Django, Flask, Node.js, Spring Boot, .NET, HTML / CSS</p>
                    </li>
                    <li>
                        <p><b>Bases de données :</b> PostgreSQL, MySQL, SQL Server, Oracle, MongoDB (NoSQL)</p>
                    </li>
                    <li>
                        <p><b>DevOps & Cloud :</b> Docker, Kubernetes, ArgoCD, Terraform, Azure</p>
                    </li>
                    <li>
                        <p><b>Méthodes & Outils :</b> Scrum, Kanban, Git / GitHub, UML</p>
                    </li>
                    <li>
                        <p><b>Langues :</b> Arabe (maternelle), Français (bilingue), Anglais (intermédiaire), Espagnol (notions)</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
        marginTop: 16,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    sectionTitle: {
        marginTop: 32,
        marginBottom: 8,
        borderBottom: '2px solid black',
        paddingBottom: 4,
    },
    certRow: {
        marginBottom: 8,
    },
};

export default Experience;
