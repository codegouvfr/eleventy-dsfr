module.exports = {
    actions: [
        {
            url: "/fr/utiliser/",
            title: "Utiliser",
            description: "Mieux connaître, utiliser et concevoir les logiciels libres et les communs numériques.",
            imagePath: "/icons/coding-64.png"
        },
        {
            url: false,
            external_url: "https://code.gouv.fr/public/",
            title: "Publier",
            description: "Développer et accompagner l’ouverture et la libération des codes sources de l'administration.",
            imagePath: "/icons/programing-64.png"
        },
        {
            url: "/fr/bluehats/",
            title: "Attirer",
            description: "S’appuyer sur les logiciels libres et open source et sur les communs numériques pour renforcer l’attractivité de l’État-employeur auprès des talents du numériques.",
            imagePath: "/icons/hat-64.png"
        }
    ],
    accordionItems: [
        {
            title: "Vous êtes un agent public et souhaitez référencer dans le SILL un logiciel libre utilisé dans votre administration ?",
            content: `
<p><a href="https://sill.code.gouv.fr/add-software" target="_blank">Inscrivez-vous !</a></p>
            `
        },
        {
            title: "Vous êtes une mission de service public et souhaitez référencer vos dépôts de code source ?",
            content: `
<p>Pour ajouter une forge, un compte d'organisation GitHub ou un groupe GitLab, écrivez à <strong><a href="mailto:contact@code.gouv.fr">contact@code.gouv.fr</a></strong> ou envoyez un correctif sur <a href="https://git.sr.ht/~codegouvfr/codegouvfr-sources/tree/main/item/comptes-organismes-publics.yml" target="_blank">ce dépôt</a>.<p>
<p><strong>Attention : </strong>Nous ne référençons pas les comptes personnels.</p>
`
        },
        {
            title: "Vous êtes un BlueHat et souhaitez proposer un atelier ou un article ?",
            content: `
<p>Écrivez à <strong><a href=\"mailto:contact@code.gouv.fr\">contact@code.gouv.fr</a></strong>.</p>`
        }
    ]
};