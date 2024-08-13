module.exports = {
    permalink: function (data) {
        return `/fr/doc/${this.slugify(data.page.fileSlug)}/`;
    },
    guides: [
        {
            url: false,
            externalUrl: "https://code.gouv.fr/documentation/",
            title: "Documentation généraliste",
            description: `Documentation sur les logiciels libres dans l'administration publique : utiliser, publier, contribuer.`
        }, {
            url: false,
            externalUrl: "https://code.gouv.fr/guides/juridique/",
            title: "Guide juridique interactif : quels codes sources ouvrir ",
            description: `En répondant à quelques questions, faites un point sur vos obligations.`
        }, {
            url: false,
            externalUrl: "https://code.gouv.fr/guides/awesome/",
            title: "Guide Awesome CodeGouvFr : votre projet est-il remarquable ?",
            description: `Êtes-vous prêts à intégrer https://code.gouv.fr/fr/awesome/ ?`
        }, {
            url: false,
            externalUrl: "https://code.gouv.fr/guides/ospo/",
            title: "Guide OSPO : comment créer votre Open Source Programme Office ?",
            description: `Quels sont les éléments à aborder pour définir et mettre en oeuvre votre stratégie open source ?`
        }, {
            url: false,
            externalUrl: "https://www.data.gouv.fr/fr/pages/legal/licences/",
            title: "Les licences autorisées pour les codes sources du secteur public",
            description: `Les codes sources de l'administration peuvent être publiées sous plusieurs licences, parmi lesquelles : Apache, BSD, CeCILL, MPL et les licences du projet GNU.`
        }, {
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
            externalUrl: "https://code.gouv.fr/sources/#/about",
            title: "Présentation de code.gouv.fr/sources",
            description: ``
        }
    ]
};
