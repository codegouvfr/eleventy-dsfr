const path = require("path");
const chalk = require("chalk");

module.exports = {
    eleventyComputed: {
        image: data => {
            if (data.image.src) {
                if (!data.image.alt) {
                    console.warn(chalk.yellow(`[a11y] Missing alternative text for image source ${data.image.src}.`));
                }
                return {
                    path: path.resolve(`${data.page.inputPath}/..`, data.image.src),
                    alt: data.image.alt || data.title,
                }
            } else {
                return undefined;
            }
        }
    },
    initiatives: [
        {
            url: "/fr/bluehats/tags/gazette/",
            title: "La gazette : le libre par et pour l'administration",
            description: "La gazette BlueHats est une lettre d'information bimestrielle autour des logiciels libres par et pour les administrations publiques.",
            imagePath: "/icons/interface-64.png"
        },
        {
            url: "/fr/bluehats/tags/atelier/",
            title: "Les ateliers",
            description: "Les ateliers BlueHats sont des visioconférences publiques consacrées à l'utilisation de logiciels libres par des administrations.",
            imagePath: "/icons/conference-64.png"
        },
        {
            url: "/fr/bluehats/tags/rencontre/",
            title: "Les rencontres",
            description: "Les rencontres BlueHats sont des événements en présentiel où les BlueHats se retrouve pour faire connaissance et collaborer.  Ces rencontres peuvent prendre différentes formes : Sprint Open Source, journées BlueHats lors de salons, etc.",
            imagePath: "/icons/businessman-64.png"
        },
        {
            url: "/fr/bluehats/bluehats-semester-of-code/",
            title: "BlueHats Semester of Code",
            description: "En partenariat avec CentraleSupélec, la DINUM propose un programme de stages pour développer les contributions de l'administration à des logiciels libres.",
            imagePath: "/icons/coding-2-64.png"
        }
    ],
    accordionItems: [
        {
            title: "Vous souhaitez entrer en contact avec les BlueHats ?",
            content: `
<p>Utilisez l'un des <a href="https://man.sr.ht/~codegouvfr/logiciels-libres/espaces-communication-bluehats.md" target="_blank">canaux de communication</a>.</p>`
        },
        {
            title: "Vous souhaitez participer à la gazette BlueHats ?",
            content: `
<p>N'hésitez pas à <a href="https://code.gouv.fr/newsletters/subscribe/bluehats@mail.etalab.studio">vous inscrire</a> à la gazette BlueHats et à proposer des informations en nous <a href="mailto:contact@code.gouv.fr">envoyant un courriel</a>.</p>`
        },
        {
            title: "Vous souhaitez participer à un atelier BlueHats ?",
            content: `
<p>Tout le monde peut y accéder en ligne via <a href="https://webinaire.numerique.gouv.fr//meeting/signin/362/creator/369/hash/84c9902a44b481830388d5d69c808eb669da0a5b" target="_blank">ce lien</a>.  Ils sont aussi visibles en rediffusion sur <a href="https://tube.numerique.gouv.fr/a/logicielslibres/video-channels" target="_blank">la chaîne BlueHats d'Etalab</a>.</p>
<p>Vous souhaitez proposer un atelier BlueHats 🧢 ?  <a href="mailto:contact@code.gouv.fr">Contactez-nous !</a></p>`
        }
    ],
    tagDescriptions: {
      gazette: `La gazette BlueHats est la contribution de la DINUM au mouvement BlueHats. Cette lettre bimestrielle partage des informations sur l'utilisation et le développement de logiciels libres dans et pour l'administration. Elle sert aussi à donner une vue d'ensemble des activités du réseau de compagnonnage BlueHats. En la lisant, vous découvrirez des projets que vous pourrez tester ou suivre ; en y contribuant, vous partagerez vos initiatives et vos découvertes.`,
      atelier: `Les ateliers BlueHats sont des visioconférences ou des agents publics présentent des logiciels libres qu'ils utilisent ou développent. Ils se tiennent un ou deux vendredi par mois de 11h à 12h30.
<br /><br />
Tout le monde peut y accéder en ligne via ce lien. Ils sont aussi visibles en rediffusion sur la chaîne BlueHats d'Etalab.`,
      rencontre: `Les rencontres BlueHats sont des moments d'échange et de coopération en présentiel consacrés à toutes les personnes qui s'intéressent aux logiciels libres pour les administrations publiques.`
    },
    projects: [
        {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/jabref.md",
            title: "Jabref",
            description: `
Contribuez au développement d'un logiciel leader dans la gestion bibliographique, qui est utilisé par des chercheurs du monde entier dans différentes disciplines.`,
            imgSrc: "./bsoc2022/jabref.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/collec-science.md",
            title: "Collec-Science",
            description: `
Collec-Science, un logiciel OpenSource récent dédié à la gestion des échantillons, plébiscité par les labos de recherche de tous horizons.`,
            imgSrc: "./bsoc2022/collec-science.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/data-fair.md",
            title: "Data Fair",
            description: `
Participez à la construction de l'infrastructure de données de demain !`,
            imgSrc: "./bsoc2022/data-fair.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/environmental-sensing.md",
            title: "Environmental Sensing",
            description: `
Si vous souhaitez rendre les données environnementales compréhensibles, partageables et accessibles à tous, le projet Environmental Sensing est fait pour vous.`,
            imgSrc: "./bsoc2022/environmental-sensing.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/gimp.md",
            title: "GIMP",
            description: `
GIMP est utilisé massivement dans le monde par des millions de personnes, des graphistes, des entreprises, des administrations… Les sujets sont variés (science des couleurs et de l'image, interface homme-machine, typographie…) et souvent de niveau technique plutôt élevé.`,
            imgSrc: "./bsoc2022/gimp.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/joram.md",
            title: "Joram",
            description: `
Au sein d'une équipe hautement qualifiée et d'expérience, l'étudiant découvrira les particularités du monde du logiciel libre en intégrant un projet mature et innovant. Il apparaitra en tant que contributeur dans le team du projet d'un des grands consortiums de logiciel libre.`,
            imgSrc: "./bsoc2022/joram.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/label.md",
            title: "label",
            description: `
Améliorer et expérimenter la réutilisation d'un projet open source de la Cour de cassation.`,
            imgSrc: "./bsoc2022/label.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/libreoffice.md",
            title: "LibreOffice",
            description: `
LibreOffice est bien plus qu'un logiciel. C'est à propos de personnes, de culture, de création, de partage et de collaboration.`,
            imgSrc: "./bsoc2022/libreoffice.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/ota.md",
            title: "Open Terms Archive",
            description: `
On détecte chaque modification des conditions d'utilisation des services numériques et on vérifie qu'elles ne sont pas abusives. Rejoins notre équipe pour collecter, améliorer et exploiter des données qui redonnent du pouvoir aux utilisateurs et aux États face aux grandes plateformes ! #NodeJS #JavaScript #Communs.`,
            imgSrc: "./bsoc2022/ota.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/opentestfactory.md",
            title: "OpenTestFactory",
            description: `
La recherche de la qualité, la volonté d'être plus réactifs… obligent les éditeurs à automatiser toujours plus les tests, ce qui conduit à une offre pléthorique d'outils. OpenTestFactory cherche à simplifier l'intégration de ceux-ci, notamment dans les pipelines de CI/CD, en standardisant leur lancement et l'exploitation de leurs résultats.`,
            imgSrc: "./bsoc2022/opentestfactory.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/squashtm.md",
            title: "Squash TM",
            description: `
Participez activement à la conception de la solution open source leader des logiciels de test management en France dans un environnement Agile.`,
            imgSrc: "./bsoc2022/squashtm.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/parsec.md",
            title: "Parsec",
            description: `
Rejoindre une petite équipe (7-8 personnes) et participer au developpement de PARSEC.`,
            imgSrc: "./bsoc2022/parsec.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/publicodes.md",
            title: "Publi.codes",
            description: `
publi.codes est le nouveau langage pour des calculs ouverts. Développé par plusieurs équipes de beta.gouv.fr, il fait tourner des simulateurs utilisés quotidiennement par des milliers de personnes.`,
            imgSrc: "./bsoc2022/publicodes.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/semapps.md",
            title: "SemApps",
            description: `
SemApps (Semantic Applications): des outils pour des applications en <em>linked data</em>.`,
            imgSrc: "./bsoc2022/semapps.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/tutor.md",
            title: "Tutor",
            description: `
Contribuez de manière significative à la manière dont le monde entier apprend et se forme avec Tutor.`,
            imgSrc: "./bsoc2022/tutor.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/udata.md",
            title: "udata",
            description: `
Vous souhaitez contribuer à un logiciel ouvert qui propulsent plusieurs plateformes de données ouvertes dans le monde ? Venez rejoindre l'équipe de data.gouv.fr pour faciliter l'adoption et la contribution à udata dans une démarche de commun numérique.`,
            imgSrc: "./bsoc2022/udata.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/ds.md",
            title: "Démarches simplifiées",
            description: `
Vous voulez participer à l’amélioration du service public ? Vous souhaitez contribuer à un logiciel libre dans une équipe agile, et proche de ses utilisateurs ? demarches-simplifiees.fr vous propose d'accueillir vos contributions !`,
            imgSrc: "./bsoc2022/ds.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/koha.md",
            title: "Koha",
            description: `
Comme bien d’autres avant vous, venez vivre une expérience d’intégration dans une communauté libre internationale travaillant sur un logiciel métier utilisé par plus de 20 000 établissements dans le monde.`,
            imgSrc: "./bsoc2022/koha.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/wallabag.md",
            title: "Wallabag",
            description: `
Wallabag est une application libre de lecture différée. Elle permet la gestion et la lecture d'articles en dehors des sites originels, dans une mise en page homogénéisée avec un contenu épuré. Les articles peuvent être rangés par tags, classés par favoris, marqués comme archivés et également suivis par le moyen de flux RSS. L'export pour livre numérique est également possible. Il y a compatibilité avec les services existants Pocket, Readability, Instapaper.`,
            imgSrc: "./bsoc2022/wallabag.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/xwiki.md",
            title: "XWiki",
            description: `
XWiki est un moteur de wiki Open Source (LGPLv2) adapté à un usage pour des groupes de travail (associations, entreprises, etc.). Le logiciel permet la création rapide de petites applications pour répondre à différents besoins de gestion de l'information.`,
            imgSrc: "./bsoc2022/xwiki.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/vlc.md",
            title: "VideoLAN",
            description: `
VideoLAN est un lecteur multimédia gratuit et libre et un système capable de lire la plupart des fichiers multimédias ainsi que des DVD, des CD Audio, des VCD, et divers protocoles de diffusion.`,
            imgSrc: "./bsoc2022/vlc.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/onyxia.md",
            title: "Onyxia",
            description: `
Onyxia est un projet né de la volonté de rendre accessible, démocratiser et démystifier les toutes dernières technologies et paradigmes de datascience. Le projet est en croissance forte avec régulièrement de nouveaux partenariats et une utilisation au sein de différents ministères.`,
            imgSrc: "./bsoc2022/onyxia.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/askomics.md",
            title: "AskOmics",
            description: `
Participez à la FAIRisation des données scientifiques et à l'Open Science !`,
            imgSrc: "./bsoc2022/askomics.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/unitex-gramlab.md",
            title: "Unitex/Gramlab",
            description: `
Contribuez à un logiciel de recherche open source, développé en collaboration, conçu par des linguistes et utilisé sur quatre continents par des linguistes et des spécialistes du traitement automatique des langues.`,
            imgSrc: "./bsoc2022/unitex-gramlab.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/digirisk.md",
            title: "Digirisk",
            description: `
Digirisk est un logiciel Open Source permettant de réaliser la gestion du Système de Management de la Sécurité (SMS) de chaque entreprise ou collectivité. DigiRisk est basé sur le ERP & CRM Dolibarr propulsé par une communauté de plus de 450 développeurs.`,
            imgSrc: "./bsoc2022/digirisk.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/e-combox.md",
            title: "e-comBox",
            description: `
Un projet utile, techniquement riche et ambitieux, avec un encadrement professionnel au sein une équipe conviviale.`,
            imgSrc: "./bsoc2022/e-combox.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/operator-fabric.md",
            title: "Operator Fabric",
            description: `
Rejoingez un projet RTE et Linux Foundation : OperatorFabric est une plateforme modulaire, extensible et industrielle destinée à être utilisée dans le domaine de l’électricité, de l’eau et d’autres services publics.`,
            imgSrc: "./bsoc2022/operator-fabric.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/sysma.md",
            title: "Sysma",
            description: `
Rejoignez-nous et développez la version mobile offline de notre WebSIG open source Sysma dans le contexte de la protection de l'environnement : la surveillance et l'amélioration de la qualité de nos eaux.`,
            imgSrc: "./bsoc2022/sysma.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/powsybl.md",
            title: "PowSyBl",
            description: `
PowSyBl (Power System Blocks) est un cadre open source écrit en Java, dédié à la modélisation et à la simulation de réseaux électriques, sous licence Mozilla Public License version 2.0. Il fait partie de LF Energy, une fondation open source axée sur le secteur des systèmes électriques, hébergée par la Fondation Linux.`,
            imgSrc: "./bsoc2022/powsybl.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/jitsi-meet.md",
            title: "Jitsi Meet",
            description: `
Contribuer à l’amélioration du son dans Jitsi, la solution de visioconférence open source.`,
            imgSrc: "./bsoc2022/jitsi-meet.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/asqatasun.md",
            title: "Asqatasun",
            description: `
Mesurer l’accessibilité de (millions de) sites publics français`,
            imgSrc: "./bsoc2022/asqatasun.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/cryptpad.md",
            title: "Cryptpad",
            description: `
CryptPad est une suite de logiciels collaboratifs (texte, tableur, kanban, markdown, etc) chiffrée de bout en bout et open source.`,
            imgSrc: "./bsoc2022/cryptpad.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/datafari.md",
            title: "Datafari",
            description: `
Datafari est une moteur de recherche pour entreprise open source. C'est le produit idéal pour tous ceux qui ont besoin de rechercher et d'analyser leurs données et documents d'entreprise, tant au niveau du contenu que des métadonnées.`,
            imgSrc: "./bsoc2022/datafari.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/qgeoservices.md",
            title: "QGéoservices",
            description: `
Contribuez à faciliter l’emploi et la consommation des APIs géographiques de la future Géoplateforme  dans le logiciel SIG (édition de données géographiques, dataviz cartographique, analyse spatiale, etc.) leader de l’open source.`,
            imgSrc: "./bsoc2022/qgeoservices.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/openfoodfacts.md",
            title: "Open Food Facts",
            description: `
Open Food Facts est une base de données sur les produits alimentaires faite par tout le monde, pour tout le monde. Elle vous permet de faire des choix plus informés, et comme les données sont ouvertes (open data), tout le monde peut les utiliser pour tout usage.`,
            imgSrc: "./bsoc2022/openfoodfacts.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/osmose-qa.md",
            title: "Osmose-QA",
            description: `
Osmose-QA est un outil vérifiant la qualité des données OpenStreetMap en détectant un large éventail de types de problèmes. C’est une brique importante de l’écosystème OpenStreetMap utilisée par des particuliers comme des professionnels.`,
            imgSrc: "./bsoc2022/osmose-qa.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/ade4.md",
            title: "ade4",
            description: `
ade4 (Ecological Data Analysis: Exploratory and Euclidean Methods in Environmental Sciences) est un logiciel libre développé au sein du laboratoire de Biométrie et Biologie Evolutive à l'Université Lyon 1.`,
            imgSrc: "./bsoc2022/ade4.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/urungi.md",
            title: "Urungi",
            description: `
Urungi est destiné à être utilisé par des personnes ne sachant pas — ou ne pouvant pas — faire de requêtes SQL, mais ayant besoin de réaliser des tableaux et des rapports. Urungi est publié sous licence GNU/GPL.`,
            imgSrc: "./bsoc2022/urungi.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/bokeh.md",
            title: "Bokeh",
            description: `
Contribuez au portail documentaire libre Bokeh !`,
            imgSrc: "./bsoc2022/bokeh.png"
        }, {
            url: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/esup-pod.md",
            title: "Esup-Pod",
            description: `
Contribuez à Esup-Pod : plateforme opensource de gestion de vidéo pour l'éducation nationale, l'enseignement supérieur et la recherche.`,
            imgSrc: "./bsoc2022/esup-pod.png"
        }],
    people: [
        {
            projectUrl: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/sysma.md",
            projectName: "Sysma",
            name: "Antoine Simon",
            description: `
Après deux années à CentraleSupélec, j’ai choisi d’effectuer une année de césure pour vivre une première expérience professionnelle. Ayant beaucoup apprécié mes cours d’informatique en école et étant particulièrement motivé par l’idée de contribuer au bien commun dans mon activité professionnelle, j’ai rejoint la première promotion du BlueHats Semester of Code.
<br><br>
Dans le cadre du programme, je contribue au logiciel libre Sysma développé par l’Établissement Public Territorial du Bassin de la Sèvre Nantaise et servant au suivi de l'état des cours d'eau et des travaux qui y sont menés.`,
            imgSrc: "./bsoc2022/antoine_simon.jpg"
        }, {
            projectUrl: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/environmental-sensing.md",
            projectName: "Environmental Sensing",
            name: "Dimitri Martin",
            description: `
J’ai intégré CentraleSupélec après un bac Scientifique et une classe préparatoire Physique et Technologie.
<br><br>
Avec Philippe Thomy, je travaille sur le logiciel Environmental Sensing qu’il a créé l’année dernière et dont le but est de faciliter l’exploitation des données environnementales.`,
            imgSrc: "./bsoc2022/dimitri_martin.jpeg"
        }, {
            projectUrl: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/openfoodfacts.md",
            projectName: "Open Food Facts",
            name: "Gabriel Ben Zenou",
            description: `
Après ma 2ème année à CentraleSupélec, j’ai décidé de réaliser une année de césure pour enrichir mon expérience tant professionnelle que sociale. Avec pour objectif de m’essayer au développement informatique ainsi que de découvrir des voies professionnelles éthiques et responsables, j’ai rejoint le programme BlueHats Semester of Code.
<br><br>
Dans ce cadre, je travaille désormais en tant que stagiaire aux côtés de l’association Open Food Facts pour aider au développement de l’application libre éponyme, chargée de donner accès aux données nutritionnelles et écologiques des produits alimentaires aux populations.`,
            imgSrc: "./bsoc2022/gabriel_ben_zenou.png"
        }, {
            projectUrl: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/onyxia.md",
            projectName: "Onyxia",
            name: "Mohamed Amine Ben Salha",
            description: `
Je suis étudiant à CentraleSupélec et j'espère suivre une carrière dans la science des données. Dans mon cursus, j'ai eu l'opportunité de contribuer à des projets sur le machine learning et le big data qui m'ont permis d'acquérir les compétences nécessaires pour développer des algorithmes de data science. Cependant, il me manquait les compétences nécessaires pour déployer ces algorithmes afin de les exposer au monde. C'est pourquoi j'ai choisi de participer au programme Bluehats où je contribue à un projet open-source, Onyxia.
<br><br>
Ce stage me permet d'acquérir de nouvelles compétences en DevOps et en intégration continue tout en mettant en pratique mes compétences en science des données. De plus, les frameworks open source ont toujours été au cœur de mes projets et ce stage me permet de mieux appréhender la politique des projets open source et de leur communauté.`,
            imgSrc: "./bsoc2022/mohamed_amine_ben_salha.jpg"
        }, {
            projectUrl: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/e-combox.md",
            projectName: "e-comBox",
            name: "Sarah Orbach",
            description: `
Je code surtout depuis mon entrée en école d’ingénieur et j'effectue un stage en développement pour mon premier semestre de césure.
<br><br>
Dans le cadre du BlueHats Semester of Code, je contribue au projet e-comBox pour l’éducation nationale qui permet à des professeurs de BTS commerce de créer des sites d’études de cas pour leurs étudiants.`,
            imgSrc: "./bsoc2022/sarah_orbach.png"
        }, {
            projectUrl: "https://man.sr.ht/~codegouvfr/logiciels-libres/bsoc2022/vlc.md",
            projectName: "VideoLAN",
            name: "Yann Lochet",
            description: `
Actuellement en césure de mon cursus ingénieur CentraleSupélec, j'ai rejoint le programme BlueHats Semester of Code afin de contribuer à VLC media player et d'en améliorer le support sur téléphone GNU/Linux.
<br><br>
Libriste convaincu, c'est pour moi une excellente occasion de contribuer à un projet open-source mature tout en découvrant le service public.`,
            imgSrc: "./bsoc2022/Blank_man_placeholder.svg"
        }
    ]
};
