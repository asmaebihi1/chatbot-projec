const responseObj = {
    hello: "Hey ! How are you doing ?",
    hi: "Hey! What's Up",
    bonjour: "bonjour ! Comment allez vous",
    salut: "salut! Quoi de neuf",
    السلام_عليكم: "عليكم السلام",
    hola:"hola, cómo estás ",
    
    how_are_you: "Good! and you",
    
    donnez_moi_les_cours_de_s1_mipc:"voilà les cours de s1 :Thermodynamique,Mécanique du point et Optique géométrique,Analyse1(Fonction d'une variable réelle,Algébre(polynome et espaces vectoriels),Algorithme et programmation1, tec1) ",
  donnez_moi_les_cours_de_s2_mipc:"voilà les cours de s2 :Circuit électrique et electronique,Eléctricité,Algébre2(Réduction des endomorphismes et formes quadratique,Analyse2(calcul intégral et équations différentielles,tec2",
  donnez_moi_les_cours_de_s3_mipc:"Mécanique des solides,Analyse3(Fonctions de plusieurs variables et calcul des intégrales multiples ,statistique descriptive/probabilités,ALgorithme et programmation2,Réactivité chimique ,tec3",
  donnez_moi_les_cours_de_s4_mipc:"Electromagnétiqme,Mécanique quantique et relativité,Analyse4(Série de fonctions et calcul des résidus,Structure de donnes en C ,chimie organique1,chimie minérale1",
  donnez_moi_les_cours_de_s1_BCG:"Biologie cellulaire,optique géométrique et instrumentale et radioactivité,Cosmologie et Géodynamique interne,Structure et etats de la matiére ,Algébre,Tec1",
  donnez_moi_les_cours_de_s2_BCG:"Biologie animale,thermodynamique,mécanique des fluides,Géodynamique externe,base de données ,tec2",
  donnez_moi_les_cours_de_s3_BCG:"Biologie végétale,electricité,stratigraphie,paléotologie et paléoécologie,chimie organique1,chimie minérale1,analyse",
  donnez_moi_les_cours_de_s4_BCG:"Biochimie structurale,Microbiologie génerale,biochimie métabolique,tectonique,statistique descriptive et probabilités ,tec3",
  donnez_moi_les_cours_de_s5_sir:"Programmation orienté objet,systéme d'exploitation,UML et méthodes agiles,SGBD/SGBDR,Réseaux informatique,base de données Répartis",
  donnez_moi_les_chapitres_de_Programmation_orienté_objet:"Les approches de la programmation, Les concepts de base de la programmation orientée objet, Le système de base Java, JAVA est orienté objet, Les exceptions",
  donnez_moi_les_cours_s6_sir:"IHM,programmation WEB,Architecture répartis,PFE",
  donnez_moi_les_cours_de_s5_PCM:"THERMODYNAMIQUE I & II, REACTIVITE EN CHIMIE ORGANIQUE & ORGANOMETALLIQUE, TECHNIQUES D’ANALYSE ET DE CARACTERISATION DES MATERIAUX, CHIMIE DE COORDINATION & TECHNIQUES D’ANALYSE ET DE CARACTERISATION II, CINETIQUE ET CATALYSE HETEROGENE ELEMENTS DE GENIE DES PROCEDES, GESTION DE LA PRODUCTION INDUSTRIELLE & COMMUNICATION DES ENTREPRISES",
  donnez_moi_les_cours_de_s6_PCM:"ELECTROCHIMIE : THERMODYNAMIQUE CINETIQUE ET APPLICATIONS INDUSTRIELLES, METALLURGIE ET PLASTURGIE, CERAMIQUE, MATERIAUX DE CONSTRUCTION ET VERRES",
  donnez_moi_les_chapitres_de_THERMODYNAMIQUE_I_et_II:"Thermodynamique des réactions non monothermes, Thermodynamique des solutions",
  donnez_moi_les_chapitres_de_REACTIVITE_EN_CHIMIE_ORGANIQUE_et_ORGANOMETALLIQUE:"Réactivité en chimie organique, Réactivité en chimie Organométallique",
  donnez_moi_les_chapitres_de_TECHNIQUES_ANALYSE_ET_DE_CARACTERISATION_DES_MATERIAUX:"héorie de la spectroscopie moléculaire, Spectroscopie moléculaire dans le visible et l’ultraviolet : principe, instrumentation et applications, Spectroscopie infrarouge : principe, instrumentation et applications, Spectrométrie de masse: principe, instrumentation et applications, Spectroscopie de résonance magnétique nucléaire : principe, instrumentation et applications, Spectroscopie de résonance paramagnétique de l’électron : principe, instrumentation et applications, Spectroscopie d’absorption atomique: principe, instrumentation et applications",
  donnez_moi_les_chapitres_de_CHIMIE_DE_COORDINATION_et_TECHNIQUES_ANALYSe_ET_DE_CARACTERISATION_II:"Chimie de coordination, Techniques d’analyse II, Caractérisation mécanique",
  donnez_moi_les_chapitres_de_CINETIQUE_ET_CATALYSE_HETEROGENE_ELEMENTS_DE_GENIE_DES_PROCEDES:"Cinétique et Catalyse hétérogène, Cinétique et Catalyse hétérogène, Eléments de génie des procédés",
  donnez_moi_les_chapitres_de_GESTION_DE_LA_PRODUCTION_INDUSTRIELLE_et_COMMUNICATION_DES_ENTREPRISES:"Communication des entreprises, Gestion de la production industrielle",
  donnez_moi_les_chapitres_de_ELECTROCHIMIE_THERMODYNAMIQUE_CINETIQUE_ET_APPLICATIONS_INDUSTRIELLES:"Thermodynamique électrochimiquhe, Diagramme potentiel-pH, phénomène de corrosion, Applications industrielles ",
  donnez_moi_les_chapitres_de_METALLURGIE_ET_PLASTURGIE:"Métaux et alliages métalliques, Les  matériaux polymères ",
  donnez_moi_les_chapitres_de_CERAMIQUE_MATERIAUX_DE_CONSTRUCTION_ET_VERRES:"Classification des matériaux céramiques : (céramique ionique, céramique covalente, les silicates, les alliages de céramiques,…), Technologie  de Ciment, Nature et structure des verres, Aperçu sur l’industrie du verre.",
  donnez_moi_les_chapitres_de_AUTOMATISME_SEQUENTIEL:"Technologies utilisées en automatisation (Pneumatique ; Hydraulique et électromécanique), (niveaux du Grafcet ; Eléments de base; Types d’actions ; Types de réceptivités ;  macro-étapes ; Notions de réservoir, d’accumulateur, compteur, mémorisation d’information,  ressources partagées), (Structure interne ; Fonctionnement ; Langages de programmation)",
  donnez_moi_les_chapitres_de_FONCTIONS_ELECTRONIQUES:"1- Théorie de la contre réaction, 2- Amplificateurs de puissance, 3- Etude de l’amplificateur opérationnel réel avec ses applications linéaires et non linéaires, 4- Synthèse des filtres actifs. 5- Générateurs de signaux (Oscillateurs sinusoïdaux, à relaxation, V.C.O...), 6- Transistors en commutation et familles  logiques (TTL, ECL, CMOS,..).",
  donnez_moi_les_chapitres_de_AUTOMATIQUE:"Notions et aspects généraux, Modélisation des systèmes, fonction de transfert et diagramme fonctionnel, analyse temporelle, analyse fréquentielle. qualité et performance des systèmes asservis, Stabilité des systèmes bouclés, Correction",
  donnez_moi_les_chapitres_de_INFORMATIQUE_INDUSTRIELLE:"Présentation générale des Microcontrôleurs, Présentation des microcontrôleurs PIC de microchip famille mid-range, Etude des PIC 16F84 et 16F877, Mémoire programme Mémoire donnée, Port d’entrées/sortie, Jeu d’instructions, Mode d’adressage direct Indirect, Environnement de développement intégré MPLAB, Simulateur ISIS Proteus, Périphériques : CAN, Timer, interface série..., Interruption, Programmation des PICs /Debuggage in Circuit",
  donnez_moi_les_chapitres_de_ELECTROTECHNIQUE:"Réseaux monophasé. Réseaux triphasés. Les circuits magnétiques. Bobine à noyau de fer. Transformateur monophasé : schéma équivalent, essais, bilan des puissances. Transformateur triphasé : schéma équivalent, essais, bilan des puissances.",
  donnez_moi_les_chapitres_de_TRAITEMENT_DE_SIGNAL_DETERMINISTE:"Classification des signaux et des systèmes, Transformée de Fourier des signaux analogiques (TFA) et ses propriétés, Filtres analogiques et analyseurs de spectres, Echantillonnage et quantification, Transformées de Fourier Discrète (TFD) et Rapide (FFT), et leurs propriétés, Analyse spectrale, Synthèse des Filtres numériques",
  donnez_moi_les_chapitres_de_ELECTRONIQUE_NUMERIQUE:"Chapitre 1 : Systèmes de numération, Chapitre 2 : Logique Booléenne, Chapitre 3 : Circuits combinatoires, Chapitre 4 : Circuits séquentiels, Chapitre 5 : Mémoires",
  donnez_moi_les_cours_de_s6_IEEA:"ELECTRONIQUE DE PUISSANCE, FONCTIONS ELECTRONIQUES, AUTOMATISME SEQUENTIEL, PROJET DE FIN D’ETUDES",
  donnez_moi_les_cours_de_s5_IEEA:"ELECTRONIQUE ANALOGIQUE, ELECTRONIQUE NUMERIQUE, TRAITEMENT DE SIGNAL DETERMINISTE, ELECTROTECHNIQUE, INFORMATIQUE INDUSTRIELLE, AUTOMATIQUE",
  donnez_moi_les_chapitres_de_Architectures_Réparties:"Introduction sur MVC, SpringBoot, Création d'une application avec SpringBoot(Back-end), Angular(Front-end) ",
  donnez_moi_les_chapitres_de_ELECTRONIQUE_DE_PUISSANCE:"Généralités, Rappel sur les signaux, Les composants d’électronique de puissance, Commutation dure et commutation douce., Caractérisation et association des sources, Application des composants de puissance, Convertisseurs statiques de puissance, Principe de fonctionnement, Initiation à la CEM",
  donnez_moi_les_chapitres_de_ELECTRONIQUE_ANALOGIQUE:"Chapitre 1 : Les circuits électriques en régimes transitoires, Chapitre 2 : Les Jonctions PN, Chapitre 3 : Etude des Alimentations stabilisées, Chapitre 4 : Amplificateurs à Transistor bipolaire, Chapitre 5 : Transistor à effet de champ, Chapitre 6 : Amplificateurs HF, Chapitre 7 : Amplificateur différentiel",
  donnez_moi_les_chapitres_de_IHM:"Point de vue « utilisateur », Système visuel et cognitif, Critères ergonomiques, Design des interfaces homme-machine, Conception orientée utilisateur, Introduction au Langage Java, Les événements, et finallement les Conteneurs",
  donnez_moi_les_chapitres_de_bases_de_données_réparties:"Introduction sur Bases de données réparties, Problèmes techniques, Classification des architectures de BD répartie, Architecture des schémas, Duplication repartie synchrone et asynchrone, Fragmentation repartie, Transactions réparties, Contrôle de concurrence réparti, Optimisation de requête répartie et Base de données parallèle",
  donnez_moi_les_chapitres_de_PROGRAMMATION_WEB:"Les langages Côté Client(HTML, CSS, JavaScript), Les langages Côté Serveur(PHP) et Bases de données MySQL",
  donnez_moi_les_chapitres_de_Réseaux_informatiques:"Topologie et architecture des réseaux, Le câblage, L’interconnexion des réseaux, Commutation Ethernet et hauts débits, Algorithmes et protocoles de routage dans les réseaux de données",
  donnez_moi_les_chapitres_de_SGBD:"Présentation générale, Le modèle relationnel et son algèbre, Le langage SQL, Requêtes simples SQL, Requêtes sur plusieurs tables, Requêtes imbriquées, Les fonctions, Les procédures, Les triggers et Les exceptions",
  donnez_moi_les_chapitres_de_système_exploitation:"Le système d’exploitation Linux/Windows Server, Organisation du système de fichiers, Les filtres, Gestion des utilisateurs, Autorisation d’accès aux fichiers, Gestion de processus,Programmation Shell",
  donnez_moi_les_chapitres_de_UML_et_METHODES_AGILES:"Un peu d'Histoires, Les méthodes objet et la genèse d'UML, Avantages et inconvénients d'UML, Modéliser avec UML, Qu'est ce qu’un modèle ?, Comment modéliser avec UML ?, Modéliser les vues statiques d'un système,Modéliser les vues dynamiques d'un système",
  donnez_moi_les_cours_s5_bio_analyse:"Technique d'analyse chimiques et biochimiques,téchnique de biologie moléculaire,bio statistique,génétique fondamentqle,physiologie animale",
  donnez_moi_les_cours_s6_bio_analyse_médicale:"bnactériologie mycologie virologie et agentsantimicrobiens,hematologie/parasitologie médicale,biochimie clinique et génétique médicale, PFE",
  donnez_moi_les_cours_s6_bio_analyse_environnement:" Toxicologie,technique d'analyse biologie de l'environement,chimie de l'environnement, PFE",
  donnez_moi_les_cours_s6_bio_analyse_médicale:"bnactériologie mycologie virologie et agentsantimicrobiens,hematologie/parasitologie médicale,biochimie clinique et génétique médicale, PFE",
  donnez_moi_les_cours_de_s5_miasi:"topologie,Algébre3,Programmation Oriéntée objet C++,intégration,base de donées ,statistique",
  donnez_moi_les_cours_de_s6_miasi:"Calcul différentiel,Outils de calcul Scientifique ,Géometrie des courbes et surfaces, pfe ",
  donnez_moi_les_chapitres_s5_miasi:"principe de base de language c++,tableaux et fonctions,surcharges des fonctions et chaines,classe et objet,Constructeur, Destructeur, et Agrégation,Fonctions amies et surcharge des opérateurs,les patrons,l'héritage,: Fonctions virtuelles et gestion des exceptions",
  donnez_moi_les_cours_s5_bio_analyse:"Technique d'analyse chimiques et biochimiques,téchnique de biologie moléculaire,bio statistique,génétique fondamentqle,physiologie animale",
  donnez_moi_les_cours_s6_bio_analyse_médicale:"bnactériologie mycologie virologie et agentsantimicrobiens,hematologie/parasitologie médicale,biochimie clinique et génétique médicale, PFE",
  donnez_moi_les_cours_s6_bio_analyse_environnement:" Toxicologie,technique d'analyse biologie de l'environement,chimie de l'environnement, PFE",
  donnez_moi_les_cours_s6_bio_analyse_médicale:"bnactériologie mycologie virologie et agentsantimicrobiens,hematologie/parasitologie médicale,biochimie clinique et génétique médicale, PFE",
   que_signifier_sir:"systéme informatique répartis",
   Give_me_the_chapters_of_INDUSTRIAL_PRODUCTION_MANAGEMENT_and_BUSINESS_COMMUNICATION: "Business Communication, Industrial Production Management",
Give_me_the_chapters_of_ELECTROCHEMISTRY_THERMODYNAMICS_KINETICS_AND_INDUSTRIAL_APPLICATIONS: "Electrochemical Thermodynamics, Potential-pH Diagram, Corrosion Phenomenon, Industrial Applications",
Give_me_the_chapters_of_METALLURGY_AND_PLASTURGY: "Metals and Metal Alloys, Polymer Materials",
Give_me_the_chapters_of_CERAMICS_CONSTRUCTION_MATERIALS_AND_GLASSES: "Classification of Ceramic Materials: (Ionic Ceramics, Covalent Ceramics, Silicates, Ceramic Alloys,...), Cement Technology, Nature and Structure of Glasses, Overview of the Glass Industry.",
Give_me_the_chapters_of_SEQUENTIAL_AUTOMATION: "Technologies used in automation (Pneumatics; Hydraulics and electromechanics), (Levels of Grafcet; Basic Elements; Types of Actions; Types of Receptivity; Macro-steps; Notions of Reservoir, Accumulator, Counter, Information Storage, Shared Resources), (Internal Structure; Operation; Programming Languages)",
Give_me_the_chapters_of_ELECTRONIC_FUNCTIONS: "1- Feedback Theory, 2- Power Amplifiers, 3- Study of the Real Operational Amplifier with its Linear and Non-linear Applications, 4- Synthesis of Active Filters. 5- Signal Generators (Sinusoidal, Relaxation, V.C.O...), 6- Switching Transistors and Logic Families (TTL, ECL, CMOS,..).",
Give_me_the_chapters_of_AUTOMATIC_CONTROL: "General Notions and Aspects, System Modeling, Transfer Function and Functional Diagram, Time Analysis, Frequency Analysis, Quality and Performance of Controlled Systems, Stability of Closed-loop Systems, Correction",
Give_me_the_chapters_of_INDUSTRIAL_COMPUTING: "General Presentation of Microcontrollers, Presentation of Microchip PIC Mid-range Family Microcontrollers, Study of PIC 16F84 and 16F877, Program Memory Data Memory, Input/output Port, Instruction Set, Direct and Indirect Addressing Modes, MPLAB Integrated Development Environment, ISIS Proteus Simulator, Peripherals: CAN, Timer, Serial Interface..., Interrupt, PIC Programming /In-circuit Debugging",
Give_me_the_chapters_of_ELECTRICAL_ENGINEERING: "Single-phase Networks, Three-phase Networks, Magnetic Circuits, Ferromagnetic Cores, Single-phase Transformer: Equivalent Circuit, Tests, Power Balance. Three-phase Transformer: Equivalent Circuit, Tests, Power Balance.",
Give_me_the_chapters_of_DETERMINISTIC_SIGNAL_PROCESSING: "Classification of Signals and Systems, Fourier Transform of Analog Signals (TFA) and Its Properties, Analog Filters and Spectrum Analyzers, Sampling and Quantization, Discrete Fourier Transform (DFT) and Fast Fourier Transform (FFT) and Their Properties, Spectral Analysis, Synthesis of Digital Filters",
Give_me_the_chapters_of_DIGITAL_ELECTRONICS: "Chapter 1: Number Systems, Chapter 2: Boolean Logic, Chapter 3: Combinational Circuits, Chapter 4: Sequential Circuits, Chapter 5: Memories",
   Give_me_the_chapters_of_COORDINATION_CHEMISTRY_and_ANALYSIS_TECHNIQUES_II: "Coordination Chemistry, Analysis Techniques II, Mechanical Characterization",
Give_me_the_chapters_of_KINETICS_AND_HETEROGENEOUS_CATALYSIS_and_PROCESS_ENGINEERING_ELEMENTS: "Kinetics and Heterogeneous Catalysis, Kinetics and Heterogeneous Catalysis, Process Engineering Elements",
   give_me_the_chapters_of_TECHNIQUES_OF_MATERIAL_ANALYSIS_AND_CHARACTERIZATION:"Theory of molecular spectroscopy, Molecular spectroscopy in the visible and ultraviolet: principle, instrumentation and applications, Infrared spectroscopy: principle, instrumentation and applications, Mass spectrometry: principle, instrumentation and applications, Nuclear magnetic resonance spectroscopy: principle, instrumentation and applications, Electron paramagnetic resonance spectroscopy: principle, instrumentation and applications, Atomic absorption spectroscopy: principle, instrumentation and applications",
   give_me_the_chapters_of_REACTIVITY_IN_ORGANIC_AND_ORGANOMETALLIC_CHEMISTRY:"Reactivity in Organic Chemistry, Reactivity in Organometallic Chemistry",
give_me_the_chapters_of_THERMODYNAMICS_I_AND_II:"Thermodynamics of non-monothermic reactions, Thermodynamics of solutions",
   give_me_the_chapters_of_Object_Oriented_Programming:"Programming Approaches, Basic Object-Oriented Programming Concepts, Java Basics, JAVA is Object-Oriented, Exceptions",
   give_me_the_courses_of_S6_PCM:"ELECTROCHEMISTRY: THERMODYNAMICS KINETICS AND INDUSTRIAL APPLICATIONS, METALLURGY AND PLASTICS, CERAMICS, BUILDING MATERIALS AND GLASSES",
   give_me_the_courses_of_S5_PCM:"THERMODYNAMICS I & II, REACTIVITY IN ORGANIC & ORGANOMETALLIC CHEMISTRY, TECHNIQUES OF MATERIAL ANALYSIS AND CHARACTERIZATION, COORDINATION CHEMISTRY & TECHNIQUES OF MATERIAL ANALYSIS AND CHARACTERIZATION II, HETEROGENEOUS CATALYSIS AND KINETICS ELEMENTS OF PROCESS ENGINEERING, INDUSTRIAL PRODUCTION MANAGEMENT & BUSINESS COMMUNICATION",
   give_me_the_courses_of_S6_SIR:"Human-Computer Interaction, Web Programming, Distributed Architecture, PFE",
   give_me_the_courses_of_S5_SIR:"Object-Oriented Programming, Operating System, UML and Agile Methods, Database Management Systems, Computer Networks, Distributed Databases",
   give_me_the_courses_of_S4_BCG:"Structural Biochemistry, General Microbiology, Metabolic Biochemistry, Tectonics, Descriptive Statistics and Probabilities, Tec3",
   give_me_the_courses_of_S3_BCG:"Plant Biology, Electricity, Stratigraphy, Paleontology and Paleoecology, Organic Chemistry 1, Mineral Chemistry 1, Analysis",
   give_me_the_courses_of_S2_BCG:"Animal Biology, Thermodynamics, Fluid Mechanics, External Geodynamics, Databases, Tec2",
   give_me_the_courses_of_S1_BCG:"Cellular Biology, Geometric and Instrumental Optics and Radioactivity, Cosmology and Internal Geodynamics, Structure and States of Matter, Algebra, Tec1",
   give_me_the_courses_of_S4_MIPC:"Electromagnetism, Quantum Mechanics and Relativity, Analysis4 (Series of functions and residue calculus, Data Structures in C, Organic Chemistry 1, Mineral Chemistry 1)",
   give_me_the_courses_of_S3_MIPC:"Solid Mechanics, Analysis3 (Functions of several variables and multiple integral calculus, descriptive statistics/probabilities, Algorithm and programming2, Chemical Reactivity, tec3)",
   give_me_the_courses_of_S2_MIPC:"Here are the S2 courses: Electrical and Electronic Circuits, Electricity, Algebra2 (Endomorphism reduction and quadratic forms, Analysis2 (integral calculus and differential equations), tec2)",
   quels_sont_les_licences_de_mipc:"sir,ieea,miasi,pcm",
   donnez_moi_des_informations_sur_sir:"L'objectif de La licence Systèmes Informatiques Répartis (SIR) est la formation de spécialistes dans la maintenancede systèmes d'information basés sur des architectures réparties complexes, capable de concevoir, de développer etd’administrer des bases de données, des applications Internet et Intranet sans oublier le développementd’applications réparties et nomade (téléphonie mobile, réseau informatique sans fil,…).Les lauréats seront capables de résoudre les problèmes posés par l'hétérogénéité des machines, des programmeset des données. De mettre en œuvre des applications correspondantes aux différents types de conceptions. A cette fin, les enseignements sont :- Fondamentaux, pour acquérir des connaissances, des concepts de base et des méthodes de travail,- Appliqués, pour faciliter l’apprentissage de ces concepts et déployer des savoir-faire professionnels- Evolutifs, pour intégrer les progrès technologiques et les exigences du monde professionnel.",
   give_me_the_courses_of_S1_MIPC:"Here are the S1 courses: Thermodynamics, Point Mechanics and Geometric Optics, Analysis1 (Function of a real variable, Algebra (polynomial and vector spaces), Algorithm and programming1, tec1)",
   Enseñame_s1_mipc: "aquí están los cursos de s1: Termodinámica, Mecánica de puntos y Óptica geométrica, Análisis 1 (Función de una variable real, Álgebra (espacios polinómicos y vectoriales), Algoritmo y programación ",
  Enseñame_s3_mipc: "Mecánica de sólidos, Análisis3 (Funciones de varias variables y cálculo de integrales múltiples, Estadística descriptiva/probabilidad, Algoritmo y programación2, Reactividad química, tec3",
  Enseñame_s4_mipc: "Electromagnetismo,Mecánica cuántica y relatividad,Análisis4(Serie de funciones y cálculo de residuos,Estructura de datos en C,química orgánica1,química mineral1",
  Enseñame_s1_BCG: "Biología celular, óptica geométrica e instrumental y radiactividad, Cosmología y Geodinámica interna, Estructura y estados de la materia, Álgebra, Tec1",
  Enseñame_s2_BCG: "Biología animal, termodinámica, mecánica de fluidos, geodinámica externa, base de datos, tec2",
  Enseñame_s3_BCG: "Biología vegetal, electricidad, estratigrafía, paleotología y paleoecología, química orgánica1, química mineral1, análisis",
  Enseñame_s4_BCG: "Bioquímica estructural, microbiología general, bioquímica metabólica, tectónica, estadística descriptiva y probabilidades, tec3",
  Enseñame_s5_sir: "Programación orientada a objetos, sistema operativo, UML y métodos ágiles, DBMS/DBMS, redes informáticas, base de datos distribuida",
  Enseñame_Object_Oriented_Programming: "Los enfoques de la programación, Los conceptos básicos de la programación orientada a objetos, El sistema Java básico, JAVA está orientado a objetos, Excepciones",
  Enseñame_s6_sir: "HMI, programación WEB, arquitectura distribuida, PFE",
  Enseñame_s5_pcm: "Termodinámica I y II, Reactividad en química orgánica y organometálica, técnicas para el análisis y caracterización de materiales, química de coordinación y técnicas para el análisis y caracterización II, cinética y heterogéneos Elementos de ingeniería de procesos, manejo de la producción industrial y la comunicación corporativa"  ,
  Enseñame_s6_PCM: "ELECTROQUÍMICA: TERMODINÁMICA CINÉTICA Y APLICACIONES INDUSTRIALES, METALURGIA Y PLASTURGIA, CERÁMICA, MATERIALES DE CONSTRUCCIÓN Y VIDRIO",
  Enseñame_THERMODYNAMIQUE_I_et_II: "Termodinámica de reacciones no monotérmicas, Termodinámica de soluciones",
  Enseñame_REACTIVITE_EN_CHIMIE_ORGANIQUE_et_ORGANOMETALLIQUE: "Reactividad en química orgánica, Reactividad en química organometálica",
  Enseñame_TECHNIQUES_ANALYSE_ET_DE_CARACTERISATION_DES_MATERIAUX: "teoría de la espectroscopia molecular, Espectroscopia molecular en el visible y ultravioleta: principio, instrumentación y aplicaciones, Espectroscopia infrarroja: principio, instrumentación y aplicaciones, Espectrometría de masas: principio, instrumentación y aplicaciones, Espectroscopia de resonancia magnética nuclear: principio, instrumentación y aplicaciones , Espectroscopia de resonancia paramagnética electrónica: principio, instrumentación y aplicaciones, Espectroscopia de absorción atómica: principio, instrumentación y aplicaciones",
  Enseñame_CHEMIE_DE_COORDINATION_et_TECHNIQUES_ANALYSe_ET_DE_CHARACTERISATION_II: "Coordinación Química, Técnicas de Análisis II, Caracterización Mecánica",
  Enseñame_KINETIQUE_ET_CATALYSE_HETEROGENE_ELEMENTS_DE_GENIE_DES_PROCEDES: "Cinética y Catálisis Heterogénea, Cinética y Catálisis Heterogénea, Elementos de ingeniería de procesos",
  Enseñame_MANAGEMENT_DE_LA_PRODUCTION_INDUSTRIELLE_et_COMMUNICATION_DES_ENTREPRISES: "Comunicación de empresas, Gestión de la producción industrial",
  Enseñame_ELECTROCHEMIE_THERMODYNAMIC_KINETIC_AND_INDUSTRIAL_APPLICATIONS: "Termodinámica electroquímica, diagrama potencial-pH, fenómeno de corrosión, aplicaciones industriales",
  Enseñame_METALLURGY_AND_PLASTURGY: "Metales y aleaciones metálicas, Materiales poliméricos",
  Enseñame_CERAMIQUE_MATERIAUX_DE_CONSTRUCTION_ET_VERRES: "Clasificación de materiales cerámicos: (cerámicas iónicas, cerámicas covalentes, silicatos, aleaciones cerámicas, etc.), Tecnología del cemento, Naturaleza y estructura de los vidrios, Visión general de la industria del vidrio.",
  Enseñame_AUTOMATISME_SEQUENTIEL: "Tecnologías utilizadas en automatización (Neumática; Hidráulica y electromecánica), (Grafcet niveles; Elementos básicos; Tipos de acciones; Tipos de receptividad; macro-pasos; Nociones de reservorio, acumulador, contador, memorización de información, recursos compartidos), (Estructura interna; Funcionamiento; Lenguajes de programación)",
  Enseñame_FUNCTION_ELECTRONICS: "1- Teoría de la retroalimentación negativa, 2- Amplificadores de potencia, 3- Estudio del amplificador operacional real con sus aplicaciones lineales y no lineales, 4- Síntesis de filtros activos. 5- Generadores de señal (Osciladores sinusoidales, relajación, V.C.O. ..), 6- Transistores de conmutación y familias lógicas (TTL, ECL, CMOS,..).",
  Enseñame_AUTOMATIQUE: "Nociones y aspectos generales, Modelado de sistemas, función de transferencia y diagrama funcional, análisis temporal, análisis de frecuencia, calidad y rendimiento de sistemas controlados, Estabilidad de sistemas en bucle, Corrección",
  Enseñame_INFORMATIQUE_INDUSTRIELLE: "Presentación general de microcontroladores, Presentación de microcontroladores PIC microchip de gama media, Estudio de PIC 16F84 y 16F877, Memoria de programa Memoria de datos, Puerto de entrada/salida, Conjunto de instrucciones, Modo de direccionamiento directo Indirecto, Entorno de desarrollo integrado MPLAB, ISIS Proteus simulador, Periféricos: CAN, Temporizador, interfaz serie..., Interrupción, Programación de PICs / Depuración en Circuito",
  Enseñame_ELECTROTECHNIQUE:"Redes monofásicas. Redes trifásicas. Circuitos magnéticos. Bobina de núcleo de hierro. Transformador monofásico: diagrama equivalente, pruebas, balance de potencia. Transformador trifásico: diagrama equivalente, pruebas, balance de potencia.",
  Enseñame_TRAITEMENT_DE_SIGNAL_DETERMINISTE: "Clasificación de señales y sistemas, Transformada de Fourier de señales analógicas (TFA) y sus propiedades, Filtros analógicos y analizadores de espectro, Muestreo y cuantificación, Transformadas de Fourier discretas (DFT) y Rápidas (FFT), y sus propiedades, Análisis espectral, Síntesis de Filtros Digitales",
  Enseñame_s6_IEEA: "ELECTRÓNICA DE POTENCIA, FUNCIONES ELECTRÓNICAS, AUTOMATIZACIÓN SECUENCIAL, TRABAJO FIN DE ESTUDIOS",
  Enseñame_s5_IEEA: "ELECTRÓNICA ANALÓGICA, ELECTRÓNICA DIGITAL, PROCESAMIENTO DETERMINISTA DE SEÑALES, ELECTROTÉCNICA, COMPUTADORA INDUSTRIAL, AUTOMÁTICA",
  Enseñame_Distributed_Architectures: "Introducción a MVC, SpringBoot, Creación de una aplicación con SpringBoot (Back-end), Angular (Front-end)",
  Enseñame_ELECTRONIQUE_DE_POISSANCE: "General, Recordatorio de señales, Componentes electrónicos de potencia, Conmutación dura y suave, Caracterización y asociación de fuentes, Aplicación de componentes de potencia, Convertidores estáticos de potencia, Principio de funcionamiento, Introducción a EMC ",
  Enseñame_ANALOG_ELECTRONICS: "Capítulo 1: Circuitos eléctricos en estados transitorios, Capítulo 2: Uniones PN, Capítulo 3: Estudio de fuentes de alimentación estabilizadas, Capítulo 4: Amplificadores de transistor bipolar, Capítulo 5: Transistor de efecto de campo, Capítulo 6: Amplificadores de HF, Capítulo 7: Amplificador diferencial",
  Enseñame_IHM: "Punto de vista del Usuario, Sistema visual y cognitivo, Criterios ergonómicos, Diseño de interfaces hombre-máquina, Diseño orientado al usuario, Introducción al lenguaje Java, Eventos y finalmente Contenedores",
  Enseñame_distributed_databases: "Introducción a las bases de datos distribuidas, problemas técnicos, clasificación de arquitecturas de bases de datos distribuidas, arquitectura de esquemas, duplicación distribuida síncrona y asíncrona, fragmentación distribuida, transacciones distribuidas, control de concurrencia distribuida, optimización de consultas distribuidas y bases de datos paralelas ",
  Enseñame_WEB_PROGRAMMING: "Lenguajes del lado del cliente (HTML, CSS, JavaScript), Idiomas del lado del servidor (PHP) y bases de datos MySQL",
  Enseñame_Computer_Networks: "Topología y arquitectura de redes, Cableado, Interconexión de redes, Ethernet y conmutación de banda ancha, Algoritmos y protocolos de enrutamiento en redes de datos",
  Enseñame_SGBD: "Presentación general, El modelo relacional y su álgebra, El lenguaje SQL, Consultas SQL simples, Consultas sobre varias tablas, Consultas anidadas, Funciones, Procedimientos, Triggers y Excepciones",
  Enseñame_operating_system: "El sistema operativo Linux/Windows Server, Organización del sistema de archivos, Filtros, Gestión de usuarios, Autorización de acceso a archivos, Gestión de procesos, Programación de Shell",
  Enseñame_UML_and_AGILE_METHODS: "Un poco de historia, Métodos de objetos y la génesis de UML, Ventajas y desventajas de UML, Modelado con UML, ¿Qué es un modelo?, ¿Cómo modelar con UML?, Modelado de vistas estáticas de un sistema, Modelado de vistas dinámicas de un sistema",
  Enseñame_s5_bio_analysis: "Técnicas de análisis químico y bioquímico, técnicas de biología molecular, bioestadística, genética fundamental, fisiología animal",
  Enseñame_s6_bio_medical_analysis: "bacteriología micología virología y agentes antimicrobianos, hematología/parasitología médica, bioquímica clínica y genética médica, PFE",
  Enseñame_s6_bio_analyse_environment: "Toxicología, técnica de análisis de biología ambiental, química ambiental, PFE",
  Enseñame_s6_bio_medical_analysis: "bacteriología micología virología y agentes antimicrobianos, hematología/parasitología médica, bioquímica clínica y genética médica, PFE",
  Enseñame_s5_miasi: "topología, Algebra3, programación orientada a objetos en C++, integración, base de datos, estadísticas",
  Enseñame_s6_miasi: "Cálculo diferencial, Herramientas de cálculo científico, Geometría de curvas y superficies, pfe",
  Enseñame_s5_miasi:"principio básico del lenguaje c++, matrices y funciones, sobrecarga de funciones y cadenas, clase y objeto, constructor, destructor y agregación, funciones amigables y sobrecarga de operadores, patrones, herencia: funciones virtuales y excepciones de administración",
  Enseñame_s5_bio_analysis: "Técnicas de análisis químico y bioquímico, técnicas de biología molecular, bioestadística, genética fundamental, fisiología animal",
  Enseñame_s6_bio_medical_analysis: "bacteriología micología virología y agentes antimicrobianos, hematología/parasitología médica, bioquímica clínica y genética médica, PFE",
  Enseñame_s6_bio_analyse_environment: "Toxicología, técnica de análisis de biología ambiental, química ambiental, PFE",
};
  
const fetchResponse = (userInput) => {
    return new Promise((res, reject) => {
        try{
            setTimeout(() => {
                let text = userInput;
                const myArray = text.split(" ");
                if(myArray.length==1){
                    if(responseObj[userInput] == undefined)
                    res("Please try something else");
                else{
                    res(responseObj[userInput]);
                }
                }else{
                    let msg="";
                    for(let i=0;i<myArray.length;i++)
                            msg+=myArray[i]+"_";
                    let user=msg.substring(0, msg.length-1);
                    if(responseObj[user] == undefined)
                        res("Please try something else");
                    else{
                        res(responseObj[user]);
                    }
                }
                
            }, 2000);
        }catch(error){
            reject(error);
        }
    });
};

const ChatbotService = {
    getChatbotResponse(userInput){
        return fetchResponse(userInput);
    },
};
export default ChatbotService;