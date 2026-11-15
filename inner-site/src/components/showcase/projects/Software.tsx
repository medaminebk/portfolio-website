import React from 'react';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
import influenceursApp from '../../../assets/pictures/projects/software/influenceurs-app.png';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software & IA</h1>
            <h3>Projets Phares</h3>
            <br />
            <p>
                Voici une sélection de mes projets majeurs alliant développement Full-Stack,
                Intelligence Artificielle biomédicale, architectures DevOps et applications mobiles.
            </p>
            <br />
            <ResumeDownload />
            <br />

            {/* Projet 1: ScanThorax+ */}
            <div className="text-block">
                <h2>ScanThorax+ : Aide au Diagnostic de Radiographies Thoraciques par IA</h2>
                <br />
                <p>
                    <b>Technologies :</b> PyTorch, Hugging Face, Vision Transformers (ViT), Django REST Framework, React, PostgreSQL.
                </p>
                <br />
                <p>
                    ScanThorax+ est une plateforme médicale intelligente conçue pour assister les radiologues et cliniciens dans le dépistage rapide et fiable de la pneumonie et de pathologies pulmonaires à partir de clichés radiographiques.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Modèle Vision Transformer (ViT) :</b> Classification et détection des anomalies avec calcul d'un score de confiance précis pour chaque prédiction.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Confidentialité & Inférence locale :</b> Pipeline d'inférence sécurisé garantissant la non-fuite des données sensibles et contrôle strict de validité des clichés soumis.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Plateforme Web Full-Stack :</b> Backend robuste en Django REST Framework avec gestion sécurisée des dossiers patients, archivage historique des scans et interface React interactive.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Tableau de bord statistique :</b> Visualisation épidémiologique des scans, répartition des pathologies et recommandations adaptées pour la prise en charge clinique.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Projet 2: Détection d'anomalies IoT avec LSTM Autoencoder */}
            <div className="text-block">
                <h2>Détection d'Anomalies IoT avec LSTM Autoencoder</h2>
                <br />
                <p>
                    <b>Technologies :</b> Python, TensorFlow / Keras, LSTM Autoencoders, pandas, NumPy, Scikit-learn.
                </p>
                <br />
                <p>
                    Conception d'un modèle d'apprentissage profond non supervisé pour la détection en temps réel d'anomalies sur des séries temporelles issues de capteurs connectés (IoT).
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Architecture Autoencodeur LSTM :</b> Compression et reconstruction des séquences temporelles normales ; détection d'anomalies par calcul adaptatif de l'erreur quadratique de reconstruction.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Prétraitement de données :</b> Normalisation robuste, fenêtrage glissant (sliding windows) et optimisation des métriques d'évaluation.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Application Santé :</b> Méthodologie directement transposable à la surveillance continue de signaux biomédicaux (électrocardiogrammes ECG, constantes vitales).
                        </p>
                    </li>
                </ul>
            </div>

            {/* Projet 3: Pipeline Microservices CI/CD */}
            <div className="text-block">
                <h2>Pipeline Microservices CI/CD & Cloud GitOps</h2>
                <br />
                <p>
                    <b>Technologies :</b> Docker, Kubernetes, ArgoCD, Terraform, GitHub Actions, Linux.
                </p>
                <br />
                <p>
                    Mise en place d'une infrastructure cloud moderne et résiliente reposant sur les principes du GitOps et de l'Infrastructure as Code (IaC).
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Conteneurisation :</b> Création d'images Docker légères et optimisées pour différents microservices.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Infrastructure as Code :</b> Provisionnement et gestion déclarative des ressources à l'aide de scripts Terraform.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Déploiement Continu GitOps :</b> Orchestration sur cluster Kubernetes et synchronisation continue automatisée avec ArgoCD (build, validation, tests et rollouts sans interruption de service).
                        </p>
                    </li>
                </ul>
            </div>

            {/* Projet 4: Plateforme Mobile de Gestion de Micro-Influenceurs */}
            <div className="text-block">
                <h2>Plateforme Mobile de Micro-Influenceurs (PFA)</h2>
                <br />
                <p>
                    <b>Technologies :</b> React Native, Node.js, Express, MongoDB, Redux.
                </p>
                <br />
                <p>
                    Application mobile intuitive connectant des commerçants locaux à des micro-influenceurs ciblés pour des campagnes promotionnelles ciblées.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Application mobile React Native :</b> Navigation fluide, découverte des campagnes, soumission des candidatures et suivi des performances.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Backend Node.js & MongoDB :</b> Gestion fine des comptes utilisateurs, messagerie intégrée et traitement des flux de données.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Méthodologie Agile Scrum :</b> Gestion du cycle de vie du projet en équipe (sprints, stand-ups, backlog grooming).
                        </p>
                    </li>
                </ul>
                <br />
                <div className="captioned-image">
                    <img
                        src={influenceursApp}
                        style={styles.image}
                        alt="Interfaces de l'application mobile de micro-influenceurs"
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure :</b> Aperçu des interfaces de l'application (tableau de bord influenceur, profil, abonnement, fiche commerce et espace commerçant).
                        </sub>
                    </p>
                </div>
            </div>

            {/* Projet 5: Portfolio 3D & Retro OS */}
            <div className="text-block">
                <h2>Portfolio 3D & Système Rétro Interactif</h2>
                <br />
                <p>
                    <b>Technologies :</b> Three.js, React, TypeScript, Webpack, CSS 3D Transforms, Framer Motion.
                </p>
                <br />
                <p>
                    Une expérience interactive unique combinant une chambre 3D modélisée avec Three.js et un ordinateur de bureau vintage fonctionnel simulant un système d'exploitation rétro complet (BelkoubaaOS).
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure :</b> Vue 3D temps réel du poste de travail informatique rétro.
                        </sub>
                    </p>
                </div>
            </div>

            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    image: {
        width: '100%',
        padding: 12,
        boxSizing: 'border-box',
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
