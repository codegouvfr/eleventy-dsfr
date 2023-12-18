module.exports = {
    permalink: function (data) {
        return `/fr/doc/${this.slugify(data.page.fileSlug)}/`;
    },
    guides: [
        {
            url: false,
            externalUrl: "https://guides.etalab.gouv.fr/logiciels/",
            title: "Guide pratique sur l'ouverture des codes sources",
            description: `Ce guide vous aide à définir vos objectifs en matière d'ouverture des codes sources.`
        }, {
            url: false,
            externalUrl: "https://guide-juridique-logiciel-libre.etalab.gouv.fr/",
            title: "Guide juridique interactif : quels codes sources ouvrir ",
            description: `En répondant à quelques questions, faites un point sur vos obligations.`
        }, {
            url: false,
            externalUrl: "https://www.data.gouv.fr/fr/pages/legal/licences/",
            title: "Les licences autorisées pour les codes sources du secteur public",
            description: `Les codes sources de l'administration peuvent être publiées sous plusieurs licences, parmi lesquelles : Apache, BSD, CeCILL, MPL et les licences du projet GNU.`
        }, {
            url: false,
            externalUrl: "https://www.numerique.gouv.fr/publications/politique-logiciel-libre/",
            title: "Politique de contribution aux logiciels libres de l’État",
            description: `Depuis 2018, la politique de contribution aux logiciels libres de l’État guide l'ouverture des codes sources publics et la contribution à des projets tiers.`
        }, {
            url: false,
            externalUrl: "https://www.legifrance.gouv.fr/circulaire/id/45162",
            title: "Circulaire relative à la politique publique de la donnée, des algorithmes et des codes sources",
            description: `Une nouvelle impulsion pour l'ouverture des codes sources de toutes les administrations.`
        },
	{
            url: false,
            externalUrl: "https://mentor.gouv.fr/catalog/1754",
            title: "Capsule Mentor : aborder en confiance les logiciels libres dans l'administration",
            description: `Une capsule de formation sur la plateforme des agents publics Mentor : elle vous permettra de découvrir l'offre de service de la mission logiciels libres.`
        }
    ],
    docs: [
        {
	    url: false,
            externalUrl: "https://code.gouv.fr/sill/readme",
            title: "Présentation du socle interministériel de logiciels libres",
            description: ``
        }, {
            url: "/fr/doc/licences-libres-dinum/",
            title: "Les licences libres acceptées pour les logiciels du SILL",
            description: ``
        },
        {
            url: false,
            externalUrl: "https://code.gouv.fr/public/#/about",
            title: "Présentation de code.gouv.fr/public",
            description: ``
        }
    ]
};
