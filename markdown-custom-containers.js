module.exports = {
    callout: md => {
        const re = /^callout(\s+.*)?$/;
        return {
            validate: (params) => {
                return params.trim().match(re);
            },

            render: (tokens, idx) => {
                const params = tokens[idx].info.trim().match(re);

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return `
<div class="fr-callout">
    <h3 class="fr-callout__title">${md.utils.escapeHtml(params?.[1]) || ""}</h3>
    <div class="fr-callout__text">
`;
                } else {
                    // closing tag
                    return '</div></div>\n';
                }
            }
        }
    },
    quote: md => {
        const re = /^quote(\s+.*)?$/
        let params = undefined;
        return {
            validate: (params) => {
                return params.trim().match(re);
            },

            render: (tokens, idx) => {
                params = tokens[idx].info.trim().match(re) || params;

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return `
<figure class="fr-quote fr-quote--column">
  <blockquote>
`;
                } else {
                    // closing tag
                    const imageBlock = params && params[1] ? `
    <figcaption>
        <div class="fr-quote__image">
            <img src="${md.utils.escapeHtml(params[1]) || ""}" class="fr-responsive-img" alt="" />
        </div>
    </figcaption>` : undefined;
                    return `
    ${imageBlock || ""}
  </blockquote>
</figure>
<br>
\n`;
                }
            }
        }
    },
    alert: md => {
        const re = /^(info|warning|error|success)(\s+.*)?$/;
        return {
            validate: (params) => {
                return params.trim().match(re);
            },

            render: (tokens, idx) => {
                const params = tokens[idx].info.trim().match(re);
                const type = params?.[1];
                const title = md.utils.escapeHtml(params?.[2]) || '';

                if (tokens[idx].nesting === 1) {
                    title_elem = '';
                    small_class = 'fr-alert--sm';
                    if (title !== '') {
                        title_elem = `<h3 class="fr-alert__title">${title}</h3>`;
                        small_class = "";
                    }
                    // opening tag
                    return `
<div class="fr-alert fr-alert--${type} ${small_class}">
    ${title_elem}
`;
                } else {
                    // closing tag
                    return '</div>\n';
                }
            }
        }
    },
    accordion: md => {
        const re = /^(accordionsgroup|.*)?$/;
        return {
            validate: (params) => {
                return params.trim().match(re);
            },

            render: (tokens, idx) => {
                const params = tokens[idx].info.trim().match(re);

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    if (params?.[1] === "accordionsgroup") {
                        return `<div class="fr-accordions-group">`;
                    } else {
                        return `
<section class="fr-accordion">
    <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-${idx}">
            ${md.utils.escapeHtml(params?.[1]) || ""}
        </button>
    </h3>
    <div class="fr-collapse" id="accordion-${idx}">
`;
                    }
                } else {
                    // closing tag
                    if (params?.[1] === "accordionsgroup") {
                        return `</div>`;
                    } else {
                        return '</div></section>\n';
                    }
                }
            },

            marker: "?"
        }
    }

}