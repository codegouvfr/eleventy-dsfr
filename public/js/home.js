(() => {
    const dataBaseUrl = `${window.location.origin}/internaldata`;

    const random = (items) => {
        return items[Math.floor(Math.random() * items.length)];
    }

    const logoAltTemplate = (strings, name) => `Logo de ${name}`;

    const sillSoftwareTitleLink = document.querySelector(".sill .fr-card__title a");
    const sillSoftwareImg = document.querySelector(".sill .fr-card__header img");

    const sillDetailUrl = `https://code.gouv.fr/sill/detail`;

    const getSill = async () => {
        const response = await fetch(`${dataBaseUrl}/sill.json`);
        return await response.json();
    }

    getSill().then(softwareList => {
        const randomSoftware= random(softwareList);
        sillSoftwareTitleLink.textContent = randomSoftware.name;
        sillSoftwareTitleLink.href = `${sillDetailUrl}?name=${randomSoftware.name}`;
        sillSoftwareImg.src = randomSoftware.logoUrl || randomSoftware.comptoirDuLibreSoftware?.logoUrl;
        sillSoftwareImg.alt = logoAltTemplate`${randomSoftware.name}`;
    });

    const awesomeProjectTitleLink = document.querySelector(".awesome .fr-card__title a");
    const awesomeProjectImg = document.querySelector(".awesome .fr-card__header img");

    const awesomeUrl = `${window.location.origin}/fr/awesome`;

    const getAwesome = async () => {
        const response = await fetch(`https://code.gouv.fr/data/awesome-codegouvfr.json`);
        return await response.json();
    }

    getAwesome().then(awesomeProjects => {
        const randomProject= random(awesomeProjects);
        awesomeProjectTitleLink.textContent = randomProject.name;
        awesomeProjectTitleLink.href = awesomeUrl;
        awesomeProjectImg.src = randomProject.logo;
        awesomeProjectImg.alt = logoAltTemplate`${randomProject.name}`;
    });
})();
