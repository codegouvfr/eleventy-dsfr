module.exports = {
    callout: md => {
        return {
            validate: (params) => {
                return params.trim().match(/^callout(\s+.*)?$/);
            },

            render: (tokens, idx) => {
                const m = tokens[idx].info.trim().match(/^callout(\s+.*)?$/);

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return `
<div class="fr-callout">
    <h3 class="fr-callout__title">${md.utils.escapeHtml(m[1]) || ""}</h3>
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
        return {
            validate: (params) => {
                return params.trim().match(/^quote\s*$/);
            },

            render: (tokens, idx) => {
                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return `
<figure class="fr-quote fr-quote--column">
  <blockquote>
`;
                } else {
                    // closing tag
                    return '</blockquote></figure>\n';
                }
            }
        }
    }
}
